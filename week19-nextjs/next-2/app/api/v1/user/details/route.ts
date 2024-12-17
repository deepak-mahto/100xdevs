import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    user: "deepak",
    email: "deepak@gmail.com",
  });
}
