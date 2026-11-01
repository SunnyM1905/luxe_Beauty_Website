'use client';

import { Calendar, Clock, MapPin } from 'lucide-react';
import { bookings } from '@/lib/mock-data';

export default function PortalAppointments() {
  const allBookings = bookings;

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl font-bold mb-8">Appointment History</h1>

        <div className="space-y-4">
          {allBookings.map(booking => (
            <div key={booking.id} className="card">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blush-100 rounded-xl flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{booking.serviceName}</h3>
                    <p className="text-muted text-sm">with {booking.staffName}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-sm">
                  <div className="flex items-center gap-2 text-muted">
                    <Calendar className="w-4 h-4" />
                    {new Date(booking.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <Clock className="w-4 h-4" />
                    {booking.time} • {booking.duration} min
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : booking.status === 'completed' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'}`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
