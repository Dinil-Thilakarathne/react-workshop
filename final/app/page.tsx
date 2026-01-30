import TodoApp from "@/components/organisms/todo-app";
import TodoAppMotion from "@/components/organisms/todo-app-motion";

export default function Page() {
  return (
    <main className=" min-h-screen w-screen flex items-center justify-center flex-col">
      <TodoApp />
      {/* <TodoAppMotion /> */}
    </main>
  );
}
