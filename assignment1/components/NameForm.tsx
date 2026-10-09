"use client";

import { useState } from "react";

export default function NameForm() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) setSubmitted(true);
  };

  // show greeting after submit, otherwise the form
  if (submitted) {
    return (
      <div>
        <p className="mb-3">Hi {name.trim()}, nice to meet you.</p>
        <button
          onClick={() => { setName(""); setSubmitted(false); }}
          className="text-sm underline text-neutral-500"
        >
          change name
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="your name"
        className="border border-neutral-300 rounded px-3 py-1.5 flex-1"
      />
      <button className="border border-neutral-900 rounded px-3 py-1.5">Say hi</button>
    </form>
  );
}