import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { TESTIMONIAL } from "@/lib/constants";
import { ChevronRight } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
          {/* Left - Image with overlay */}
          <div className="relative min-h-[300px] lg:min-h-[400px]">
            <Image
              src={TESTIMONIAL.image}
              alt="Real impact in real classrooms"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-end p-6 sm:p-10">
              <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
                Real impact in real
                <br />
                classrooms
              </h2>
            </div>
          </div>

          {/* Right - Quote card */}
          <div className="bg-white p-6 sm:p-10 flex flex-col justify-center border border-brand-gray-100 lg:border-l-0">
            <blockquote className="text-base sm:text-lg text-brand-gray-900 leading-relaxed">
              {TESTIMONIAL.quote}
            </blockquote>

            <div className="mt-6 flex items-center gap-3">
              <Image
                src={TESTIMONIAL.logo}
                alt={TESTIMONIAL.company}
                width={48}
                height={32}
                className="h-8 w-auto"
              />
              <div>
                <p className="font-semibold text-sm text-brand-gray-900">
                  {TESTIMONIAL.author}
                </p>
                <p className="text-xs text-brand-gray-600">
                  {TESTIMONIAL.role} | {TESTIMONIAL.company}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Button
                variant="ghost"
                href="#"
                icon={<ChevronRight className="w-4 h-4" />}
              >
                View more education stories
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
