"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  email: yup.string().required("Email is required").email("Invalid email address"),
  phone: yup.string().required("Phone is required").min(8, "Phone must be at least 8 characters"),
  company: yup.string(),
  message: yup.string(),
});

type FormValues = yup.InferType<typeof schema>;

type PurchaseFormProps = {
  productName: string;
  productSlug: string;
  onSuccess?: () => void;
};

const TO_EMAIL = "mohamedrad2022@gmail.com";

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-800/50 dark:text-white dark:placeholder-gray-500";
const inputErrorClass = "border-red-500 dark:border-red-500";

export function PurchaseForm({ productName, productSlug, onSuccess }: PurchaseFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { name: "", email: "", phone: "", company: "", message: "" },
  });

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(`[Purchase Request] ${productName} - ${data.name}`);
    const bodyLines = [
      `New purchase request from RoboCollective.ai`,
      ``,
      `Contact Details:`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Company: ${data.company || "—"}`,
      ``,
      `Product:`,
      `Name: ${productName}`,
      `Slug: ${productSlug}`,
      ``,
      `Message:`,
      data.message || "—",
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    const mailto = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    reset();
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-theme-heading">
          Full Name <span className="text-red-500">*</span>
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
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-theme-heading">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className={`${inputClass} ${errors.phone ? inputErrorClass : ""}`}
          placeholder="+1 234 567 8900"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="company" className="mb-1 block text-sm font-medium text-theme-heading">
          Company (optional)
        </label>
        <input id="company" {...register("company")} className={inputClass} placeholder="Your company name" />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-theme-heading">
          Message (optional)
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={3}
          className={inputClass}
          placeholder="Any specific requirements or questions..."
        />
      </div>

      <p className="text-sm text-theme-body">
        Click Confirm to open your email app. Your message will be sent to mohamedrad2022@gmail.com.
      </p>

      <button
        type="submit"
        className="w-full rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
      >
        Confirm Purchase Request
      </button>
    </form>
  );
}
