"use client";

import Button from "../atoms/button";
import { motion } from "motion/react";

export interface TodoItemProps extends Omit<
  React.ComponentProps<typeof motion.li>,
  "onToggle" | "ref"
> {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItemMotion({
  id,
  title,
  completed,
  onToggle,
  onDelete,
  ...props
}: TodoItemProps) {
  return (
    <motion.li
      layout
      className="flex gap-2 items-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      layoutId={`item-${id}`}
      {...props}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span className={completed ? "line-through text-gray-500" : ""}>
        {title}
      </span>
      <Button
        onClick={() => onDelete(id)}
        className="px-2 py-1 text-red-500 hover:bg-red-50 rounded text-xs hover:cursor-pointer bg-transparent shadow-none"
      >
        remove
      </Button>
    </motion.li>
  );
}
