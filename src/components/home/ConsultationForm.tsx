"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, MessageSquare, Loader2 } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import SectionLabel from "../ui/SectionLabel";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  industry: z.string().min(1, "Please select your industry"),
  budget: z.enum(["<$10K", "$10K–$50K", "$50K–$200K", "$200K+"], {
    message: "Please select a budget range",
  }),
  summary: z.string().min(10, "Please provide a brief project summary (min 10 characters)"),
  source: z.string().min(1, "Please tell us how you found us"),
});

type FormData = z.infer<typeof formSchema>;

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "+91 ",
      industry: "",
      budget: undefined,
      summary: "",
      source: "",
    },
  });

  const selectedBudget = watch("budget");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    "Finance & Banking",
    "Quant Trading",
    "Healthcare",
    "Education",
    "Government",
    "Logistics",
    "Manufacturing",
    "Real Estate",
    "Other",
  ];

  const budgetOptions = [
    { label: "Under $10K", value: "<$10K" as const },
    { label: "$10K – $50K", value: "$10K–$50K" as const },
    { label: "$50K – $200K", value: "$50K–$200K" as const },
    { label: "$200K+", value: "$200K+" as const },
  ];

  if (success) {
    return (
      <GlassCard glowColor="electric" className="max-w-2xl mx-auto p-12 text-center space-y-6">
        <div className="inline-flex p-4 rounded-full bg-emerald/10 text-emerald animate-bounce">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h3 className="text-2xl font-bold font-display text-text-primary">
          Consultation Request Received!
        </h3>
        <p className="text-text-secondary text-sm max-w-md mx-auto leading-relaxed">
          An enterprise solutions architect will contact you within 24 hours to review your architecture request.
        </p>
        <div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/918333947726?text=Hi%20PrimAI,%20I%20just%20submitted%20a%20consultation%20request."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-emerald/90 transition-colors shadow-lg shadow-emerald/20"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
          <Button href="/" variant="outline" className="px-6 py-3">
            Back to Home
          </Button>
        </div>
      </GlassCard>
    );
  }

  return (
    <section id="consultation" className="py-24 px-6 max-w-5xl mx-auto relative z-10 bg-void">
      <div className="text-center mb-16 space-y-4">
        <SectionLabel>Enterprise Funnel</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display">
          Book a Free Strategy Consultation
        </h2>
        <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto">
          Map your technical architecture and receive pricing estimates in under 24 hours.
        </p>
      </div>

      <GlassCard glowColor="electric" className="p-8 md:p-12">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-text-secondary uppercase">Full Name</label>
              <input
                type="text"
                {...register("fullName")}
                className="w-full px-4 py-3 rounded-lg border border-border bg-glass text-sm focus:ring-2 focus:ring-electric focus:outline-none text-text-primary"
                placeholder="John Doe"
              />
              {errors.fullName && <p className="text-xs text-red-500 font-mono">{errors.fullName.message}</p>}
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-text-secondary uppercase">Company Name</label>
              <input
                type="text"
                {...register("companyName")}
                className="w-full px-4 py-3 rounded-lg border border-border bg-glass text-sm focus:ring-2 focus:ring-electric focus:outline-none text-text-primary"
                placeholder="MetaCorp Inc."
              />
              {errors.companyName && <p className="text-xs text-red-500 font-mono">{errors.companyName.message}</p>}
            </div>

            {/* Work Email */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-text-secondary uppercase">Work Email</label>
              <input
                type="email"
                {...register("email")}
                className="w-full px-4 py-3 rounded-lg border border-border bg-glass text-sm focus:ring-2 focus:ring-electric focus:outline-none text-text-primary"
                placeholder="john@metacorp.com"
              />
              {errors.email && <p className="text-xs text-red-500 font-mono">{errors.email.message}</p>}
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-text-secondary uppercase">Phone Number</label>
              <input
                type="tel"
                {...register("phone")}
                className="w-full px-4 py-3 rounded-lg border border-border bg-glass text-sm focus:ring-2 focus:ring-electric focus:outline-none text-text-primary"
                placeholder="+91 9876543210"
              />
              {errors.phone && <p className="text-xs text-red-500 font-mono">{errors.phone.message}</p>}
            </div>

            {/* Industry */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-text-secondary uppercase">Industry</label>
              <select
                {...register("industry")}
                className="w-full px-4 py-3 rounded-lg border border-border bg-glass text-sm focus:ring-2 focus:ring-electric focus:outline-none text-text-primary"
              >
                <option value="" disabled className="bg-surface">Select your industry</option>
                {industries.map((ind) => (
                  <option key={ind} value={ind} className="bg-surface text-text-primary">
                    {ind}
                  </option>
                ))}
              </select>
              {errors.industry && <p className="text-xs text-red-500 font-mono">{errors.industry.message}</p>}
            </div>

            {/* How did you find us */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-text-secondary uppercase">How did you find us?</label>
              <select
                {...register("source")}
                className="w-full px-4 py-3 rounded-lg border border-border bg-glass text-sm focus:ring-2 focus:ring-electric focus:outline-none text-text-primary"
              >
                <option value="" disabled className="bg-surface">Select an option</option>
                <option value="Google Search" className="bg-surface">Google Search</option>
                <option value="LinkedIn" className="bg-surface">LinkedIn</option>
                <option value="Twitter/X" className="bg-surface">Twitter/X</option>
                <option value="Referral" className="bg-surface">Referral</option>
                <option value="Other" className="bg-surface">Other</option>
              </select>
              {errors.source && <p className="text-xs text-red-500 font-mono">{errors.source.message}</p>}
            </div>
          </div>

          {/* Budget Range - Radio Cards */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-bold text-text-secondary uppercase block">Budget Range</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {budgetOptions.map((opt) => (
                <label
                  key={opt.value}
                  onClick={() => setValue("budget", opt.value, { shouldValidate: true })}
                  className={`border rounded-lg p-4 text-center cursor-pointer select-none transition-all duration-300 block ${
                    selectedBudget === opt.value
                      ? "border-electric bg-electric/10 text-text-primary shadow-lg shadow-electric/5"
                      : "border-border bg-glass text-text-secondary hover:border-border/80 hover:text-text-primary"
                  }`}
                >
                  <input
                    type="radio"
                    value={opt.value}
                    {...register("budget")}
                    className="sr-only"
                  />
                  <span className="text-sm font-semibold">{opt.label}</span>
                </label>
              ))}
            </div>
            {errors.budget && <p className="text-xs text-red-500 font-mono">{errors.budget.message}</p>}
          </div>

          {/* Project Summary */}
          <div className="space-y-2">
            <label className="text-xs font-mono font-bold text-text-secondary uppercase">Project Summary</label>
            <textarea
              rows={3}
              {...register("summary")}
              className="w-full px-4 py-3 rounded-lg border border-border bg-glass text-sm focus:ring-2 focus:ring-electric focus:outline-none text-text-primary resize-none"
              placeholder="Describe your project, timeline, and current system architecture..."
            />
            {errors.summary && <p className="text-xs text-red-500 font-mono">{errors.summary.message}</p>}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="filled"
            glow
            disabled={isSubmitting}
            className="w-full py-4 text-base font-display font-semibold gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending Application...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Strategy Request</span>
              </>
            )}
          </Button>
        </form>
      </GlassCard>
    </section>
  );
}
