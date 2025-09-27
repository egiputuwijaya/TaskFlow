import prisma from "@/lib/prisma";

export async function DeleteTaskToHistory(taskId) {
  const task = await prisma.yourTask.findUnique({
    where: { id: taskId },
  });

  if (!task) {
    throw new Error("Task not found");
  }

  await prisma.history.create({
    data: {
      id_user: task.id_user,
      nameTask: task.nameTask,
      typeTask: task.typeTask,
      dueDateTime: task.dueDateTime,
      priority: task.priority,
      description: task.description,
      statusTask: task.statusTask,
    },
  });

  return {success: true, message: "Task move to history"}
}
