import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

//  Tambah Task
export async function POST(req) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const body = await req.json();
    const {
      nameTasks,
      typeTasks,
      dueDateTime,
      priority,
      description,
      statusTask,
    } = body;

    const task = await prisma.yourTask.create({
      data: {
        id_user: decoded.id,
        nameTasks,
        typeTasks,
        dueDateTime: new Date(dueDateTime),
        priority,
        description,
        statusTask,
      },
    });

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal tambah task" }, { status: 500 });
  }
}

// Ambil semua task user login
export async function GET(req) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    const tasks = await prisma.yourTask.findMany({
      where: { id_user: decoded.id },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal ambil tasks" }, { status: 500 });
  }
}
