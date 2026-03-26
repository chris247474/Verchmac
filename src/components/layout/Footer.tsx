import Container from "../ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-3">
              Power Mac Center Business
            </h3>
            <p className="text-sm text-white/60 max-w-md">
              Your trusted Apple partner for education, enterprise, and SMB
              solutions. Premier Apple Premium Partner in the Philippines since
              1994.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-white/80">
              Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/education"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Enterprise
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  SMB
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-white/80">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Power Mac Center. All rights
            reserved. Apple, the Apple logo, Mac, iPad, and iPhone are
            trademarks of Apple Inc.
          </p>
        </div>
      </Container>
    </footer>
  );
}
