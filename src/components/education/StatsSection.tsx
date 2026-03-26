import Container from "../ui/Container";
import StatCard from "../ui/StatCard";
import { STATS } from "@/lib/constants";

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-brand-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left - heading */}
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-brand-orange">
              Education Value Pillars
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-brand-gray-900 leading-tight">
              Trusted by
              <br />
              institutions across
              <br />
              education
            </h2>
            <p className="mt-4 text-base text-brand-gray-600 max-w-md">
              Supporting schools and learning environments through Apple-first
              education programs and long-term partnerships.
            </p>
          </div>

          {/* Right - stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <StatCard key={stat.value} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
