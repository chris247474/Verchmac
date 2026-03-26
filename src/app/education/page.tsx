import type { Metadata } from "next";
import EducationHero from "@/components/education/EducationHero";
import ValuePillars from "@/components/education/ValuePillars";
import TestimonialSection from "@/components/education/TestimonialSection";
import StatsSection from "@/components/education/StatsSection";

export const metadata: Metadata = {
  title: "Education Solutions",
  description:
    "Apple-first solutions designed to transform classrooms and inspire lifelong learning. Empower educators and engage students.",
};

export default function EducationPage() {
  return (
    <>
      <EducationHero />
      <ValuePillars />
      <TestimonialSection />
      <StatsSection />
    </>
  );
}
