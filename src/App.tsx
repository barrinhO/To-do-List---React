import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";
import Title from "./components/Title";

type Task = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>(() =>
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tutorialShown = localStorage.getItem("tutorialShown");
    if (!tutorialShown) {
      alert(
        "Bem-vindo ao Gerenciador de Tarefas do BARRÃO CÓSMICO!\n\n" +
          "• Digite um título para sua tarefa e escreva uma breve descrição.\n" +
          "• Use o botão “Adicionar” para criar uma nova tarefa.\n" +
          "• Clique no título para marcar/desmarcar como concluída.\n" +
          "• Use a lixeira para remover.\n" +
          "• Clique na seta para ver os detalhes de sua tarefa.\n"
      );
      localStorage.setItem("tutorialShown", "true");
    }
  }, []);

  function onTaskClick(taskId: string): void {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId: string): void {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title: string, description: string): void {
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-neutral-900 flex justify-center p-6">
      <div className="w-[500px] space-y-6">
        <Title />
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
