import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

type Task = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

type TasksProps = {
  tasks: Task[];
  onTaskClick: (taskId: string) => void;
  onDeleteTaskClick: (taskId: string) => void;
};

export default function Tasks({
  tasks,
  onTaskClick,
  onDeleteTaskClick,
}: TasksProps) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task: Task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <Button
            onClick={() => onTaskClick(task.id)}
            className={`text-left w-full ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </Button>

          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>

          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}
