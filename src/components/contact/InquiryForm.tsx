"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { inquirySchema, type InquirySchema } from "@/lib/schemas";
import { INQUIRY_TYPES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InquirySchema>({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = async (data: InquirySchema) => {
    const res = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-brand-gray-900">
          Thank you for reaching out!
        </h3>
        <p className="mt-2 text-brand-gray-600">
          Our specialists will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 text-sm sm:text-base border border-brand-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors placeholder:text-brand-gray-600/50";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
      {/* First name / Last name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            {...register("firstName")}
            placeholder="First name"
            className={cn(inputClasses, errors.firstName && "border-red-400")}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-500">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("lastName")}
            placeholder="Last name"
            className={cn(inputClasses, errors.lastName && "border-red-400")}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-500">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <input
          {...register("workEmail")}
          type="email"
          placeholder="workemail@example.com"
          className={cn(inputClasses, errors.workEmail && "border-red-400")}
        />
        {errors.workEmail && (
          <p className="mt-1 text-xs text-red-500">
            {errors.workEmail.message}
          </p>
        )}
      </div>

      {/* Organization */}
      <div>
        <input
          {...register("organization")}
          placeholder="Organization / School"
          className={cn(inputClasses, errors.organization && "border-red-400")}
        />
        {errors.organization && (
          <p className="mt-1 text-xs text-red-500">
            {errors.organization.message}
          </p>
        )}
      </div>

      {/* Inquiry type */}
      <div>
        <select
          {...register("inquiryType")}
          className={cn(
            inputClasses,
            "appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236E6E73%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat",
            errors.inquiryType && "border-red-400"
          )}
          defaultValue=""
        >
          {INQUIRY_TYPES.map((type) => (
            <option
              key={type.value}
              value={type.value}
              disabled={type.value === ""}
            >
              {type.label}
            </option>
          ))}
        </select>
        {errors.inquiryType && (
          <p className="mt-1 text-xs text-red-500">
            {errors.inquiryType.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          {...register("message")}
          placeholder="Your message..."
          rows={4}
          className={cn(
            inputClasses,
            "resize-none",
            errors.message && "border-red-400"
          )}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot field for spam prevention */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-blue text-white font-medium rounded-full hover:bg-brand-blue-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm sm:text-base"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Request a consultation
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
