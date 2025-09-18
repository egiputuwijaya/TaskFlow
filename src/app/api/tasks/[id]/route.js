import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET satu task by ID
export async function GET(req, { params }) {
  try {
    const task = await prisma.yourTask.findUnique({
      where: { id: params.id },
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
    const body = await req.json();

    const updatedTask = await prisma.yourTask.update({
      where: { id: params.id },
      data: {
        nameTasks: body.nameTasks,
        typeTasks: body.typeTasks,
        dueDateTime: new Date(body.dueDateTime),
        priority: body.priority,
        description: body.description,
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
    await prisma.yourTask.delete({
      where: { id: params.id },
    });

    return NextResponse.json(
      { message: "Task deleted successfully" },
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
