import { NextRequest, NextResponse } from "next/server";

export function GET(
  req: NextRequest,
  {
    params: { authRoutes },
  }: {
    params: {
      authRoutes: string[];
    };
  }
) {
  console.log(authRoutes);
  return NextResponse.json({
    message: "hi there",
  });
}

export function POST() {
  return NextResponse.json({
    message: "this is post route",
  });
}
