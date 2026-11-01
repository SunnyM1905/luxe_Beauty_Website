"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-champagne-200/60 bg-cream-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-charcoal-900">Luxe<span className="text-champagne-500">Beauty</span></h3>
            <p className="mt-3 text-sm text-charcoal-500">Premium beauty parlour services in a relaxing, luxurious environment.</p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="rounded-full bg-white p-2 shadow-soft hover:shadow-card transition"><Instagram className="h-4 w-4 text-charcoal-600" /></a>
              <a href="#" className="rounded-full bg-white p-2 shadow-soft hover:shadow-card transition"><Facebook className="h-4 w-4 text-charcoal-600" /></a>
              <a href="#" className="rounded-full bg-white p-2 shadow-soft hover:shadow-card transition"><Twitter className="h-4 w-4 text-charcoal-600" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-charcoal-900">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
              <li><Link href="/services" className="hover:text-champagne-600 transition">Services</Link></li>
              <li><Link href="/team" className="hover:text-champagne-600 transition">Our Team</Link></li>
              <li><Link href="/gallery" className="hover:text-champagne-600 transition">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-champagne-600 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-charcoal-900">Hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
              <li>Mon - Fri: 9:00 AM - 8:00 PM</li>
              <li>Saturday: 10:00 AM - 6:00 PM</li>
              <li>Sunday: 11:00 AM - 5:00 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-charcoal-900">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-charcoal-600">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-champagne-500" /> 123 Beauty Lane, Beverly Hills, CA</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-champagne-500" /> (555) 123-4567</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-champagne-500" /> hello@luxebeauty.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-champagne-200/60 pt-8 text-center text-xs text-charcoal-400">
          © 2025 Luxe Beauty. All rights reserved. <Link href="/privacy" className="hover:text-champagne-600">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
