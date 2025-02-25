import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt, deleteSession } from "@/lib/session";

const protectedRoutes = ["/dashboard", "admin"];
const publicRoutes = ["/login", "/regester"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const cookie = (await cookies()).get("session")?.value;
  const session = (await decrypt(cookie)) as SessionPayload;

  if (!session) {
    await deleteSession();
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  // if (publicRoutes.includes(path)) { // fix this not work
  //   return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  // }
  if (session.role === "ADMIN") {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = { matcher: ["/dashboard/:path*"] };
