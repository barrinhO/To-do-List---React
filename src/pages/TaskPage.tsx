import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") ?? "Sem título";
  const description = searchParams.get("description") ?? "Sem descrição";

  return (
    <div className="h-screen w-screen bg-slate-800 p-6 flex justify-center">
      <div className="w-[500px] space-y-6">
        <div className="flex justify-center relative mb-6 text-slate-100">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 bg-slate-500 rounded-md pl-2 pr-2"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
