'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Service, Staff, Booking } from '@/lib/types';
import { services as mockServices, staff as mockStaff } from '@/lib/mock-data';

interface BookingState {
  selectedService: Service | null;
  selectedStaff: Staff | null;
  date: string;
  time: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  notes: string;
}

interface BookingContextType extends BookingState {
  setSelectedService: (s: Service | null) => void;
  setSelectedStaff: (s: Staff | null) => void;
  setDate: (d: string) => void;
  setTime: (t: string) => void;
  setClientName: (n: string) => void;
  setClientEmail: (e: string) => void;
  setClientPhone: (p: string) => void;
  setNotes: (n: string) => void;
  reset: () => void;
  submitBooking: () => Booking;
  availableSlots: string[];
}

const initialState: BookingState = {
  selectedService: null,
  selectedStaff: null,
  date: '',
  time: '',
  clientName: '',
  clientEmail: '',
  clientPhone: '',
  notes: '',
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<BookingState>(initialState);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const setSelectedService = (s: Service | null) => setState(p => ({ ...p, selectedService: s }));
  const setSelectedStaff = (s: Staff | null) => setState(p => ({ ...p, selectedStaff: s }));
  const setDate = (d: string) => setState(p => ({ ...p, date: d, time: '' }));
  const setTime = (t: string) => setState(p => ({ ...p, time: t }));
  const setClientName = (n: string) => setState(p => ({ ...p, clientName: n }));
  const setClientEmail = (e: string) => setState(p => ({ ...p, clientEmail: e }));
  const setClientPhone = (phone: string) => setState(p => ({ ...p, clientPhone: phone }));
  const setNotes = (n: string) => setState(p => ({ ...p, notes: n }));
  const reset = () => setState(initialState);

  const availableSlots = state.date && state.selectedService && state.selectedStaff
    ? generateSlots(state.date, state.selectedService, state.selectedStaff, bookings)
    : [];

  const submitBooking = (): Booking => {
    if (!state.selectedService || !state.selectedStaff || !state.date || !state.time) {
      throw new Error('Missing booking details');
    }
    const newBooking: Booking = {
      id: `b${Date.now()}`,
      serviceId: state.selectedService.id,
      serviceName: state.selectedService.name,
      staffId: state.selectedStaff.id,
      staffName: state.selectedStaff.name,
      date: state.date,
      time: state.time,
      duration: state.selectedService.duration,
      status: 'confirmed',
      clientName: state.clientName,
      clientEmail: state.clientEmail,
      clientPhone: state.clientPhone,
      notes: state.notes,
      total: state.selectedService.price,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setBookings(prev => [...prev, newBooking]);
    reset();
    return newBooking;
  };

  return (
    <BookingContext.Provider value={{
      ...state,
      setSelectedService,
      setSelectedStaff,
      setDate,
      setTime,
      setClientName,
      setClientEmail,
      setClientPhone,
      setNotes,
      reset,
      submitBooking,
      availableSlots,
    }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBooking must be used within a BookingProvider');
  return context;
}

function generateSlots(date: string, service: Service, staff: Staff, existing: Booking[]): string[] {
  const slots: string[] = [];
  const startHour = 9;
  const endHour = 19;
  const interval = 30;

  for (let h = startHour; h < endHour; h++) {
    for (let m = 0; m < 60; m += interval) {
      const time = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
      const isBooked = existing.some(b =>
        b.staffId === staff.id &&
        b.date === date &&
        b.status !== 'cancelled' &&
        isOverlapping(time, b.time, service.duration, b.duration)
      );
      if (!isBooked) slots.push(time);
    }
  }
  return slots;
}

function isOverlapping(start1: string, start2: string, dur1: number, dur2: number): boolean {
  const [h1, m1] = start1.split(':').map(Number);
  const [h2, m2] = start2.split(':').map(Number);
  const start1Min = h1 * 60 + m1;
  const start2Min = h2 * 60 + m2;
  const end1Min = start1Min + dur1;
  const end2Min = start2Min + dur2;
  return start1Min < end2Min && start2Min < end1Min;
}
