'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted max-w-2xl mx-auto">We would love to hear from you. Visit us or get in touch.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="card flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl font-semibold mb-1">Address</h3>
                <p className="text-muted">123 Beauty Lane, Beverly Hills, CA 90210</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">Get Directions →</a>
              </div>
            </div>

            <div className="card flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl font-semibold mb-1">Phone</h3>
                <a href="tel:+1-555-0199" className="text-muted hover:text-primary transition-colors">(555) 0199</a>
                <a href="https://wa.me/15550199" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">Chat on WhatsApp →</a>
              </div>
            </div>

            <div className="card flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl font-semibold mb-1">Email</h3>
                <a href="mailto:hello@lumiere.com" className="text-muted hover:text-primary transition-colors">hello@lumiere.com</a>
              </div>
            </div>

            <div className="card flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl font-semibold mb-1">Opening Hours</h3>
                <ul className="text-muted text-sm space-y-1">
                  <li className="flex justify-between w-64"><span>Monday - Friday</span><span>9:00 AM - 8:00 PM</span></li>
                  <li className="flex justify-between w-64"><span>Saturday</span><span>10:00 AM - 6:00 PM</span></li>
                  <li className="flex justify-between w-64"><span>Sunday</span><span>11:00 AM - 5:00 PM</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card p-0 overflow-hidden h-[500px]">
            <iframe title="Lumière Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-118.4!3d34.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA0JzA1LjQiTiAxMTjCsDI0JzA1LjQiVw!5e0!3m2!1sen!2sus!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}
