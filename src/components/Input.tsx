type InputProps = {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  className?: string;
};

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  id,
  className = "",
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className={`border border-slate-300 outline-slate-400 px-4 py-2 rounded-md ${className}`}
    />
  );
}
