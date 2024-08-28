import { NextResponse } from "next/server";

export const reply = (data: any, status: number) => {
  return NextResponse.json(data, { status: status });
};
