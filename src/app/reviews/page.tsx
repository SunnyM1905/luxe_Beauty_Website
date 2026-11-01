'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { reviews } from '@/lib/mock-data';

export default function ReviewsPage() {
  const [filter, setFilter] = useState<'all' | '5' | '4'>('all');
  const filtered = filter === 'all' ? reviews.filter(r => r.approved) : reviews.filter(r => r.approved && r.rating >= Number(filter));

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold mb-4">Reviews</h1>
          <p className="text-muted max-w-2xl mx-auto">Real feedback from our wonderful clients.</p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {(['all', '5', '4'] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === f ? 'bg-primary text-white' : 'bg-card border border-border hover:border-primary'}`}>
              {f === 'all' ? 'All Reviews' : `${f} Stars`}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(review => (
            <div key={review.id} className="card">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (<Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-secondary fill-secondary' : 'text-muted'}`} />))}
              </div>
              <p className="text-foreground mb-4 italic">&ldquo;{review.text}&rdquo;</p>
              {review.image && <div className="relative h-40 rounded-lg overflow-hidden mb-4"><Image src={review.image} alt="Review photo" fill className="object-cover" /></div>}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden"><Image src={review.clientAvatar} alt={review.clientName} width={40} height={40} className="object-cover" /></div>
                <div>
                  <p className="font-medium text-sm">{review.clientName}</p>
                  <p className="text-muted text-xs">{review.service} • {new Date(review.date).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 card max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-2xl font-semibold mb-4">Leave a Review</h3>
          <p className="text-muted text-sm mb-6">Log in to share your experience after your appointment.</p>
          <a href="/auth/login" className="btn-primary inline-flex items-center gap-2">Login to Review</a>
        </div>
      </div>
    </div>
  );
}
