import Image from "next/image";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function EducationHero() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80"
        alt="Students learning with Apple devices in a classroom"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white leading-tight">
            Apple-first solutions designed to transform classrooms and inspire
            lifelong learning.
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mx-auto">
            Empower educators and engage students with integrated Apple
            technology, training, and support.
          </p>
          <div className="mt-6 sm:mt-8">
            <Button
              variant="filled"
              href="/contact?type=education"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Talk to an Education Specialist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
