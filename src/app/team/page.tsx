'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, Calendar } from 'lucide-react';
import { staff } from '@/lib/mock-data';

export default function TeamPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-muted max-w-2xl mx-auto">Expert stylists and therapists dedicated to your beauty and wellness.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map(member => (
            <div key={member.id} id={member.id} className="card">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-6">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl font-semibold">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted text-sm mb-3">{member.bio}</p>
                <div className="flex items-center justify-center gap-1 text-sm text-muted mb-4">
                  <Star className="w-4 h-4 text-secondary fill-secondary" />
                  <span>{member.rating}</span>
                  <span>• {member.experience} years exp.</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.specialties.map(s => (<span key={s} className="bg-blush-100 text-primary text-xs px-2 py-1 rounded-full">{s}</span>))}
                </div>
                <Link href="/booking" className="btn-primary inline-flex items-center gap-2 text-sm"><Calendar className="w-4 h-4" /> Book with {member.name.split(' ')[0]}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
