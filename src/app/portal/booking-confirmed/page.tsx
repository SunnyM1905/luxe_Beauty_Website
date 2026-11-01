'use client';

import Link from 'next/link';
import { Check, Calendar, Download, Share2 } from 'lucide-react';

export default function BookingConfirmed() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="font-serif text-4xl font-bold mb-4">Booking Confirmed!</h1>
        <p className="text-muted mb-8">We have sent a confirmation email and SMS with your appointment details. Add it to your calendar to never miss it.</p>

        <div className="card text-left mb-8">
          <h3 className="font-serif text-xl font-semibold mb-4">Appointment Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted">Booking ID:</span><span className="font-mono">#B-2025001</span></div>
            <div className="flex justify-between"><span className="text-muted">Service:</span><span className="font-medium">Signature Facial</span></div>
            <div className="flex justify-between"><span className="text-muted">Stylist:</span><span className="font-medium">Sophie Chen</span></div>
            <div className="flex justify-between"><span className="text-muted">Date:</span><span className="font-medium">Nov 15, 2025</span></div>
            <div className="flex justify-between"><span className="text-muted">Time:</span><span className="font-medium">2:00 PM</span></div>
            <div className="flex justify-between border-t border-border pt-2 mt-2"><span className="text-muted">Total:</span><span className="font-bold text-primary">$95.00</span></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-secondary flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Download Receipt
          </button>
          <button className="btn-outline flex items-center justify-center gap-2">
            <Share2 className="w-4 h-4" />
            Add to Calendar
          </button>
        </div>

        <div className="mt-8">
          <Link href="/portal/dashboard" className="text-primary hover:underline text-sm">Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
