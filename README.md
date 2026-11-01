# Lumière Beauty Parlour - Full Stack Application

A modern, elegant beauty parlour website with online booking, client portal, and admin dashboard.

## Features

### Public Website
- **Home**: Hero section, popular services, featured packages, team preview, gallery, testimonials, CTA
- **Services & Pricing**: Category filters, search, service details with duration and price
- **Team**: Staff profiles with specialties, ratings, and booking buttons
- **Gallery**: Masonry grid with category filters and lightbox
- **Reviews**: Star ratings, client feedback, photo reviews, submission for logged-in users
- **Contact**: Address, phone, WhatsApp, hours, embedded map

### Online Booking
- Step-by-step flow: Service → Stylist → Date & Time → Details → Confirm
- Real-time availability with conflict prevention
- Guest checkout support
- Booking confirmation page

### Client Portal
- Dashboard with upcoming appointments and loyalty stats
- Appointment history
- Profile with preferences and notes
- Data export and deletion

### Admin Dashboard
- Overview stats (revenue, appointments, pending)
- Today&apos;s appointments view
- Manage services, staff, bookings, and clients
- Role-based access (Admin, Receptionist, Stylist)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Language**: TypeScript

## Database Schema

### Tables

```sql
-- Users & Authentication
users (id, email, password_hash, name, role, phone, avatar, created_at)
clients (id, user_id, preferences_json, loyalty_points, membership_level)

-- Services & Staff
services (id, name, category, description, duration, price, image, popular)
staff (id, user_id, role, specialties, experience, bio, image, available, rating)
availability (id, staff_id, day_of_week, start_time, end_time, break_start, break_end, is_off)
packages (id, name, services_json, price, original_price, image)

-- Bookings & Payments
bookings (id, service_id, staff_id, date, time, duration, status, client_id, notes, total, deposit, created_at)
payments (id, booking_id, amount, method, status, date, receipt_url)

-- Social & Marketing
reviews (id, client_id, service_id, rating, text, image, approved, date)
gallery (id, src, category, alt)
offers (id, title, description, discount, type, code, expiry, image)

-- Notifications
notifications (id, user_id, type, message, channel, status, sent_at)

-- Audit
audit_logs (id, user_id, action, entity_type, entity_id, changes_json, ip_address, created_at)
```

### Roles
- **admin**: Full access
- **receptionist**: Bookings, clients, walk-ins
- **staff**: Own schedule, own appointments
- **client**: Own bookings, profile, reviews

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:3000

## Project Structure

```
src/
  app/
    (public)/          # Public marketing pages
      page.tsx         # Home
      services/        # Services & Pricing
      team/            # Team profiles
      gallery/         # Photo gallery
      reviews/         # Reviews
      contact/         # Contact & directions
    booking/           # Online booking flow
    auth/              # Login & Signup
      login/
      signup/
    portal/            # Client dashboard
      dashboard/
      appointments/
      profile/
      booking-confirmed/
    admin/             # Admin & staff area
      dashboard/
      services/
      staff/
      bookings/
      clients/
  components/          # Reusable UI components
  lib/                 # Types, mock data, utilities
  styles/              # Global styles
```

## Environment Variables

```env
# Supabase (or Firebase)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Payment Gateway
NEXT_PUBLIC_RAZORPAY_KEY=
NEXT_PUBLIC_STRIPE_KEY=

# Notifications
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
SENDGRID_API_KEY=
```

## Deployment

Deploy to Vercel, Netlify, or any Node.js hosting.

## License

MIT
