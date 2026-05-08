import {
  Features,
  Hero,
  Productivity,
  Signup,
  Testimonials,
} from "@/views/home";

export default function Home() {
  return (
    <main className="flex flex-col gap-30 px-7">
      <Hero />
      <Features />
      <Productivity />
      <Testimonials />
      <Signup />
    </main>
  );
}
