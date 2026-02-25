import { FilterButtons } from "../components/FilterButtons";
import { SearchBar } from "../components/SearchBar";
import { Summary } from "../components/Summary";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";

export function TaskPage() {
  return (
    <>
      <TaskForm />
      <FilterButtons />
      <SearchBar />
      <TaskList />
      <Summary />
    </>
  );
}
