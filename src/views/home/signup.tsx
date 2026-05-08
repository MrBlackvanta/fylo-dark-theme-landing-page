"use client";

import { signup } from "@/data";
import { cn } from "@/lib";
import { useForm } from "react-hook-form";

type SignupFormValues = {
  email: string;
};

export default function Signup() {
  const { title, description, cta } = signup;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    criteriaMode: "all",
  });

  function onSubmit(data: SignupFormValues) {
    console.log(data);
  }

  return (
    <section className="bg-primary-dark-blue shadow-card mx-auto w-full max-w-215.75 rounded-lg px-7 py-10 text-center">
      <h2 className="sm:text sm:text-heading-lg text-lg leading-6 font-bold sm:leading-12">
        {title}
      </h2>
      <p className="text-body mt-4 mb-8 sm:mx-auto sm:mb-10 sm:w-9/11 sm:text-sm sm:leading-5.25">
        {description}
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:grid-rows-[3rem] sm:gap-7.25"
      >
        <div className="sm:col-span-2">
          <input
            placeholder="email@example.com"
            className="placeholder:text-gray placeholder:text-body-xs text-primary-dark-blue-5 text-body-sm focus-visible-ring h-12 w-full rounded-full bg-white px-7.25"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Error, please check your email",
              },
            })}
          />
          <p
            className={cn(
              "text-accent-light-red! text-body-xs mt-1.5 ps-7.25 text-start font-bold opacity-0",
              {
                "opacity-100": errors.email,
              },
            )}
          >
            {errors.email?.message}
          </p>
        </div>

        <button type="submit" className="btn-primary max-w-full">
          {cta.text}
        </button>
      </form>
    </section>
  );
}
