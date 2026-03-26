import Image from "next/image";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { VALUE_PILLARS } from "@/lib/constants";

export default function ValuePillars() {
  return (
    <section className="py-16 lg:py-24 bg-brand-gray-50">
      <Container>
        <SectionHeading title="Education value pillars" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {VALUE_PILLARS.map((pillar) => (
            <Card
              key={pillar.title}
              padding={false}
              className="group hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-brand-gray-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                  {pillar.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
