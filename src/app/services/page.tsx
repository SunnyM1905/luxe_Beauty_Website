'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { services } from '@/lib/mock-data';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { formatCurrency } from '@/lib/currency';

const categories = ['All', 'Hair', 'Skin', 'Nails', 'Makeup', 'Bridal', 'Spa', 'Waxing', 'Threading'] as const;

export default function ServicesPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('All');

  const filtered = services.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || s.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold mb-4">Services & Pricing</h1>
          <p className="text-muted max-w-2xl mx-auto">Explore our full range of beauty treatments, each tailored to your unique needs.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input type="text" placeholder="Search services..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button key={cat} onClick={() => setCategory(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${category === cat ? 'bg-primary text-white' : 'bg-card border border-border hover:border-primary'}`}>{cat}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(service => (
            <div key={service.id} id={service.id} className="card">
              <div className="relative h-56 rounded-xl overflow-hidden mb-4">
                <Image src={service.image} alt={service.name} fill className="object-cover" />
              </div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-serif text-2xl font-semibold">{service.name}</h3>
                <span className="bg-secondary/20 text-foreground px-3 py-1 rounded-full font-bold">{formatCurrency(service.price)}</span>
              </div>
              <span className="inline-block bg-blush-100 text-primary text-xs font-medium px-2 py-1 rounded-full mb-3">{service.category}</span>
              <p className="text-muted text-sm mb-4">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">{service.duration} minutes</span>
                <Link href="/booking" className="btn-primary inline-flex items-center gap-2 text-sm"><Calendar className="w-4 h-4" /> Book Now</Link>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && <div className="text-center py-20"><p className="text-muted text-lg">No services found matching your criteria.</p></div>}
      </div>
    </div>
  );
}
