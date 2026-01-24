import type { FormEvent } from "react";
import Button from "../atoms/button";
import Input from "../atoms/input";

interface TodoFormProps {
  onSubmit: (e: FormEvent) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
}

export default function TodoForm({
  onSubmit,
  inputValue,
  setInputValue,
}: TodoFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex gap-2 mb-4">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
        required
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
