"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Panel */}
      <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-brand-gray-100">
          <span className="text-lg font-semibold text-brand-gray-900">Menu</span>
          <button onClick={onClose} className="p-2 text-brand-gray-600" aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            if (link.children) {
              return (
                <div key={link.label}>
                  <button
                    className="flex items-center justify-between w-full py-3 px-3 text-base font-medium text-brand-gray-600 rounded-lg hover:bg-brand-gray-50 cursor-pointer"
                    onClick={() =>
                      setExpandedItem(
                        expandedItem === link.label ? null : link.label
                      )
                    }
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-transform",
                        expandedItem === link.label && "rotate-180"
                      )}
                    />
                  </button>
                  {expandedItem === link.label && (
                    <div className="pl-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={onClose}
                          className="block py-2 px-3 text-sm text-brand-gray-600 hover:text-brand-gray-900 rounded-lg hover:bg-brand-gray-50"
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
                onClick={onClose}
                className={cn(
                  "block py-3 px-3 text-base font-medium rounded-lg transition-colors",
                  isActive
                    ? "text-brand-blue bg-blue-50"
                    : "text-brand-gray-600 hover:bg-brand-gray-50"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
