import { AdminLoginData } from "@/app/types";
import { NextRequest } from "next/server";
import { Reply } from "../../utils";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const { name, password } = (await request.json()) as AdminLoginData;

  //   JWT_SECRET_KEY
  if (!name || !password) return Reply({ message: "" }, 100);

  return Reply({ message: "Successfully logged in." }, 200);
}
