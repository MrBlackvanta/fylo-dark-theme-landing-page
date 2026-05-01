import { MinusSVG, PlusSVG, StarSVG } from "@/components/icons";
import { data } from "@/data/data";
import React from "react";

export default function Home() {
  const { title, questions } = data;

  return (
    <main className="text-dark-purple z-1 grid flex-1 place-items-center px-6">
      <section
        className="shadow-card border-light-gray w-full max-w-150 space-y-6 rounded-lg border bg-white p-6 sm:space-y-8 sm:rounded-2xl sm:p-10"
        aria-labelledby={title}
      >
        <div className="flex items-center gap-6">
          <StarSVG className="size-6 sm:size-10" />
          <h1 className="display" id={title}>
            {title}
          </h1>
        </div>
        <ul className="divide-light-gray space-y-5 divide-y sm:space-y-6">
          {questions.map((question, index) => (
            <li key={question.id} className="pb-5 last:pb-0 sm:pb-6">
              <details
                className="group marker:content-none details-content:h-0 details-content:overflow-hidden open:details-content:h-auto"
                open={index === 0}
              >
                <summary className="focus-visible-ring flex cursor-pointer items-center justify-between gap-6">
                  <h2 className="title group-hover:text-pink ease group-open:text-pink transition-colors duration-300">
                    {question.question}
                  </h2>
                  <MinusSVG
                    className="hidden size-7.5 shrink-0 group-open:block"
                    aria-hidden="true"
                  />
                  <PlusSVG
                    className="size-7.5 shrink-0 group-open:hidden"
                    aria-hidden="true"
                  />
                </summary>
                <p className="body text-grayish-purple mt-6">
                  {question.answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
