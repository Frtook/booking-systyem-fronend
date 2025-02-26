import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.clone().pathname;
  const token = req.cookies.get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  if (path === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = { matcher: ["/dashboard/:path*"] };
