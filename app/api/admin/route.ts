import { AdminLoginData } from "@/app/types";
import { NextRequest } from "next/server";
import { Reply } from "../utils";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase.config";
import { cookies } from "next/headers";
import { expires } from "@/app/actions";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function GET(_request: NextRequest) {
  const data = (await getDoc(doc(db, "app", "admin"))).data() as AdminLoginData;
  return Reply({ name: data.name }, 200);
}

export async function POST(request: NextRequest) {
  const cookieStore = cookies();
  const { name, password } = (await request.json()) as AdminLoginData;
  if (!name || !password) return Reply({ message: "Enter details!" }, 400);
  const data = (await getDoc(doc(db, "app", "admin"))).data() as AdminLoginData;
  const compare = await bcrypt.compare(password, data.password);
  if (data.name === name && compare) {
    const token = jwt.sign(data, process.env.JWT_SECRET_KEY!);
    cookieStore.set("admin-token", token, { expires });
  } else {
    return Reply({ message: "Unauthorized!" }, 401);
  }
  return Reply({ message: "Successfully logged in." }, 200);
}

// const hashedPassword = await bcrypt.hash("123456", 10);
