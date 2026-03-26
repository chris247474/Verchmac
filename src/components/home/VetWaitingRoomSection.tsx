"use client";

import { useEffect, useRef, useState } from "react";
// VetStamp (fixed page watermark) is rendered in layout.tsx
import Container from "../ui/Container";

const INVOICE_LINE_ITEMS = [
  { service: "Strategic Digital Presence Ideation & Vision Alignment", hours: "0.05 hrs", rate: "$18,000/hr", total: "$900" },
  { service: "Stakeholder Discovery (Self) & Requirements Elicitation", hours: "0.02 hrs", rate: "$18,000/hr", total: "$360" },
  { service: "AI-Augmented Rapid Prototype Velocity Deployment", hours: "0.08 hrs", rate: "$18,000/hr", total: "$1,440" },
  { service: "Ecosystem Architecture & Component Synergy Facilitation", hours: "0.10 hrs", rate: "$18,000/hr", total: "$1,800" },
  { service: "Cross-Platform Responsive Design Thought Leadership", hours: "0.05 hrs", rate: "$18,000/hr", total: "$900" },
  { service: "Change Management & Veterinary Context Risk Mitigation", hours: "0.03 hrs", rate: "$18,000/hr", total: "$540" },
  { service: "Post-Engagement Narrative Transformation & Optics Consulting", hours: "0.06 hrs", rate: "$18,000/hr", total: "$1,080" },
  { service: "Premium Anxiety Buffer & Waiting Room Surcharge", hours: "N/A", rate: "Flat", total: "$980" },
  { service: "LBM Crisis Disruption Fee (Force Majeure — Canine)", hours: "N/A", rate: "Flat", total: "$500" },
  { service: "Miscellaneous Strategic Excellence & Prestige Tax", hours: "N/A", rate: "Flat", total: "$500" },
  { service: "Slide Deck Not Included Convenience Fee", hours: "N/A", rate: "Flat", total: "$1,000" },
];


function InvoiceTable({ allVisible }: { allVisible: boolean }) {
  const [revealed, setRevealed] = useState(0);
  const [stamped, setStamped] = useState(false);

  useEffect(() => {
    if (!allVisible) {
      // animated reveal
      setRevealed(0);
      setStamped(false);
      let count = 0;
      const iv = setInterval(() => {
        count++;
        setRevealed(count);
        if (count >= INVOICE_LINE_ITEMS.length) {
          clearInterval(iv);
          setTimeout(() => setStamped(true), 400);
        }
      }, 120);
      return () => clearInterval(iv);
    } else {
      setRevealed(INVOICE_LINE_ITEMS.length);
      setStamped(true);
    }
  }, [allVisible]);

  const show = allVisible ? INVOICE_LINE_ITEMS.length : revealed;
  const showStamp = allVisible ? true : stamped;

  return (
    <div className="relative bg-white shadow-xl border border-gray-200 rounded-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gray-900 text-white px-5 py-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[9px] tracking-[0.3em] uppercase text-gray-400 mb-0.5">Professional Services Invoice</p>
            <h3 className="text-base font-black tracking-tight">McKINNEY &amp; ASSOCIATES</h3>
            <p className="text-[9px] text-gray-400">Global Strategy &amp; Digital Transformation Consulting</p>
          </div>
          <div className="text-right">
            <p className="text-[9px] text-gray-400">Invoice #</p>
            <p className="text-xs font-mono font-bold">MKA-2026-0326</p>
            <p className="text-[9px] text-gray-400 mt-0.5">Date: 26 March 2026</p>
          </div>
        </div>
      </div>
      {/* Client info */}
      <div className="px-5 py-2 bg-gray-50 border-b border-gray-200 flex justify-between text-[10px]">
        <div>
          <p className="text-gray-400 uppercase tracking-wider text-[9px]">Bill To</p>
          <p className="font-bold text-gray-900">Chris V. — Vet Waiting Room, Row 2</p>
          <p className="text-gray-500">Duration: ~15 min · Interruptions: 1 (LBM)</p>
        </div>
        <div className="text-right">
          <p className="text-gray-400 uppercase tracking-wider text-[9px]">Engagement</p>
          <p className="font-bold text-gray-900">VetSite-Alpha</p>
        </div>
      </div>
      {/* Line items */}
      <div className="px-5 py-3">
        <table className="w-full text-[10px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left text-[9px] uppercase tracking-wider text-gray-400 pb-1.5 font-semibold">Service Rendered</th>
              <th className="text-right text-[9px] uppercase tracking-wider text-gray-400 pb-1.5 font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody>
            {INVOICE_LINE_ITEMS.map((item, i) => (
              <tr key={i} className="border-b border-gray-100" style={{ opacity: i < show ? 1 : 0, transition: "opacity 0.2s ease" }}>
                <td className="py-1 pr-3 text-gray-700 leading-tight">
                  {item.service}
                  <span className="text-gray-400 text-[9px] block">{item.hours} @ {item.rate}</span>
                </td>
                <td className="py-1 text-right font-mono text-gray-900 font-semibold whitespace-nowrap">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Total */}
      <div className="mx-5 mb-4 border-t-2 border-gray-900 pt-2" style={{ opacity: show >= INVOICE_LINE_ITEMS.length ? 1 : 0, transition: "opacity 0.4s ease" }}>
        <div className="flex justify-between items-center text-[10px]">
          <div>
            <p className="text-gray-400">Subtotal</p>
            <p className="text-gray-400">Prestige Tax</p>
          </div>
          <div className="text-right font-mono">
            <p className="text-gray-700">$9,000.00</p>
            <p className="text-gray-700">$1,000.00</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-1.5 bg-gray-900 text-white px-3 py-2 rounded-sm">
          <p className="font-black text-xs tracking-wide">TOTAL DUE</p>
          <p className="font-black text-base font-mono">$10,000 USD</p>
        </div>
        <p className="text-[9px] text-gray-400 mt-1.5 text-center">Payment due upon receipt. Wire transfer only. No crypto. No vibes.</p>
      </div>
      {/* Stamp */}
      <div className="absolute top-20 right-4 pointer-events-none select-none" style={{ opacity: showStamp ? 1 : 0, transform: showStamp ? "rotate(-12deg) scale(1)" : "rotate(-12deg) scale(1.3)", transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)" }}>
        <div className="border-4 border-red-600 text-red-600 rounded px-2 py-0.5 text-center">
          <p className="text-[9px] font-black tracking-widest uppercase">Invoiced</p>
          <p className="text-[10px] font-black">$10,000</p>
          <p className="text-[8px] tracking-wider">NO REFUNDS</p>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-gray-50 border-t border-gray-200 px-5 py-2">
        <p className="text-[9px] text-gray-400 text-center italic">
          McKinney &amp; Associates is not a real firm. The dog&apos;s LBM was very real.
        </p>
      </div>
    </div>
  );
}

export default function VetWaitingRoomSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [invoiceAnimated, setInvoiceAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !invoiceAnimated) setInvoiceAnimated(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [invoiceAnimated]);

  return (
    <>
      <section
        ref={sectionRef}
        className="py-20 lg:py-28 bg-[#F9F5EF] border-t border-amber-100"
      >
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left */}
            <div className="flex-1 max-w-xl">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-amber-600 mb-4">
                🐶 Important Disclosure
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
                This website was built at{" "}
                <span className="text-amber-600 italic">the vet.</span>
              </h2>
              <div className="text-gray-700 space-y-5 leading-relaxed text-lg">
                <p>
                  While the Power Mac Center enterprise platform you see before you radiates{" "}
                  <em>polished corporate authority</em>, it was conceived, designed, and deployed in
                  approximately <strong>15 minutes</strong> — from a plastic chair in a veterinary
                  waiting room that smelled faintly of anxiety and antiseptic.
                </p>
                <p>
                  Chris, the visionary behind this digital masterpiece, had arrived at the clinic with
                  his dog, who had developed a particularly urgent and prolific case of{" "}
                  <strong>LBM</strong> (Loose Bowel Movement — yes, the dog kind). Rather than
                  doom-scroll or stare blankly at a poster about heartworm, Chris pivoted.{" "}
                  <em>He built a whole enterprise Apple reseller website instead.</em>
                </p>
                <p>
                  The dog is fine, by the way. Better than fine — fully relieved of his burdens in
                  ways that Chris, frankly, envied while constructing multi-page responsive navigation
                  menus.
                </p>
                <p className="text-base text-gray-500 border-l-4 border-amber-300 pl-4 italic">
                  &ldquo;Necessity is the mother of invention. Diarrhea is apparently the mother of
                  B2B SaaS marketing websites.&rdquo;
                  <br />— Chris, probably
                </p>
                <p className="font-semibold text-gray-800">
                  The result? A fully functional, Vercel-deployed, Next.js 16 enterprise web platform
                  — built during a single vet visit, powered by AI, and inspired by one very gassy dog.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-2xl">🐕</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">The Dog</p>
                  <p className="text-xs text-gray-500">Chief Disruption Officer · Recovery Status: ✅</p>
                </div>
              </div>
            </div>
            {/* Right — invoice with scroll-triggered reveal */}
            <div className="flex-1 max-w-lg w-full">
              <InvoiceTable allVisible={!invoiceAnimated} />
              <p className="text-center text-xs text-gray-400 mt-4 italic">
                Actual cost: $0. Actual time: 15 min. Actual dog: recovering nicely.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

