'use client';

import { useState } from 'react';
import { User, Save } from 'lucide-react';
import { clients } from '@/lib/mock-data';

export default function PortalProfile() {
  const client = clients[0];
  const [preferredStylist, setPreferredStylist] = useState(client.preferences.preferredStylist || '');
  const [skinNotes, setSkinNotes] = useState(client.preferences.skinNotes || '');
  const [hairNotes, setHairNotes] = useState(client.preferences.hairNotes || '');
  const [allergies, setAllergies] = useState(client.preferences.allergies || '');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl font-bold mb-8">My Profile</h1>

        <div className="card mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-blush-100 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold">{client.name}</h2>
              <p className="text-muted">{client.email}</p>
              <p className="text-sm text-muted">{client.phone}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted mb-1">Membership Level</p>
              <p className="font-semibold text-lg">{client.membershipLevel}</p>
            </div>
            <div>
              <p className="text-sm text-muted mb-1">Loyalty Points</p>
              <p className="font-semibold text-lg text-primary">{client.loyaltyPoints} pts</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="font-serif text-2xl font-semibold mb-6">Preferences & Notes</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Preferred Stylist</label>
              <input type="text" value={preferredStylist} onChange={e => setPreferredStylist(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Stylist name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Hair Notes</label>
              <textarea value={hairNotes} onChange={e => setHairNotes(e.target.value)} rows={3} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Any hair preferences or concerns..." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Skin Notes</label>
              <textarea value={skinNotes} onChange={e => setSkinNotes(e.target.value)} rows={3} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Skin type, concerns, preferences..." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Allergies</label>
              <textarea value={allergies} onChange={e => setAllergies(e.target.value)} rows={2} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Known allergies..." />
            </div>
            <button onClick={handleSave} className="btn-primary flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Preferences
            </button>
            {saved && <p className="text-green-600 text-sm">Preferences saved successfully!</p>}
          </div>
        </div>

        <div className="card mt-8">
          <h3 className="font-serif text-2xl font-semibold mb-4">Data & Privacy</h3>
          <div className="space-y-3 text-sm">
            <p className="text-muted">Your data is stored securely and never shared with third parties.</p>
            <div className="flex gap-4">
              <button className="btn-outline text-sm">Download My Data</button>
              <button className="text-red-600 text-sm hover:underline">Delete My Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
