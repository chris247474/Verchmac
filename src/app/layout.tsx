import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatbotWidget from "@/components/chat/ChatbotWidget";
import VetWaitingRoomSection from "@/components/home/VetWaitingRoomSection";

export const metadata: Metadata = {
  title: {
    default: "Power Mac Center Business | Apple Solutions for Organizations",
    template: "%s | Power Mac Center Business",
  },
  description:
    "Your trusted Apple partner for education, enterprise, and SMB solutions. Premier Apple Premium Partner in the Philippines.",
  keywords: [
    "Apple",
    "education",
    "enterprise",
    "SMB",
    "Power Mac Center",
    "Philippines",
    "iPad",
    "Mac",
    "Apple School Manager",
    "MDM",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <VetWaitingRoomSection />
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
