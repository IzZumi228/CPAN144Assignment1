import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "CPAN144 Assignment 1",
  description: "simple next.js app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900">
        <Navbar />
        <main className="mx-auto max-w-xl p-6">{children}</main>
      </body>
    </html>
  );
}