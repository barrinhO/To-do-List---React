import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") ?? "Sem título";
  const description = searchParams.get("description") ?? "Sem descrição";

  return (
    <div className="h-screen w-screen bg-neutral-900 p-6 flex justify-center">
      <div className="w-[500px] space-y-6">
        <div className="flex justify-center relative mb-6 text-white">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 bg-neutral-700 hover:bg-neutral-600 px-2 py-1 rounded-md transition"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl font-bold">Detalhes da Tarefa</h1>
        </div>

        <div className="bg-neutral-800 p-4 rounded-md shadow">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-neutral-300 mt-2 whitespace-pre-wrap">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
