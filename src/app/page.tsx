import { Features, Hero, Productivity, Testimonials } from "@/views/home";

export default function Home() {
  return (
    <main className="flex flex-col gap-30 px-1">
      <Hero />
      <Features />
      <Productivity />
      <Testimonials />
    </main>
  );
}
