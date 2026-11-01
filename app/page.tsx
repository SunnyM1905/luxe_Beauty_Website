import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Check } from "lucide-react";
import { services, categories, staff, gallery } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  const featuredServices = services.slice(0, 6);
  const featuredStaff = staff.slice(0, 3);
  const featuredGallery = gallery.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blush-50 via-cream-100 to-champagne-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="animate-fade-in space-y-8">
              <h1 className="font-serif text-5xl font-bold leading-tight text-charcoal-900 sm:text-6xl">
                Where Beauty <span className="text-champagne-500">Meets</span> Serenity
              </h1>
              <p className="text-lg text-charcoal-500">Experience premium beauty treatments in an atmosphere of pure relaxation. Our expert stylists are dedicated to bringing out your inner radiance.</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="rounded-full bg-champagne-500 text-white hover:bg-champagne-600 shadow-glow">
                  <Link href="/booking">Book Appointment <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full">
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-champagne-200 flex items-center justify-center text-xs font-medium text-charcoal-600">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-champagne-400 text-champagne-400" />)}
                  </div>
                  <p className="text-xs text-charcoal-500">Trusted by 2,000+ clients</p>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-card">
                <div className="absolute inset-0 bg-gradient-to-tr from-blush-200/50 to-champagne-200/50" />
                <div className="flex h-full items-center justify-center text-charcoal-400">[Hero Image Placeholder]</div>
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white p-6 shadow-card">
                <p className="font-serif text-3xl font-bold text-champagne-600">15+</p>
                <p className="text-sm text-charcoal-500">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-charcoal-900">Popular Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-charcoal-500">From luxurious hair treatments to rejuvenating skincare, we offer a complete range of beauty services.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <div key={service.id} className="group rounded-3xl border border-champagne-200/60 bg-white p-6 shadow-soft transition hover:shadow-card">
                <div className="aspect-square overflow-hidden rounded-2xl bg-blush-50 mb-4 flex items-center justify-center text-charcoal-400 text-sm">
                  {service.name}
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium text-champagne-600">{service.category}</p>
                    <h3 className="font-serif text-xl font-semibold text-charcoal-900">{service.name}</h3>
                  </div>
                  <p className="font-serif text-xl font-bold text-champagne-600">${service.price}</p>
                </div>
                <p className="mt-2 text-sm text-charcoal-500">{service.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-charcoal-400">{service.duration} min</span>
                  <Button size="sm" variant="outline" asChild className="rounded-full">Book Now</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild className="rounded-full">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="bg-cream-100 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-charcoal-900">Exclusive Packages</h2>
            <p className="mx-auto mt-4 max-w-2xl text-charcoal-500">Save more with our curated packages designed for the ultimate beauty experience.</p>
          </div>
          <div className="mt-16 rounded-3xl bg-white p-8 shadow-card sm:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {[
                { name: "Bridal Glow", price: 450, features: ["Bridal Makeup", "Hair Styling", "Manicure", "Facial"] },
                { name: "Complete Makeover", price: 280, features: ["Haircut & Color", "Facial", "Manicure", "Massage"] },
                { name: "Quick Refresh", price: 120, features: ["Blow Dry", "Eyebrows", "Facial"] },
              ].map((pkg) => (
                <div key={pkg.name} className="rounded-2xl border border-champagne-200/60 p-6 text-center">
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900">{pkg.name}</h3>
                  <p className="mt-2 font-serif text-4xl font-bold text-champagne-600">${pkg.price}</p>
                  <ul className="mt-6 space-y-3 text-sm text-charcoal-600">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center justify-center gap-2"><Check className="h-4 w-4 text-champagne-500" /> {f}</li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full rounded-full">Book Package</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-charcoal-900">Meet the Team</h2>
            <p className="mx-auto mt-4 max-w-2xl text-charcoal-500">Our talented stylists bring passion, creativity, and expertise to every appointment.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredStaff.map((member) => (
              <div key={member.id} className="text-center">
                <div className="mx-auto aspect-square w-full max-w-[250px] overflow-hidden rounded-full bg-blush-50 shadow-soft mb-4 flex items-center justify-center text-charcoal-400 text-sm">
                  {member.name}
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal-900">{member.name}</h3>
                <p className="text-sm text-champagne-600">{member.role}</p>
                <p className="mt-2 text-sm text-charcoal-500">{member.experience} experience</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild className="rounded-full">View All Team <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-cream-100 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-charcoal-900">Our Work</h2>
            <p className="mx-auto mt-4 max-w-2xl text-charcoal-500">Browse our portfolio of stunning transformations and beautiful results.</p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {featuredGallery.map((item) => (
              <div key={item.id} className="aspect-square overflow-hidden rounded-2xl bg-white shadow-soft flex items-center justify-center text-charcoal-400 text-xs hover:shadow-card transition">
                {item.caption}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild className="rounded-full">View Gallery <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </div>
        </div>
      </section>

      {/* Offers Banner */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-champagne-400 to-blush-300 p-12 text-center text-white shadow-glow">
            <h2 className="font-serif text-4xl font-bold">First Visit? Get 20% Off!</h2>
            <p className="mt-4 text-lg opacity-90">Use code LUXE20 at checkout. Valid for new clients only.</p>
            <Button size="lg" className="mt-8 rounded-full bg-white text-charcoal-900 hover:bg-cream-100" asChild>
              <Link href="/booking">Book Now & Save</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream-100 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-charcoal-900">What Clients Say</h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Anna M.", text: "Absolutely loved my experience! The staff is professional and the salon is beautiful.", rating: 5 },
              { name: "Lisa R.", text: "Best facial I have ever had. My skin has never looked better!", rating: 5 },
              { name: "Sophie T.", text: "Got my bridal makeup done here and I looked stunning on my big day.", rating: 5 },
            ].map((review, i) => (
              <div key={i} className="rounded-3xl bg-white p-8 shadow-soft">
                <div className="flex items-center gap-1">
                  {Array(review.rating).fill(0).map((_, idx) => <Star key={idx} className="h-4 w-4 fill-champagne-400 text-champagne-400" />)}
                </div>
                <p className="mt-4 text-charcoal-600">&ldquo;{review.text}&rdquo;</p>
                <p className="mt-4 font-medium text-charcoal-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-charcoal-900">@LuxeBeauty</h2>
            <p className="mt-4 text-charcoal-500">Follow us for daily inspiration and behind-the-scenes looks.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl bg-blush-50 shadow-soft flex items-center justify-center text-charcoal-400 text-xs hover:shadow-card transition cursor-pointer">
                Instagram Post {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal-900 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-white">Ready to Pamper Yourself?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal-300">Book your appointment today and let our experts take care of you.</p>
          <Button size="lg" className="mt-8 rounded-full bg-champagne-500 text-white hover:bg-champagne-600" asChild>
            <Link href="/booking">Book Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
