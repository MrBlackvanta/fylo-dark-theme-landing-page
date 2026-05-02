import { features } from "@/data";

export default function Features() {
  return (
    <section className="mx-auto max-w-218 md:mt-9.5 md:mb-4.25">
      <ul className="grid grid-cols-1 gap-20 text-center text-white md:grid-cols-2">
        {features.map((feature) => (
          <li key={feature.title} className="flex flex-col items-center gap-2">
            <feature.icon className="mb:mb-2 mb-4 size-20 md:size-26" />
            <h2 className="text-lg leading-6 font-bold">{feature.title}</h2>
            <p className="text-body md:text-sm md:leading-5.25">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
