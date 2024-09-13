import { AdminData } from "@/app/global/types";
import { NextRequest } from "next/server";
import { reply } from "@/app/api/utils";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase.config";
import { cookies } from "next/headers";
import { expires } from "@/app/global/actions";
import { verify } from "@/app/api/utils";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function GET(_request: NextRequest) {
  const data = (await getDoc(doc(db, "app", "admin"))).data() as AdminData;
  return reply({ name: data.name }, 200);
}

export async function POST(request: NextRequest) {
  const cookieStore = cookies();
  const { name, password } = (await request.json()) as AdminData;
  if (!name || !password) return reply({ msg: "Enter details!" }, 400);
  const data = (await getDoc(doc(db, "app", "admin"))).data() as AdminData;
  const compare = await bcrypt.compare(password, data.password);
  if (data.name === name && compare) {
    const token = jwt.sign(data, process.env.JWT_SECRET_KEY!);
    cookieStore.set("admin-token", token, { expires });
  } else {
    return reply({ msg: "Incorrect password or name!" }, 401);
  }
  return reply({ msg: "Successfully logged in." }, 200);
}

export async function PUT(request: NextRequest) {
  await verify(request);
  const cookieStore = cookies();
  const data = (await request.json()) as AdminData;
  const secured = await bcrypt.hash(data.password, 10);
  await updateDoc(doc(db, "app", "admin"), { ...data, password: secured });
  const token = jwt.sign(data, process.env.JWT_SECRET_KEY!);
  cookieStore.set("admin-token", token, { expires });
  return reply({ msg: "Successfully updated." }, 200);
}
