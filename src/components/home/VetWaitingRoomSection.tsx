"use client";

import { useEffect, useRef, useState } from "react";
import Container from "../ui/Container";

const INVOICE_LINE_ITEMS = [
  {
    service: "Strategic Digital Presence Ideation & Vision Alignment",
    hours: "0.05 hrs",
    rate: "$18,000/hr",
    total: "$900",
  },
  {
    service: "Stakeholder Discovery (Self) & Requirements Elicitation",
    hours: "0.02 hrs",
    rate: "$18,000/hr",
    total: "$360",
  },
  {
    service: "AI-Augmented Rapid Prototype Velocity Deployment",
    hours: "0.08 hrs",
    rate: "$18,000/hr",
    total: "$1,440",
  },
  {
    service: "Ecosystem Architecture & Component Synergy Facilitation",
    hours: "0.10 hrs",
    rate: "$18,000/hr",
    total: "$1,800",
  },
  {
    service: "Cross-Platform Responsive Design Thought Leadership",
    hours: "0.05 hrs",
    rate: "$18,000/hr",
    total: "$900",
  },
  {
    service: "Change Management & Veterinary Context Risk Mitigation",
    hours: "0.03 hrs",
    rate: "$18,000/hr",
    total: "$540",
  },
  {
    service: "Post-Engagement Narrative Transformation & Optics Consulting",
    hours: "0.06 hrs",
    rate: "$18,000/hr",
    total: "$1,080",
  },
  {
    service: "Premium Anxiety Buffer & Waiting Room Surcharge",
    hours: "N/A",
    rate: "Flat",
    total: "$980",
  },
  {
    service: "LBM Crisis Disruption Fee (Force Majeure — Canine)",
    hours: "N/A",
    rate: "Flat",
    total: "$500",
  },
  {
    service: "Miscellaneous Strategic Excellence & Prestige Tax",
    hours: "N/A",
    rate: "Flat",
    total: "$500",
  },
  {
    service: "Slide Deck Not Included Convenience Fee",
    hours: "N/A",
    rate: "Flat",
    total: "$1,000",
  },
];

export default function VetWaitingRoomSection() {
  const [invoiceVisible, setInvoiceVisible] = useState(false);
  const [lineItemsRevealed, setLineItemsRevealed] = useState(0);
  const [stampVisible, setStampVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setInvoiceVisible(true), 300);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!invoiceVisible) return;
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setLineItemsRevealed(count);
      if (count >= INVOICE_LINE_ITEMS.length) {
        clearInterval(interval);
        setTimeout(() => setStampVisible(true), 400);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [invoiceVisible]);

  return (
    <>
    <style>{`
      @keyframes vetFlyUp {
        0%   { transform: translateY(0);      opacity: 1; }
        25%  { transform: translateY(-105vh); opacity: 0.6; }
        50%  { transform: translateY(-105vh); opacity: 0.6; }
        75%  { transform: translateY(0);      opacity: 1; }
        100% { transform: translateY(0);      opacity: 1; }
      }
      .vet-fly-up {
        animation: vetFlyUp 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        will-change: transform;
      }
    `}</style>
    <section
      ref={sectionRef}
      className="vet-fly-up py-20 lg:py-28 bg-[#F9F5EF] overflow-hidden border-t border-amber-100"
    >
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: Parody origin story */}
          <div className="flex-1 max-w-xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-amber-600 mb-4">
              🐶 Important Disclosure
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
              This website was built at{" "}
              <span className="text-amber-600 italic">the vet.</span>
            </h2>

            <div className="prose prose-lg text-gray-700 space-y-5 leading-relaxed">
              <p>
                While the Power Mac Center enterprise platform you see before you
                radiates <em>polished corporate authority</em>, it was conceived,
                designed, and deployed in approximately{" "}
                <strong>15 minutes</strong> — from a plastic chair in a
                veterinary waiting room that smelled faintly of anxiety and
                antiseptic.
              </p>
              <p>
                Chris, the visionary behind this digital masterpiece, had
                arrived at the clinic with his dog, who had developed a
                particularly urgent and prolific case of{" "}
                <strong>LBM</strong> (Loose Bowel Movement — yes, the dog
                kind). Rather than doom-scroll or stare blankly at a poster
                about heartworm, Chris pivoted.{" "}
                <em>He built a whole enterprise Apple reseller website instead.</em>
              </p>
              <p>
                The dog is fine, by the way. Better than fine, actually — fully
                relieved of his burdens in ways that Chris, frankly, envied
                while constructing multi-page responsive navigation menus.
              </p>
              <p className="text-sm text-gray-500 border-l-4 border-amber-300 pl-4 italic">
                &ldquo;Necessity is the mother of invention. Diarrhea is apparently
                the mother of B2B SaaS marketing websites.&rdquo;
                <br />— Chris, probably
              </p>
              <p>
                The AI did the heavy lifting. Chris provided the vision,
                curated the vibes, and tried very hard not to make eye contact
                with the man whose cat was loudly expressing its own displeasure
                in the corner.
              </p>
              <p className="font-semibold text-gray-800">
                The result? A fully functional, Vercel-deployed, Next.js 16
                enterprise web platform — built during a single vet visit,
                powered by artificial intelligence, and inspired by one very
                gassy dog.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-2xl">
                🐕
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">The Dog</p>
                <p className="text-xs text-gray-500">Chief Disruption Officer · Recovery Status: ✅</p>
              </div>
            </div>
          </div>

          {/* Right: McKinsey-style animated invoice */}
          <div className="flex-1 max-w-lg w-full">
            <div
              className="relative"
              style={{
                perspective: "1000px",
              }}
            >
              {/* Invoice paper */}
              <div
                className="bg-white shadow-2xl border border-gray-200 rounded-sm overflow-hidden"
                style={{
                  transform: invoiceVisible
                    ? "translateY(0) rotateX(0deg)"
                    : "translateY(60px) rotateX(12deg)",
                  opacity: invoiceVisible ? 1 : 0,
                  transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {/* Invoice header */}
                <div className="bg-gray-900 text-white px-6 py-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-1">
                        Professional Services Invoice
                      </p>
                      <h3 className="text-xl font-black tracking-tight">
                        McKINNEY &amp; ASSOCIATES
                      </h3>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        Global Strategy &amp; Digital Transformation Consulting
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400">Invoice #</p>
                      <p className="text-sm font-mono font-bold">MKA-2026-0326</p>
                      <p className="text-[10px] text-gray-400 mt-1">
                        Date: 26 March 2026
                      </p>
                    </div>
                  </div>
                </div>

                {/* Client info */}
                <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 flex justify-between text-xs">
                  <div>
                    <p className="text-gray-400 uppercase tracking-wider text-[10px]">Bill To</p>
                    <p className="font-bold text-gray-900 mt-0.5">Chris V.</p>
                    <p className="text-gray-600">Veterinary Clinic, Waiting Area</p>
                    <p className="text-gray-600">Plastic Chair, Row 2</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 uppercase tracking-wider text-[10px]">Engagement</p>
                    <p className="font-bold text-gray-900 mt-0.5">VetSite-Alpha</p>
                    <p className="text-gray-600">Duration: ~15 min</p>
                    <p className="text-gray-600">Interruptions: 1 (LBM)</p>
                  </div>
                </div>

                {/* Line items table */}
                <div className="px-6 py-4">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left text-[10px] uppercase tracking-wider text-gray-400 pb-2 font-semibold">
                          Service Rendered
                        </th>
                        <th className="text-right text-[10px] uppercase tracking-wider text-gray-400 pb-2 font-semibold">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {INVOICE_LINE_ITEMS.map((item, i) => (
                        <tr
                          key={i}
                          className="border-b border-gray-100"
                          style={{
                            opacity: i < lineItemsRevealed ? 1 : 0,
                            transform:
                              i < lineItemsRevealed
                                ? "translateX(0)"
                                : "translateX(-8px)",
                            transition: "all 0.25s ease",
                          }}
                        >
                          <td className="py-1.5 pr-4 text-gray-700 leading-snug">
                            {item.service}
                            <span className="text-gray-400 text-[10px] block">
                              {item.hours} @ {item.rate}
                            </span>
                          </td>
                          <td className="py-1.5 text-right font-mono text-gray-900 font-semibold whitespace-nowrap">
                            {item.total}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Total */}
                <div
                  className="mx-6 mb-4 border-t-2 border-gray-900 pt-3"
                  style={{
                    opacity: lineItemsRevealed >= INVOICE_LINE_ITEMS.length ? 1 : 0,
                    transition: "opacity 0.4s ease 0.2s",
                  }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                        Subtotal
                      </p>
                      <p className="text-[10px] text-gray-400">
                        Taxes &amp; Levies (Prestige Fee)
                      </p>
                    </div>
                    <div className="text-right font-mono text-sm">
                      <p className="text-gray-700">$9,000.00</p>
                      <p className="text-gray-700">$1,000.00</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2 bg-gray-900 text-white px-3 py-2 rounded-sm">
                    <p className="font-black text-sm tracking-wide">TOTAL DUE</p>
                    <p className="font-black text-lg font-mono">$10,000 USD</p>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2 text-center">
                    Payment due upon receipt. Wire transfer only. No crypto. No vibes.
                  </p>
                </div>

                {/* Stamp */}
                <div
                  className="absolute top-28 right-6 pointer-events-none select-none"
                  style={{
                    opacity: stampVisible ? 1 : 0,
                    transform: stampVisible ? "rotate(-12deg) scale(1)" : "rotate(-12deg) scale(1.4)",
                    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  <div className="border-4 border-red-600 text-red-600 rounded px-3 py-1 text-center">
                    <p className="text-[10px] font-black tracking-[0.2em] uppercase">Invoiced</p>
                    <p className="text-[11px] font-black">$10,000</p>
                    <p className="text-[9px] tracking-wider">NO REFUNDS</p>
                  </div>
                </div>

                {/* Footer note */}
                <div className="bg-gray-50 border-t border-gray-200 px-6 py-3">
                  <p className="text-[10px] text-gray-400 text-center italic">
                    McKinney &amp; Associates is not a real consulting firm. This invoice is satire.
                    The dog&apos;s LBM was very real. Total build time verified by vet waiting room clock.
                  </p>
                </div>
              </div>

              {/* Decorative corner fold */}
              <div
                className="absolute -top-2 -right-2 w-8 h-8"
                style={{
                  opacity: invoiceVisible ? 1 : 0,
                  transition: "opacity 0.5s ease 0.6s",
                }}
              >
                <div className="w-0 h-0 border-l-[32px] border-l-transparent border-b-[32px] border-b-amber-400" />
              </div>
            </div>

            {/* Caption below invoice */}
            <p
              className="text-center text-xs text-gray-400 mt-4 italic"
              style={{
                opacity: stampVisible ? 1 : 0,
                transition: "opacity 0.5s ease 0.5s",
              }}
            >
              Actual cost: $0. Actual time: 15 min. Actual dog: recovering nicely.
            </p>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}
