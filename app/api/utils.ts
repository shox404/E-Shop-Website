import { type NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const reply = (data: any, status: number) => {
  return NextResponse.json(data, { status: status });
};

export async function verify(request: NextRequest): Promise<void> {
  const token = request.cookies.get("admin-token")?.value as string;
  if (!token) throw reply({ message: "Unauthorised!" }, 401);
  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY!);
  } catch (error) {
    throw reply({ message: "Invalid token!" }, 403);
  }
}
