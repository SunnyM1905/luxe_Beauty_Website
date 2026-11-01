'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun, User, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/team', label: 'Team' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">L</span>
            </div>
            <span className="font-serif text-xl md:text-2xl font-semibold text-foreground">Lumière</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? 'text-primary' : 'text-muted'}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={toggleDark} className="p-2 rounded-full hover:bg-accent transition-colors">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link href="/auth/login" className="p-2 rounded-full hover:bg-accent transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/booking" className="btn-primary flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Book Now
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-foreground hover:text-primary font-medium py-2" onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-2">
                <Link href="/auth/login" className="btn-outline flex-1 text-center text-sm">Login</Link>
                <Link href="/booking" className="btn-primary flex-1 text-center text-sm" onClick={() => setIsOpen(false)}>Book Now</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
