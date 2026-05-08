import { testimonials } from "@/data";
import Image from "next/image";
import bigQuote from "@/assets/images/bg-quotes.png";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-295">
      <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
        {testimonials.map((testimonial, index) => (
          <li
            key={testimonial.name}
            className="bg-primary-dark-blue-4 shadow-card relative w-full max-w-70 rounded-sm px-5 py-6 md:max-w-90 md:pt-10"
          >
            {index === 0 && (
              <Image
                src={bigQuote}
                alt=""
                className="absolute -top-5 left-0 -z-1 w-full max-w-8 lg:-top-12 lg:max-w-19.75"
              />
            )}
            <blockquote>
              <p className="text-body-xs leading-4.5 md:text-sm md:leading-5.25">
                {testimonial.description}
              </p>
              <footer className="mt-4.25 flex items-center gap-2 md:mt-6">
                <Image
                  src={testimonial.image.src}
                  alt=""
                  className="size-6 rounded-full"
                />
                <div className="font-open-sans grid gap-1">
                  <span className="text-body-xs leading-3 font-bold tracking-tight text-white">
                    {testimonial.name}
                  </span>
                  <span className="text-[7px] leading-2.5">
                    {testimonial.title}
                  </span>
                </div>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  );
}
