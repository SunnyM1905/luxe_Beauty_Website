import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, Calendar } from 'lucide-react';
import { services, staff, reviews, offers, gallery } from '@/lib/mock-data';

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80"
            aria-hidden="true"
          >
            <source src="/background-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Where Beauty <br />Meets <span className="text-blush-300 italic">Artistry</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 animate-fade-in animate-delay-100">
              Experience world-class beauty treatments in an atmosphere of pure luxury.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
              <Link href="/booking" className="btn-primary inline-flex items-center justify-center gap-2">Book Appointment <ArrowRight className="w-5 h-5" /></Link>
              <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-foreground inline-flex items-center justify-center">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary to-blush-400 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-medium text-center md:text-left">Use code <strong>WELCOME20</strong> for 20% off your first visit!</p>
          <Link href="/booking" className="bg-white text-primary px-4 py-1.5 rounded-full text-sm font-medium hover:bg-cream-100 transition-colors">Claim Offer</Link>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Most Popular Services</h2>
            <p className="text-muted max-w-2xl mx-auto">From precision haircuts to luxurious spa treatments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.filter(s => s.popular).map(service => (
              <Link key={service.id} href={`/services#${service.id}`} className="card group">
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <Image src={service.image} alt={service.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-secondary text-foreground text-xs font-bold px-2 py-1 rounded-full">${service.price}</div>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-muted text-sm mb-3">{service.description}</p>
                <div className="flex items-center justify-between text-sm text-muted">
                  <span>{service.duration} min</span>
                  <span className="text-primary font-medium">Book Now →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline inline-flex items-center gap-2">View All Services <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Curated Packages</h2>
            <p className="text-muted max-w-2xl mx-auto">Save more with our carefully designed beauty packages.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Bridal Bliss', desc: 'Complete bridal hair, makeup & trial', price: 450, orig: 520, img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80' },
              { name: 'Glow Getter', desc: 'Facial, hair spa & massage', price: 250, orig: 290, img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80' },
              { name: 'Nail & Glow', desc: 'Gel manicure with party makeup', price: 130, orig: 140, img: 'https://images.unsplash.com/photo-1604654894610-df63b6a9b088?w=600&q=80' },
            ].map(pkg => (
              <div key={pkg.name} className="card relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-secondary text-foreground text-xs font-bold px-2 py-1 rounded-full">Save ${pkg.orig - pkg.price}</div>
                <div className="h-48 rounded-xl overflow-hidden mb-4"><Image src={pkg.img} alt={pkg.name} width={400} height={300} className="w-full h-full object-cover" /></div>
                <h3 className="font-serif text-2xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-muted text-sm mb-4">{pkg.desc}</p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary">${pkg.price}</span>
                  <span className="text-muted line-through text-sm mb-1">${pkg.orig}</span>
                </div>
                <Link href="/booking" className="btn-primary w-full text-center block">Book Package</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Meet Our Experts</h2>
            <p className="text-muted max-w-2xl mx-auto">Talented professionals dedicated to making you look and feel your best.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.slice(0, 4).map(member => (
              <div key={member.id} className="card text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-serif text-xl font-semibold">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted text-sm mb-3">{member.bio}</p>
                <div className="flex items-center justify-center gap-1 text-sm text-muted mb-4">
                  <Star className="w-4 h-4 text-secondary fill-secondary" />
                  <span>{member.rating}</span>
                  <span>• {member.experience} yrs</span>
                </div>
                <Link href={`/team#${member.id}`} className="btn-outline text-sm w-full text-center block">View Profile</Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/team" className="btn-outline inline-flex items-center gap-2">Meet Full Team <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
            <p className="text-muted max-w-2xl mx-auto">A glimpse into our portfolio of beautiful transformations.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.slice(0, 8).map(img => (
              <div key={img.id} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-outline inline-flex items-center gap-2">View Gallery <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Client Love</h2>
            <p className="text-muted max-w-2xl mx-auto">Hear from our happy clients who trust us with their beauty needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.filter(r => r.approved).slice(0, 3).map(review => (
              <div key={review.id} className="card">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (<Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-secondary fill-secondary' : 'text-muted'}`} />))}
                </div>
                <p className="text-foreground mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src={review.clientAvatar} alt={review.clientName} width={40} height={40} className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{review.clientName}</p>
                    <p className="text-muted text-xs">{review.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/reviews" className="btn-outline inline-flex items-center gap-2">Read All Reviews <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-primary to-blush-400 text-white border-none">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Ready to Glow?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">Book your appointment today.</p>
            <Link href="/booking" className="bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-cream-100 transition-colors inline-flex items-center gap-2 shadow-lg">
              <Calendar className="w-5 h-5" /> Book Your Appointment Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
