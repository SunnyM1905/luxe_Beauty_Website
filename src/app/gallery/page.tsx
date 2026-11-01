'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { gallery } from '@/lib/mock-data';

const categories = ['All', ...Array.from(new Set(gallery.map(g => g.category)))];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === 'All' ? gallery : gallery.filter(g => g.category === filter);

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-muted max-w-2xl mx-auto">Browse our portfolio of stunning transformations.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-primary text-white' : 'bg-card border border-border hover:border-primary'}`}>{cat}</button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map(img => (
            <div key={img.id} className="relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer group break-inside-avoid" onClick={() => setLightbox(img.src)}>
              <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {lightbox && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
            <button className="absolute top-4 right-4 text-white p-2" onClick={() => setLightbox(null)}><X className="w-8 h-8" /></button>
            <div className="relative max-w-4xl max-h-[90vh]">
              <Image src={lightbox} alt="Gallery" width={1200} height={800} className="object-contain max-h-[90vh] rounded-lg" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
