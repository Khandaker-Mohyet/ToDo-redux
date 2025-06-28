import TasksCard from "@/components/module/tasks/TasksCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook"


function Task() {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks)
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div>
        <h1>Tasks</h1>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task)=>(
          <TasksCard task={task} />
        ))}
      </div>
    </div>
  )
}

export default Task