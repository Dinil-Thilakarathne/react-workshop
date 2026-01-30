"use client";

import { useState } from "react";
import TodoItem, { TodoItemProps } from "../molecules/todo-item";
import TodoForm from "../molecules/todo-form";
import { AnimatePresence, motion } from "motion/react";
import TodoItemMotion from "../molecules/todo-item-motion";

export default function TodoAppMotion() {
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

      <TodoForm
        onSubmit={handleSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <motion.ul className="space-y-2" layout layoutId="list">
        <AnimatePresence mode="popLayout" initial={false}>
          {todos.map((todo) => (
            <TodoItemMotion
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </AnimatePresence>
      </motion.ul>

      {todos.length === 0 && (
        <p className="text-gray-500 text-center">
          No todos yet. Add one above!
        </p>
      )}
    </div>
  );
}
