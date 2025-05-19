type TitleProps = {
  title?: string;
};

export default function Title({
  title = "Gerenciador de Tarefas",
}: TitleProps) {
  return (
    <h1 className="text-3xl text-slate-100 font-bold text-center">{title}</h1>
  );
}
