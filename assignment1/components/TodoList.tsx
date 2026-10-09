"use client";

import { useState } from "react";
import TodoItem from "./TodoItem";

type Todo = { id: number; text: string; done: boolean };

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input.trim(), done: false }]);
    setInput("");
  };

  const toggleTodo = (id: number) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const deleteTodo = (id: number) => setTodos(todos.filter((t) => t.id !== id));

  const doneCount = todos.filter((t) => t.done).length;

  return (
    <div>
      <form onSubmit={addTodo} className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="add a task"
          className="border border-neutral-300 rounded px-3 py-1.5 flex-1"
        />
        <button className="border border-neutral-900 rounded px-3 py-1.5">Add</button>
      </form>

      {todos.length === 0 ? (
        <p className="text-neutral-400 text-sm">nothing here yet</p>
      ) : (
        <>
          <ul>
            {todos.map((t) => (
              <TodoItem
                key={t.id}
                text={t.text}
                done={t.done}
                onToggle={() => toggleTodo(t.id)}
                onDelete={() => deleteTodo(t.id)}
              />
            ))}
          </ul>
          <p className="text-sm text-neutral-500 mt-3">
            {doneCount === todos.length ? "all done!" : `${doneCount} of ${todos.length} done`}
          </p>
        </>
      )}
    </div>
  );
}