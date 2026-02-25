export function TaskForm() {
  return (
    <>
      <div className="header">
        <h1>Smart Task Flow</h1>
      </div>
      <div className="input-container">
        <form id="task-form">
          <input
            id="task-input"
            type="text"
            placeholder="Enter task"
            required
          />
          <select id="priority-select">
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
