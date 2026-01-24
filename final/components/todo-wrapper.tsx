"use client";

import { startTransition, useState, ViewTransition } from "react";
import TodoItem, { TodoItemProps } from "./todo-item";
import Button from "./button";

export default function TodoWrapper() {
  const [todos, setTodos] = useState<
    Omit<TodoItemProps, "onToggle" | "onDelete">[]
  >([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now().toString(),
        title: inputValue,
        completed: false,
      },
    ]);
    setInputValue("");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-8  min-h-[60vh]  border rounded-2xl min-w-[max(320px,60vw)]">
      <h1 className="text-4xl lg:text-8xl font-bold mb-4">Todo List</h1>

      {/* todo form */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 rounded flex-1 text-black"
          placeholder="Add a new todo..."
          required
        />
        <Button type="submit">Add</Button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-gray-500 text-center">
          No todos yet. Add one above!
        </p>
      )}
    </div>
  );
}
