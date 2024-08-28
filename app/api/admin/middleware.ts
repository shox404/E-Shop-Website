import { NextRequest, NextResponse } from "next/server";
import { reply } from "../utils";
import jwt from "jsonwebtoken";

export async function middleware(request: NextRequest) {
  console.log("hi");
  const token = request.cookies.get("admin-token")?.value;
  if (!token) return reply({ message: "Unauthorised!" }, 401);
  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY || "");
    return NextResponse.next();
  } catch (error) {
    return reply({ message: "Invalid token!" }, 401);
  }
}

// export const config = {
//   matcher: ["/((?!api|_next/static|favicon.ico).*)"],
// };
