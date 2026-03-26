"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function NavLinks() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;

        if (link.children) {
          return (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer",
                  "text-brand-gray-600 hover:text-brand-gray-900"
                )}
              >
                {link.label}
                <ChevronDown className="w-4 h-4" />
              </button>

              {openDropdown === link.label && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-brand-gray-100 py-2 z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-brand-gray-600 hover:text-brand-gray-900 hover:bg-brand-gray-50 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors",
              isActive
                ? "text-brand-gray-900 underline underline-offset-[20px] decoration-2 decoration-brand-blue"
                : "text-brand-gray-600 hover:text-brand-gray-900"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
