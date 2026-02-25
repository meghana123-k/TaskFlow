import { useState } from "react";

type Priority = "low" | "medium" | "high";

type TaskFormProps = {
  addTask: (text: string, priority: Priority) => void;
};

export function TaskForm({ addTask }: TaskFormProps) {
  const [inputText, setInputText] = useState<string>("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low");

  function submitTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addTask(inputText, priority);
    setInputText("");
    setPriority("low");
  }
  return (
    <>
      <div className="header">
        <h1>Smart Task Flow</h1>
      </div>
      <div className="input-container">
        <form id="task-form" onSubmit={submitTask}>
          <input
            id="task-input"
            type="text"
            placeholder="Enter task"
            required
            value={inputText}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setInputText(event?.target.value)
            }
          />
          <select
            id="priority-select"
            value={priority}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setPriority(e.target.value as Priority)
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
    </>
  );
}
