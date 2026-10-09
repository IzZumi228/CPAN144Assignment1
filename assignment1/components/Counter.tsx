"use client";

import { useState } from "react";

type CounterProps = {
  label: string;
  step: number;
  max: number;
};

export default function Counter({ label, step, max }: CounterProps) {
  const [count, setCount] = useState(0);

  const atMax = count >= max;

  return (
    <div className="border border-neutral-200 rounded p-4">
      <p className="text-sm text-neutral-500 mb-2">{label}</p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count - step)}
          disabled={count <= 0}
          className="border border-neutral-300 rounded px-3 disabled:opacity-30"
        >
          -
        </button>
        <span className="w-10 text-center text-lg">{count}</span>
        <button
          onClick={() => setCount(count + step)}
          disabled={atMax}
          className="border border-neutral-300 rounded px-3 disabled:opacity-30"
        >
          +
        </button>
        <button onClick={() => setCount(0)} className="text-sm underline text-neutral-500 ml-auto">
          reset
        </button>
      </div>
      {atMax && <p className="text-sm mt-2">max reached ({max})</p>}
    </div>
  );
}