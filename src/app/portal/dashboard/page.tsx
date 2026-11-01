'use client';

import Link from 'next/link';
import { Calendar, Star, Gift, Clock, ChevronRight } from 'lucide-react';
import { bookings, clients, services } from '@/lib/mock-data';

export default function PortalDashboard() {
  // Mock current client
  const currentClient = clients[0];
  const myBookings = bookings.filter(b => b.clientId === currentClient.id || !b.clientId).slice(0, 3);

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold">Welcome back, {currentClient.name.split(' ')[0]}!</h1>
          <p className="text-muted mt-2">Manage your appointments and loyalty rewards.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm">Upcoming Appointments</p>
                <p className="text-3xl font-bold mt-1">{myBookings.filter(b => b.status === 'confirmed').length}</p>
              </div>
              <Calendar className="w-10 h-10 text-primary" />
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm">Loyalty Points</p>
                <p className="text-3xl font-bold mt-1">{currentClient.loyaltyPoints}</p>
              </div>
              <Gift className="w-10 h-10 text-secondary" />
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm">Membership</p>
                <p className="text-3xl font-bold mt-1">{currentClient.membershipLevel}</p>
              </div>
              <Star className="w-10 h-10 text-primary" />
            </div>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="card mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-semibold">Upcoming Appointments</h2>
            <Link href="/booking" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
              Book New <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {myBookings.map(booking => (
              <div key={booking.id} className="flex items-center justify-between p-4 bg-cream-100 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{booking.serviceName}</h3>
                    <p className="text-muted text-sm">with {booking.staffName} • {new Date(booking.date).toLocaleDateString()} at {booking.time}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                  {booking.status}
                </span>
              </div>
            ))}
            {myBookings.length === 0 && <p className="text-muted text-center py-8">No upcoming appointments.</p>}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Rebook', desc: 'Quick rebook your favorite service', href: '/booking', icon: Calendar },
            { title: 'Loyalty Rewards', desc: 'View and redeem points', href: '#', icon: Gift },
            { title: 'Appointment History', desc: 'See past visits', href: '/portal/appointments', icon: Clock },
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
