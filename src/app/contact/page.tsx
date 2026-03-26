import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import InquiryForm from "@/components/contact/InquiryForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Connect with our specialists to discuss your Apple education, enterprise, or business needs.",
};

export default function ContactPage() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-gray-50 min-h-[70vh]">
      <Container className="max-w-2xl">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-brand-gray-900 leading-tight">
            Let&apos;s talk about the right Apple solution for your organization
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-gray-600">
            Connect with our specialists to discuss your education, enterprise,
            or business needs.
          </p>
        </div>
        <InquiryForm />
      </Container>
    </section>
  );
}
