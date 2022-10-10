import { useRecoilState } from "recoil";
import { todoListFilterState } from "../atom/atom";

export const TodoListFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};
