import { hero } from "@/data";
import Image from "next/image";

export default function Hero() {
  const { title, description, image, cta } = hero;
  return (
    <section className="mx-auto flex max-w-180 flex-col items-center px-3 text-center font-bold text-white">
      <Image
        src={image.src}
        alt=""
        aria-hidden="true"
        width={image.width}
        height={image.height}
        sizes="(min-width: 1024px) 45rem, (min-width: 768px) 19rem, 100vw"
        fetchPriority="high"
        loading="eager"
        className="w-full max-w-120 px-1 lg:max-w-180"
      />
      <h1 className="md:text-heading-md mt-8.25 text-2xl leading-9 md:mt-9 md:leading-15">
        {title}
      </h1>
      <p className="text-body mt-3.75 mb-8 px-1 md:my-8 md:max-w-10/12">
        {description}
      </p>
      <button type="button" className="btn-primary">
        {cta.text}
      </button>
    </section>
  );
}
