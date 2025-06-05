import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`bg-neutral-700 hover:bg-neutral-600 active:bg-neutral-500 text-white px-4 py-2 rounded-md font-medium shadow transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
