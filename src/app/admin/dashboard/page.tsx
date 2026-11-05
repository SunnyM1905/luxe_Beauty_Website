'use client';

import { Calendar, Users, DollarSign, TrendingUp, AlertCircle } from 'lucide-react';
import { bookings } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/currency';
import Link from 'next/link';

export default function AdminDashboard() {
  const totalRevenue = bookings.reduce((sum, b) => sum + b.total, 0);
  const confirmedCount = bookings.filter(b => b.status === 'confirmed').length;
  const pendingCount = bookings.filter(b => b.status === 'pending').length;
  const todayAppointments = bookings.filter(b => b.date === '2025-11-15');

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm">Today's Appointments</p>
                <p className="text-3xl font-bold mt-1">{todayAppointments.length}</p>
              </div>
              <Calendar className="w-10 h-10 text-primary" />
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm">Total Revenue</p>
                <p className="text-3xl font-bold mt-1">{formatCurrency(totalRevenue)}</p>
              </div>
              <DollarSign className="w-10 h-10 text-secondary" />
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm">Confirmed</p>
                <p className="text-3xl font-bold mt-1">{confirmedCount}</p>
              </div>
              <TrendingUp className="w-10 h-10 text-green-500" />
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm">Pending</p>
                <p className="text-3xl font-bold mt-1">{pendingCount}</p>
              </div>
              <AlertCircle className="w-10 h-10 text-orange-500" />
            </div>
          </div>
        </div>

        <div className="card mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-semibold">Today's Appointments</h2>
            <Link href="/admin/bookings" className="text-primary text-sm font-medium hover:underline">View All</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted">Time</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted">Client</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted">Service</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted">Stylist</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted">Status</th>
                </tr>
              </thead>
              <tbody>
                {todayAppointments.map(apt => (
                  <tr key={apt.id} className="border-b border-border/50 hover:bg-cream-50">
                    <td className="py-3 px-4 text-sm">{apt.time}</td>
                    <td className="py-3 px-4 text-sm">{apt.clientName}</td>
                    <td className="py-3 px-4 text-sm">{apt.serviceName}</td>
                    <td className="py-3 px-4 text-sm">{apt.staffName}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${apt.status === 'confirmed' ? 'bg-green-100 text-green-700' : apt.status === 'pending' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-700'}`}>{apt.status}</span>
                    </td>
                  </tr>
                ))}
                {todayAppointments.length === 0 && <tr><td colSpan={5} className="py-8 text-center text-muted">No appointments scheduled for today.</td></tr>}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'Manage Services', desc: 'Add, edit, or remove services', href: '/admin/services', icon: Calendar },
            { title: 'Manage Staff', desc: 'Schedules and profiles', href: '/admin/staff', icon: Users },
            { title: 'All Bookings', desc: 'View and manage reservations', href: '/admin/bookings', icon: Calendar },
            { title: 'Clients', desc: 'Client list and history', href: '/admin/clients', icon: Users },
          ].map(link => (
            <Link key={link.title} href={link.href} className="card hover:border-primary transition-colors group">
              <link.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-xl font-semibold mb-1">{link.title}</h3>
              <p className="text-muted text-sm">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
