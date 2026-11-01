export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  duration: number; // minutes
  price: number;
  image: string;
  popular?: boolean;
}

export type ServiceCategory = 'Hair' | 'Skin' | 'Nails' | 'Makeup' | 'Bridal' | 'Spa' | 'Waxing' | 'Threading';

export interface Staff {
  id: string;
  name: string;
  role: string;
  specialties: ServiceCategory[];
  experience: number; // years
  image: string;
  bio: string;
  available: boolean;
  rating: number;
}

export interface TimeSlot {
  time: string; // "09:00"
  available: boolean;
}

export interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
  staffId: string;
  staffName: string;
  date: string;
  time: string;
  duration: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no-show';
  clientId?: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  notes?: string;
  deposit?: number;
  total: number;
  createdAt: string;
}

export interface Review {
  id: string;
  clientName: string;
  clientAvatar: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  image?: string;
  approved: boolean;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: number; // percentage or flat
  type: 'percentage' | 'flat';
  code?: string;
  expiry: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  category: string;
  alt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'client' | 'staff' | 'admin' | 'receptionist';
  phone?: string;
  avatar?: string;
}

export interface Client extends User {
  role: 'client';
  preferences: {
    preferredStylist?: string;
    skinNotes?: string;
    hairNotes?: string;
    allergies?: string;
    favoriteServices: string[];
  };
  loyaltyPoints: number;
  membershipLevel: 'Silver' | 'Gold' | 'Platinum';
}

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  method: 'cash' | 'card' | 'upi' | 'online';
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  date: string;
  receiptUrl?: string;
}
