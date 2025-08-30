import prisma from "../../../../../lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // CEK EMAIL
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid Credential" },
        { status: 401 }
      );
    }

    // CEK PASSWORD
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // JWT SECRET TOKEN
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });

    // SIMPAN JWT PADA COOKIE
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60,
    });

    return NextResponse.json({
      message: "Login successfull",
      user: { id: user.id, email: user.email },
      token,
    });
  } catch (eror) {
    console.log(eror);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
