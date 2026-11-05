"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, Check, Calendar } from "lucide-react";
import { services, staff } from "@/lib/constants";
import { formatCurrency } from "@/lib/currency";

const steps = ["Service", "Stylist", "Date & Time", "Details", "Confirm"];

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [selectedStaff, setSelectedStaff] = useState<typeof staff[0] | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  const next = () => setCurrentStep(s => Math.min(s + 1, steps.length - 1));
  const prev = () => setCurrentStep(s => Math.max(s - 1, 0));

  const handleSubmit = () => {
    if (!selectedService || !selectedStaff || !date || !time || !clientName || !clientEmail) {
      alert("Please complete all required fields.");
      return;
    }
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="py-20 px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="font-serif text-4xl font-bold mb-4">Booking Confirmed!</h1>
          <p className="text-muted mb-8">Your appointment has been booked. We have sent a confirmation to {clientEmail}.</p>
          <div className="card text-left mb-8">
            <h3 className="font-serif text-xl font-semibold mb-4">Appointment Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted">Service:</span><span className="font-medium">{selectedService!.name}</span></div>
              <div className="flex justify-between"><span className="text-muted">Stylist:</span><span className="font-medium">{selectedStaff!.name}</span></div>
              <div className="flex justify-between"><span className="text-muted">Date:</span><span className="font-medium">{new Date(date).toLocaleDateString()}</span></div>
              <div className="flex justify-between"><span className="text-muted">Time:</span><span className="font-medium">{time}</span></div>
              <div className="flex justify-between"><span className="text-muted">Duration:</span><span className="font-medium">{selectedService!.duration} min</span></div>
              <div className="flex justify-between border-t border-border pt-2 mt-2"><span className="text-muted">Total:</span><span className="font-bold text-primary">{formatCurrency(selectedService!.price)}</span></div>
            </div>
          </div>
          <a href="/" className="btn-primary inline-flex items-center gap-2">Back to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl font-bold text-center mb-8">Book Appointment</h1>

        <div className="flex items-center justify-between mb-12">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${i <= currentStep ? 'bg-primary text-white' : 'bg-card border border-border text-muted'}`}>
                {i + 1}
              </div>
              <span className={`ml-2 text-sm hidden sm:block ${i <= currentStep ? 'text-foreground' : 'text-muted'}`}>{step}</span>
              {i < steps.length - 1 && <ChevronRight className="w-4 h-4 text-muted mx-2 sm:mx-4" />}
            </div>
          ))}
        </div>

        <div className="card mb-8">
          {currentStep === 0 && (
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-6">Choose a Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map(service => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${selectedService?.id === service.id ? 'border-primary bg-accent' : 'border-border hover:border-primary/50'}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-muted text-sm">{service.duration} min</p>
                      </div>
                      <span className="font-bold text-primary">{formatCurrency(service.price)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-6">Choose a Stylist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {staff.map(member => (
                  <div
                    key={member.id}
                    onClick={() => setSelectedStaff(member)}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${selectedStaff?.id === member.id ? 'border-primary bg-accent' : 'border-border hover:border-primary/50'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-blush-100 flex items-center justify-center text-charcoal-400">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-muted text-sm">{member.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-6">Select Date & Time</h2>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full md:w-auto px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-3">Available Time Slots</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                  {["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"].map(slot => (
                    <button
                      key={slot}
                      onClick={() => setTime(slot)}
                      className={`py-2 rounded-lg text-sm font-medium transition-all ${time === slot ? 'bg-primary text-white' : 'bg-card border border-border hover:border-primary'}`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-6">Your Details</h2>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name *</label>
                  <input type="text" value={clientName} onChange={e => setClientName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input type="email" value={clientEmail} onChange={e => setClientEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone *</label>
                  <input type="tel" value={clientPhone} onChange={e => setClientPhone(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+1-555-0100" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Notes (optional)</label>
                  <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Any special requests..." />
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-6">Confirm Booking</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-cream-100 rounded-xl">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-blush-50 flex items-center justify-center text-charcoal-400">
                    {selectedService!.name}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold">{selectedService!.name}</h3>
                    <p className="text-muted text-sm">with {selectedStaff!.name}</p>
                    <p className="text-muted text-sm">{new Date(date).toLocaleDateString()} at {time}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 border border-border rounded-xl">
                  <span className="text-muted">Total</span>
                  <span className="text-2xl font-bold text-primary">{formatCurrency(selectedService!.price)}</span>
                </div>
                <p className="text-xs text-muted">By booking, you agree to our cancellation policy. Free cancellation up to 24 hours before your appointment.</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button onClick={prev} disabled={currentStep === 0} className="btn-outline disabled:opacity-50">Back</button>
          {currentStep < steps.length - 1 ? (
            <button onClick={next} className="btn-primary" disabled={currentStep === 0 && !selectedService}>Next</button>
          ) : (
            <button onClick={handleSubmit} className="btn-primary flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Confirm Booking
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
