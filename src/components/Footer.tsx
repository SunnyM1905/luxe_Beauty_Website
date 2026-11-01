import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">L</span>
              </div>
              <span className="font-serif text-2xl font-semibold">Lumière</span>
            </div>
            <p className="text-background/70 max-w-md mb-4">
              Experience world-class beauty treatments at Lumière. Where artistry meets relaxation, and every visit leaves you feeling radiant.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Services', 'Team', 'Gallery', 'Reviews', 'Contact'].map(item => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-background/70 hover:text-primary transition-colors text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Beauty Lane, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+1-555-0199" className="hover:text-primary">(555) 0199</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:hello@lumiere.com" className="hover:text-primary">hello@lumiere.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">© {new Date().getFullYear()} Lumière Beauty Parlour. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
