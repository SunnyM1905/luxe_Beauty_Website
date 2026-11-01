export const services = [
  { id: "s1", name: "Haircut & Blowdry", category: "Hair", description: "Precision cut with a luxurious blowdry finish.", duration: 45, price: 65, image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80", popular: true },
  { id: "s2", name: "Full Color & Highlights", category: "Hair", description: "Full color service with dimension highlights.", duration: 120, price: 150, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80", popular: true },
  { id: "s3", name: "Bridal Hair & Makeup", category: "Bridal", description: "Complete bridal styling for your special day.", duration: 180, price: 350, image: "https://images.unsplash.com/photo-1516975087454-2f9f76f24e3c?w=600&q=80", popular: true },
  { id: "s4", name: "Signature Facial", category: "Skin", description: "Deep cleansing and rejuvenating facial.", duration: 60, price: 95, image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", popular: true },
  { id: "s5", name: "Gel Manicure", category: "Nails", description: "Long-lasting gel polish with nail art.", duration: 45, price: 55, image: "https://images.unsplash.com/photo-1604654894610-df63b6a9b088?w=600&q=80" },
  { id: "s6", name: "Swedish Massage", category: "Spa", description: "Relaxing full-body massage therapy.", duration: 60, price: 110, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80" },
  { id: "s7", name: "Threading & Brows", category: "Threading", description: "Precision eyebrow threading and shaping.", duration: 20, price: 25, image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80" },
  { id: "s8", name: "Full Body Wax", category: "Waxing", description: "Smooth, silky skin with premium wax.", duration: 90, price: 120, image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80" },
  { id: "s9", name: "Party Makeup", category: "Makeup", description: "Glamorous makeup for any occasion.", duration: 60, price: 85, image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80" },
  { id: "s10", name: "Hair Spa Treatment", category: "Hair", description: "Deep conditioning hair spa with scalp massage.", duration: 75, price: 85, image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80" },
  { id: "s11", name: "Hydrafacial", category: "Skin", description: "Advanced hydrating facial with instant glow.", duration: 60, price: 140, image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80" },
  { id: "s12", name: "Nail Art Extravaganza", category: "Nails", description: "Custom nail art with premium gel.", duration: 90, price: 95, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" },
];

export const categories = [
  { id: "all", name: "All Services", slug: "all" },
  { id: "hair", name: "Hair", slug: "hair" },
  { id: "skin", name: "Skin", slug: "skin" },
  { id: "nails", name: "Nails", slug: "nails" },
  { id: "makeup", name: "Makeup", slug: "makeup" },
  { id: "bridal", name: "Bridal", slug: "bridal" },
  { id: "spa", name: "Spa", slug: "spa" },
  { id: "waxing", name: "Waxing", slug: "waxing" },
];

export const staff = [
  { id: "st1", name: "Elena Rossi", role: "Senior Stylist", specialties: ["Hair", "Bridal"], experience: 12, bio: "Internationally trained stylist with a passion for bridal updos.", photo: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80", available: true, rating: 4.9, image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80" },
  { id: "st2", name: "Sophie Chen", role: "Skin Expert", specialties: ["Skin", "Spa"], experience: 8, bio: "Dermatology-focused esthetician specializing in anti-aging treatments.", photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80", available: true, rating: 4.8, image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80" },
  { id: "st3", name: "Mia Johnson", role: "Makeup Artist", specialties: ["Makeup", "Bridal", "Nails"], experience: 6, bio: "Celebrity makeup artist bringing out your natural beauty.", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", available: true, rating: 4.7, image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { id: "st4", name: "Aisha Patel", role: "Nail Technician", specialties: ["Nails", "Threading"], experience: 5, bio: "Nail art enthusiast with a steady hand and creative eye.", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80", available: false, rating: 4.6, image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { id: "st5", name: "Lucas Silva", role: "Massage Therapist", specialties: ["Spa", "Waxing"], experience: 10, bio: "Certified therapist specializing in deep tissue and relaxation.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", available: true, rating: 4.9, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
];

export const gallery = [
  { id: "g1", category: "hair", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80", caption: "Modern haircut", src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80", alt: "Modern haircut" },
  { id: "g2", category: "skin", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", caption: "Relaxing facial", src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", alt: "Relaxing facial" },
  { id: "g3", category: "nails", image: "https://images.unsplash.com/photo-1604654894610-df63b6a9b088?w=600&q=80", caption: "Gel manicure", src: "https://images.unsplash.com/photo-1604654894610-df63b6a9b088?w=600&q=80", alt: "Gel manicure" },
  { id: "g4", category: "bridal", image: "https://images.unsplash.com/photo-1516975087454-2f9f76f24e3c?w=600&q=80", caption: "Bridal makeup", src: "https://images.unsplash.com/photo-1516975087454-2f9f76f24e3c?w=600&q=80", alt: "Bridal makeup" },
  { id: "g5", category: "spa", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80", caption: "Massage therapy", src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80", alt: "Massage therapy" },
  { id: "g6", category: "makeup", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80", caption: "Evening makeup", src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80", alt: "Evening makeup" },
  { id: "g7", category: "waxing", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80", caption: "Waxing service", src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80", alt: "Waxing service" },
  { id: "g8", category: "hair", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80", caption: "Hair coloring", src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80", alt: "Hair coloring" },
];

export const reviews = [
  { id: "r1", clientName: "Jessica Lee", service: "Bridal Hair & Makeup", rating: 5, text: "Absolutely loved my bridal makeup! Elena made me feel like a queen on my wedding day.", date: "2025-10-20", approved: true, clientAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80" },
  { id: "r2", clientName: "Amanda Clark", service: "Signature Facial", rating: 5, text: "Best facial I have ever had. My skin is glowing!", date: "2025-10-18", approved: true, clientAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80", image: null },
  { id: "r3", clientName: "Priya Sharma", service: "Gel Manicure", rating: 4, text: "Great gel manicure, very professional and clean studio.", date: "2025-10-15", approved: true, clientAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80", image: null },
  { id: "r4", clientName: "Rachel Green", service: "Swedish Massage", rating: 5, text: "Lucas gave the best massage. I was so relaxed I fell asleep!", date: "2025-10-10", approved: true, clientAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80", image: null },
  { id: "r5", clientName: "Nina Dobrev", service: "Party Makeup", rating: 5, text: "Mia did my party makeup and I received so many compliments.", date: "2025-10-05", approved: true, clientAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80", image: null },
];

export const bookings = [
  { id: "b1", serviceId: "s1", serviceName: "Haircut & Blowdry", staffId: "st1", staffName: "Elena Rossi", date: "2025-11-15", time: "10:00", duration: 45, status: "confirmed", clientId: "c1", clientName: "Sarah Miller", clientEmail: "sarah@example.com", clientPhone: "(555) 0101", notes: "Short bob style", total: 65, deposit: 0, createdAt: "2025-11-01" },
  { id: "b2", serviceId: "s4", serviceName: "Signature Facial", staffId: "st2", staffName: "Sophie Chen", date: "2025-11-15", time: "14:00", duration: 60, status: "pending", clientId: "c2", clientName: "Emma Wilson", clientEmail: "emma@example.com", clientPhone: "(555) 0102", total: 95, deposit: 0, createdAt: "2025-11-02" },
  { id: "b3", serviceId: "s5", serviceName: "Gel Manicure", staffId: "st3", staffName: "Mia Johnson", date: "2025-11-16", time: "11:00", duration: 45, status: "confirmed", clientId: "c3", clientName: "Olivia Brown", clientEmail: "olivia@example.com", clientPhone: "(555) 0103", total: 55, deposit: 0, createdAt: "2025-11-03" },
];

export const clients = [
  { id: "c1", name: "Sarah Miller", email: "sarah@example.com", phone: "(555) 0101", visits: 12, since: "Jan 2024", loyaltyPoints: 250, membershipLevel: "Gold", preferences: { preferredStylist: "st1", skinNotes: "Sensitive skin", hairNotes: "Color treated", allergies: "None", favoriteServices: ["s1", "s10"] } },
  { id: "c2", name: "Emma Wilson", email: "emma@example.com", phone: "(555) 0102", visits: 8, since: "Mar 2024", loyaltyPoints: 80, membershipLevel: "Silver", preferences: { skinNotes: "Normal", hairNotes: "Curly", allergies: "Latex", favoriteServices: ["s4"] } },
  { id: "c3", name: "Olivia Brown", email: "olivia@example.com", phone: "(555) 0103", visits: 3, since: "Oct 2025", loyaltyPoints: 30, membershipLevel: "Silver", preferences: { skinNotes: "Oily", hairNotes: "Straight", allergies: "None", favoriteServices: [] } },
];

export const offers = [
  { id: "o1", title: "First Visit Special", description: "Get 20% off your first visit. New clients only.", code: "LUXE20", discount: "20%", expires: "Dec 31, 2025" },
  { id: "o2", title: "Bridal Package", description: "Book our complete bridal package and save $100.", code: "BRIDAL100", discount: "$100", expires: "Jun 30, 2025" },
  { id: "o3", title: "Spring Spa Deal", description: "15% off all spa treatments this spring.", code: "SPRING15", discount: "15%", expires: "May 31, 2025" },
];
