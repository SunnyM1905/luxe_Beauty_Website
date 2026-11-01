"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { services, categories } from "@/lib/constants";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = services.filter((s) => {
    const matchesCategory = filter === "all" || s.category.toLowerCase() === filter.toLowerCase();
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-blush-50 via-cream-100 to-champagne-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl font-bold text-charcoal-900">Services & Pricing</h1>
          <p className="mt-4 text-lg text-charcoal-500">Explore our full range of beauty treatments and find the perfect service for you.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          <aside className="w-full lg:w-64">
            <div className="sticky top-24 space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-10 w-full rounded-full border border-champagne-200 bg-white pl-10 pr-4 text-sm focus:border-champagne-400 focus:outline-none focus:ring-2 focus:ring-champagne-200"
                />
              </div>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFilter(cat.id)}
                    className={`w-full rounded-full px-4 py-2 text-sm font-medium transition ${filter === cat.id ? "bg-champagne-500 text-white" : "bg-white text-charcoal-600 hover:bg-champagne-50 border border-champagne-200"}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {filtered.map((service) => (
                <div key={service.id} className="rounded-3xl border border-champagne-200/60 bg-white p-6 shadow-soft transition hover:shadow-card">
                  <div className="aspect-video overflow-hidden rounded-2xl bg-blush-50 mb-4 flex items-center justify-center text-charcoal-400 text-sm">
                    {service.name}
                  </div>
                  <p className="text-xs font-medium text-champagne-600">{service.category}</p>
                  <h3 className="font-serif text-xl font-semibold text-charcoal-900">{service.name}</h3>
                  <p className="mt-2 text-sm text-charcoal-500">{service.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="font-serif text-2xl font-bold text-champagne-600">${service.price}</span>
                      <span className="ml-2 text-xs text-charcoal-400">{service.duration} min</span>
                    </div>
                    <Button size="sm" asChild className="rounded-full">
                      <Link href={`/booking?service=${service.id}`}>Book</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            {filtered.length === 0 && <p className="mt-8 text-center text-charcoal-500">No services found matching your criteria.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
