import { features } from "@/data";

export default function Features() {
  return (
    <section
      className="mx-auto mb-10 max-w-218 md:mt-9.5 md:mb-4.25"
      aria-labelledby="features-heading"
    >
      <h2 id="features-heading" className="sr-only">
        Features
      </h2>
      <ul className="reveal-stagger grid grid-cols-1 gap-20 text-center md:grid-cols-2">
        {features.map((feature) => (
          <li key={feature.title} className="flex flex-col items-center gap-2">
            <feature.icon
              className="mb-4 size-20 md:mb-2 md:size-26"
              aria-hidden="true"
            />
            <h3 className="text-lg leading-6 font-bold">{feature.title}</h3>
            <p className="text-body">{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
