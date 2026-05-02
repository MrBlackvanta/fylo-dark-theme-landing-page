import { IconArrowSVG } from "@/components/icons";
import { productivity } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Productivity() {
  const { image, title, descriptions, cta } = productivity;

  return (
    <section className="mx-auto flex max-w-308.75 flex-col items-center gap-12 md:flex-row md:gap-14.25">
      <Image
        src={image.src}
        alt=""
        aria-hidden="true"
        width={image.width}
        height={image.height}
        sizes="(min-width: 1024px) 38.4rem, (min-width: 768px) 19rem, 100vw"
        className="w-full max-w-120 px-1 lg:max-w-153.75"
      />
      <div className="space-y-4">
        <h2 className="md:text-heading-md text-lg leading-6 font-bold md:mt-0.75 md:max-w-10/12 md:leading-12.5">
          {title}
        </h2>
        {descriptions.map((description) => (
          <p key={description} className="text-body md:text-base md:leading-6">
            {description}
          </p>
        ))}
        <Link href={cta.route} className="btn-link group md:mt-2">
          {cta.text}
          <IconArrowSVG className="size-5 shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:fill-white" />
        </Link>
      </div>
    </section>
  );
}
