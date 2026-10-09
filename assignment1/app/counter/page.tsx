import Counter from "@/components/Counter";

export default function CounterPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Counter</h1>
      {/* same component, different props */}
      <div className="flex flex-col gap-4">
        <Counter label="Steps of 1" step={1} max={10} />
        <Counter label="Steps of 5" step={5} max={50} />
      </div>
    </div>
  );
}