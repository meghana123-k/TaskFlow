export function FilterButtons() {
  return (
    <div className="filter-section">
      <div className="filter-buttons">
        <button data-filter="all">All</button>
        <button data-filter="completed">Completed</button>
        <button data-filter="pending">Pending</button>
        <button data-filter="high">High Priority</button>
      </div>
    </div>
  );
}
