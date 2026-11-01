'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { services as mockServices } from '@/lib/mock-data';

export default function AdminServices() {
  const [services, setServices] = useState(mockServices);
  const [showAdd, setShowAdd] = useState(false);

  const deleteService = (id: string) => {
    setServices(services.filter(s => s.id !== id));
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-4xl font-bold">Manage Services</h1>
          <button onClick={() => setShowAdd(true)} className="btn-primary flex items-center gap-2"><Plus className="w-4 h-4" /> Add Service</button>
        </div>

        {showAdd && (
          <div className="card mb-8">
            <h2 className="font-serif text-2xl font-semibold mb-4">Add New Service</h2>
            <p className="text-muted text-sm">Service creation form placeholder. Connect to backend to save.</p>
            <button onClick={() => setShowAdd(false)} className="btn-outline mt-4">Cancel</button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <div key={service.id} className="card">
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <Image src={service.image} alt={service.name} fill className="object-cover" />
              </div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-serif text-xl font-semibold">{service.name}</h3>
                <span className="font-bold text-primary">${service.price}</span>
              </div>
              <p className="text-muted text-sm mb-3">{service.description}</p>
              <div className="flex items-center justify-between text-sm text-muted mb-4">
                <span>{service.category} • {service.duration} min</span>
              </div>
              <div className="flex gap-2">
                <button className="btn-outline flex-1 flex items-center justify-center gap-1 text-sm"><Edit className="w-3 h-3" /> Edit</button>
                <button onClick={() => deleteService(service.id)} className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm hover:bg-red-100 transition-colors"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
