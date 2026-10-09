import NameForm from "@/components/NameForm";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Welcome</h1>
      <p className="text-neutral-500 mb-6">
        Small demo of components, props, state and events. Use the menu above.
      </p>
      <NameForm />
    </div>
  );
}