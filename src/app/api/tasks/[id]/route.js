import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET satu task by ID
export async function GET(req, { params }) {
  try {
    const { id } = params; // ✅ langsung ambil id

    const task = await prisma.yourTask.findUnique({
      where: { id },
    });

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    console.error("❌ Error GET task:", error);
    return NextResponse.json(
      { error: "Failed to fetch task", detail: error.message },
      { status: 500 }
    );
  }
}

// UPDATE task by ID
export async function PUT(req, { params }) {
  try {
    const { id } = params; // ✅ langsung ambil id
    const body = await req.json();

    const updatedTask = await prisma.yourTask.update({
      where: { id },
      data: {
        nameTasks: body.nameTasks,
        typeTasks: body.typeTasks,
        ...(body.dueDateTime
          ? { dueDateTime: new Date(body.dueDateTime) }
          : {}), // validasi Date
        priority: body.priority,
        description: body.description,
        statusTask: body.statusTask,
      },
    });

    return NextResponse.json(updatedTask, { status: 200 });
  } catch (error) {
    console.error("❌ Error updating task:", error);
    return NextResponse.json(
      { error: "Failed to update task", detail: error.message },
      { status: 500 }
    );
  }
}

// DELETE task by ID
export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    // cari task dulu
    const task = await prisma.yourTask.findUnique({
      where: { id },
    });

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    // simpan ke tabel History
    await prisma.history.create({
      data: {
        id_user: task.id_user,
        nameTasks: task.nameTasks,
        typeTasks: task.typeTasks,
        dueDateTime: task.dueDateTime,
        priority: task.priority,
        description: task.description,
        statusTask: task.statusTask,
      },
    });

    // hapus dari yourTask
    await prisma.yourTask.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Task moved to history successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error deleting task:", error);
    return NextResponse.json(
      { error: "Failed to delete task", detail: error.message },
      { status: 500 }
    );
  }
}
