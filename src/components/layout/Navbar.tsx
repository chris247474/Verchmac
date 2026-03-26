"use client";

import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";
import Container from "../ui/Container";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top black bar */}
      <div className="bg-brand-dark">
        <Container className="flex items-center justify-between h-12">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-pmc-business.svg"
              alt="Power Mac Center Business"
              width={160}
              height={32}
              priority
            />
          </Link>
          <Image
            src="/images/apple-partner-badge.svg"
            alt="Apple Partner"
            width={130}
            height={20}
            priority
          />
        </Container>
      </div>

      {/* White navigation bar */}
      <div className="bg-white border-b border-brand-gray-100">
        <Container className="flex items-center justify-between h-14">
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLinks />
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-brand-gray-900"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <UserMenu />
            <button className="p-2 text-brand-gray-600 hover:text-brand-gray-900 transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
