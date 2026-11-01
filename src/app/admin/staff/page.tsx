'use client';

import Image from 'next/image';
import { Plus, Edit, Calendar } from 'lucide-react';
import { staff } from '@/lib/mock-data';
import Link from 'next/link';

export default function AdminStaff() {
  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-4xl font-bold">Manage Staff</h1>
          <button className="btn-primary flex items-center gap-2"><Plus className="w-4 h-4" /> Add Staff</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Staff Member</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Role</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Specialties</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Experience</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staff.map(member => (
                <tr key={member.id} className="border-b border-border/50 hover:bg-cream-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden"><Image src={member.image} alt={member.name} width={40} height={40} className="object-cover" /></div>
                      <span className="font-medium">{member.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm">{member.role}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-1">
                      {member.specialties.map(s => (<span key={s} className="bg-blush-100 text-primary text-xs px-2 py-0.5 rounded-full">{s}</span>))}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm">{member.experience} years</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${member.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {member.available ? 'Available' : 'Unavailable'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-accent rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                      <Link href={`/booking?staff=${member.id}`} className="p-2 hover:bg-accent rounded-lg transition-colors"><Calendar className="w-4 h-4" /></Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
