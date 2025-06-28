import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook"


function Task() {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks)
  return (
    <div>Task</div>
  )
}

export default Task