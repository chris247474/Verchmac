import Image from "next/image";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { SOLUTION_CARDS } from "@/lib/constants";
import { ChevronRight } from "lucide-react";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-16 lg:py-24 bg-white">
      <Container>
        <SectionHeading title="Our solutions for every organization" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOLUTION_CARDS.map((card) => (
            <Card
              key={card.category}
              padding={false}
              className="group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-brand-gray-50"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.category}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span
                  className={`text-xs font-bold tracking-wider uppercase ${card.categoryColor}`}
                >
                  {card.category}
                </span>
                <h3 className="mt-3 text-xl font-bold text-brand-gray-900 leading-snug whitespace-pre-line">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                  {card.description}
                </p>
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    href={card.href}
                    icon={<ChevronRight className="w-4 h-4" />}
                  >
                    {card.linkLabel}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
