import { AdminLoginData } from "@/app/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, password } = (await request.json()) as AdminLoginData;
  
  return NextResponse.json({ message: "Successfully logged in." });
}
