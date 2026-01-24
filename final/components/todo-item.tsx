export interface TodoItemProps extends Omit<
  React.HTMLAttributes<HTMLLIElement>,
  "onToggle"
> {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({
  id,
  title,
  completed,
  onToggle,
  onDelete,
  ...props
}: TodoItemProps) {
  return (
    <li className="flex gap-2 items-center" {...props}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span className={completed ? "line-through text-gray-500" : ""}>
        {title}
      </span>
      <button
        onClick={() => onDelete(id)}
        className="px-2 py-1 text-red-500 hover:bg-red-50 rounded text-xs hover:cursor-pointer"
      >
        remove
      </button>
    </li>
  );
}
