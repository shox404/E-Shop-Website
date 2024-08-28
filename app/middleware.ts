import { NextRequest, NextResponse } from "next/server";
import { reply } from "./api/utils";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("admin-token")?.value;
  if (!token) return reply({ message: "Unauthorised!" }, 401);
  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY || "");
    return NextResponse.next();
  } catch (error) {
    return reply({ message: "Invalid token!" }, 401);
  }
}

export const config = {
  matcher: ["/login", "/admin"],
};
