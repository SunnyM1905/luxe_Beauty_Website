"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Team" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/35 bg-white/35 shadow-[0_8px_32px_rgba(31,38,135,0.12)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-serif text-2xl font-bold text-charcoal-900">
          Luxe<span className="text-champagne-500">Beauty</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-charcoal-700 transition hover:text-champagne-600">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+15551234567" className="flex items-center gap-2 text-sm font-medium text-charcoal-600">
            <Phone className="h-4 w-4" /> (555) 123-4567
          </a>
          <Button asChild size="sm" className="rounded-full bg-champagne-500 text-white hover:bg-champagne-600">
            <Link href="/booking"><Calendar className="mr-2 h-4 w-4" /> Book Now</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/35 bg-white/30 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="py-3 text-base font-medium text-charcoal-700" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-4 rounded-full">
              <Link href="/booking"><Calendar className="mr-2 h-4 w-4" /> Book Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
