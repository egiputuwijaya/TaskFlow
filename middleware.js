import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function Middleware(req) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    await jwtVerify(token, new TextEncoder(), encode(process.env.JWT_SECRET));
    return NextResponse.json();
  } catch (eror) {
    console.log("JWT Error:", eror);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
