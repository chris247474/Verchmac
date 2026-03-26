"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { HERO_SLIDES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]"
              role="group"
              aria-label={`Slide ${index + 1} of ${HERO_SLIDES.length}`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />

              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl">
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white leading-tight whitespace-pre-line">
                      {slide.headline}
                    </h1>
                    <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-white/80 max-w-lg">
                      {slide.subtext}
                    </p>
                    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Button variant="outlined" href="#solutions" size="md">
                        Explore solutions
                      </Button>
                      <Button
                        variant="filled"
                        href="/contact"
                        size="md"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Request a consultation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 right-4 sm:right-8 lg:right-16 flex gap-2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer",
              selectedIndex === index
                ? "bg-white"
                : "bg-white/40 hover:bg-white/60"
            )}
          />
        ))}
      </div>
    </section>
  );
}
