import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <input
      className="border p-2 rounded flex-1 text-black bg-white"
      {...props}
    />
  );
}
