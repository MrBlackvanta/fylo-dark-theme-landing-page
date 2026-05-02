import { Hero, Features } from "@/views/home";

export default function Home() {
  return (
    <main className="flex flex-col gap-30">
      <Hero />
      <Features />
    </main>
  );
}
