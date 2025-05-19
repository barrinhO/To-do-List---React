import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

type AddTaskProps = {
  onAddTaskSubmit: (title: string, description: string) => void;
};

export default function AddTask({ onAddTaskSubmit }: AddTaskProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) {
      return alert("Preencha o título e a descrição da tarefa.");
    }
    onAddTaskSubmit(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full"
      />

      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full"
      />

      <Button onClick={handleSubmit} className="w-full">
        Adicionar
      </Button>
    </div>
  );
}
