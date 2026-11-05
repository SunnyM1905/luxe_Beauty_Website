'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { bookings } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/currency';

export default function AdminBookings() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = bookings.filter(b => {
    const matchesFilter = filter === 'all' || b.status === filter;
    const matchesSearch = b.clientName.toLowerCase().includes(search.toLowerCase()) || b.serviceName.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl font-bold mb-8">All Bookings</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input type="text" placeholder="Search bookings..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="flex gap-2">
            {['all', 'confirmed', 'pending', 'completed', 'cancelled'].map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === f ? 'bg-primary text-white' : 'bg-card border border-border hover:border-primary'}`}>{f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}</button>
            ))}
          </div>
        </div>

        <div className="card overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Booking ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Client</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Service</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Time</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Total</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(booking => (
                <tr key={booking.id} className="border-b border-border/50 hover:bg-cream-50">
                  <td className="py-3 px-4 text-sm font-mono">{booking.id}</td>
                  <td className="py-3 px-4 text-sm">{booking.clientName}</td>
                  <td className="py-3 px-4 text-sm">{booking.serviceName}</td>
                  <td className="py-3 px-4 text-sm">{new Date(booking.date).toLocaleDateString()}</td>
                  <td className="py-3 px-4 text-sm">{booking.time}</td>
                  <td className="py-3 px-4 text-sm font-medium">{formatCurrency(booking.total)}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : booking.status === 'pending' ? 'bg-orange-100 text-orange-700' : booking.status === 'cancelled' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>{booking.status}</span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && <tr><td colSpan={7} className="py-8 text-center text-muted">No bookings found.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
