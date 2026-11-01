'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Mail, Phone } from 'lucide-react';
import { clients } from '@/lib/mock-data';

export default function AdminClients() {
  const [search, setSearch] = useState('');
  const filtered = clients.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl font-bold mb-8">Clients</h1>

        <div className="relative max-w-md mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
          <input type="text" placeholder="Search clients..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(client => (
            <div key={client.id} className="card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-blush-100 flex items-center justify-center">
                  <span className="font-serif text-xl font-bold text-primary">{client.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold">{client.name}</h3>
                  <p className="text-muted text-sm">{client.email}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted">
                  <Mail className="w-4 h-4" /> {client.email}
                </div>
                {client.phone && (
                  <div className="flex items-center gap-2 text-muted">
                    <Phone className="w-4 h-4" /> {client.phone}
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted">Loyalty Points</p>
                  <p className="font-bold text-primary">{client.loyaltyPoints} pts</p>
                </div>
                <div>
                  <p className="text-xs text-muted">Membership</p>
                  <p className="font-bold">{client.membershipLevel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
