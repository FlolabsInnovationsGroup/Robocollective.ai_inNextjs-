"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Tooltip } from "@/components/Tooltip";

const schema = yup.object({
  name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  email: yup.string().required("Email is required").email("Invalid email address"),
  message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
  company: yup.string(),
  role: yup.string(),
});

type FormValues = yup.InferType<typeof schema>;

const TO_EMAIL = "mohamedrad2022@gmail.com";

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-800/50 dark:text-white dark:placeholder-gray-500";
const inputErrorClass = "border-red-500 dark:border-red-500";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { name: "", email: "", message: "", company: "", role: "" },
  });

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(`[Contact] ${data.name} - RoboCollective.ai`);
    const bodyLines = [
      `New contact form submission`,
      ``,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company || "—"}`,
      `Role: ${data.role || "—"}`,
      ``,
      `Message:`,
      data.message,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    const mailto = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-theme-heading">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          {...register("name")}
          className={`${inputClass} ${errors.name ? inputErrorClass : ""}`}
          placeholder="John Doe"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-theme-heading">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={`${inputClass} ${errors.email ? inputErrorClass : ""}`}
          placeholder="john@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="company" className="mb-1 block text-sm font-medium text-theme-heading">
          Company (optional)
        </label>
        <Tooltip content="Your company or organization name">
          <span className="inline-block w-full">
            <input id="company" {...register("company")} className={inputClass} placeholder="Your company" />
          </span>
        </Tooltip>
      </div>

      <div>
        <label htmlFor="role" className="mb-1 block text-sm font-medium text-theme-heading">
          Role (optional)
        </label>
        <Tooltip content="Your job title or role">
          <span className="inline-block w-full">
            <input id="role" {...register("role")} className={inputClass} placeholder="e.g. Engineer, Researcher" />
          </span>
        </Tooltip>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-theme-heading">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className={`${inputClass} ${errors.message ? inputErrorClass : ""}`}
          placeholder="How can we help?"
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>

      <p className="text-sm text-theme-body">
        Click Send to open your email app. Your message will be sent to mohamedrad2022@gmail.com.
      </p>

      <button
        type="submit"
        className="w-full rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
      >
        Send Message
      </button>
    </form>
  );
}
