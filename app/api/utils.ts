import { NextResponse } from "next/server";

export const Reply = (data: any, status: number) => {
  return NextResponse.json(data, { status: status });
};
