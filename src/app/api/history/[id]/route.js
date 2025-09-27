import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET;

export async function DELETE(req, { params }) {
  try {
    const token = cookies().get("token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    const { id } = params;

    // Pastikan history yang dihapus memang milik user
    const history = await prisma.history.findUnique({
      where: { id },
    });

    if (!history) {
      return NextResponse.json(
        { error: "History tidak ditemukan" },
        { status: 404 }
      );
    }

    if (history.id_user !== decoded.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Hapus data
    await prisma.history.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "History berhasil dihapus" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error hapus history:", error);
    return NextResponse.json({ error: "Gagal hapus history" }, { status: 500 });
  }
}
