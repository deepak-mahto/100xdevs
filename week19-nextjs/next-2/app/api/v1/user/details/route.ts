import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    name: "deepak",
    email: "deepak@gmail.com",
  });
}
