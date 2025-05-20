import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`bg-slate-600 text-white p-2 rounded-md ${
        rest.className ?? ""
      }`}
    >
      {children}
    </button>
  );
}
