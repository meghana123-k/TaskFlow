import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";
import { useState } from "react";
export function TaskPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  type Priority = "low" | "medium" | "high";

  interface Task {
    id: number;
    title: string;
    priority: Priority;
    completed: boolean;
    createdAt: number;
  }
  function addTask(title: string, priority: Priority) {
    const newTask: Task = {
      id: Date.now(),
      title,
      priority,
      completed: false,
      createdAt: Date.now(),
    };
    setTasks((prev) => [...prev, newTask]);
  }
  function toggleCompletion(id: number) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  }
  function deleteTasks(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  return (
    <>
      <TaskForm addTask={addTask} />
      <TaskList
        filteredTasks={filteredTasks}
        toggleCompletion={toggleCompletion}
        deleteTasks={deleteTasks}
      />
    </>
  );
}
