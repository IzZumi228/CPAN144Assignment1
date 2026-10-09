type TodoItemProps = {
    text: string;
    done: boolean;
    onToggle: () => void;
    onDelete: () => void;
  };
  
  export default function TodoItem({ text, done, onToggle, onDelete }: TodoItemProps) {
    return (
      <li className="flex items-center gap-3 py-2 border-b border-neutral-100">
        <input type="checkbox" checked={done} onChange={onToggle} />
        <span className={done ? "line-through text-neutral-400" : ""}>{text}</span>
        <button onClick={onDelete} className="ml-auto text-sm text-neutral-400 hover:text-neutral-900">
          delete
        </button>
      </li>
    );
  }