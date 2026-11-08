import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, Eye, Sparkles, Filter, Calendar, MapPin, Check } from 'lucide-react';
import { CERTIFICATES_DATA } from '../data/certificatesData.js';
import CertificateModal from '../components/CertificateModal.jsx';

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Credentials', count: CERTIFICATES_DATA.length },
    { id: 'healing', label: 'Healing Sciences', count: CERTIFICATES_DATA.filter(c => c.category === 'healing').length },
    { id: 'arhatic', label: 'Arhatic Yoga & Soul', count: CERTIFICATES_DATA.filter(c => c.category === 'arhatic').length },
    { id: 'prosperity', label: 'Prosperity & Business', count: CERTIFICATES_DATA.filter(c => c.category === 'prosperity').length },
    { id: 'perception', label: 'Perception & Shielding', count: CERTIFICATES_DATA.filter(c => c.category === 'perception').length },
    { id: 'wisdom', label: 'Universal Wisdom', count: CERTIFICATES_DATA.filter(c => c.category === 'wisdom').length },
  ];

  const filteredCerts = activeCategory === 'all'
    ? CERTIFICATES_DATA
    : CERTIFICATES_DATA.filter(c => c.category === activeCategory);

  return (
    <div className="space-y-16 py-12">
      {/* 1. Header & Trust Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-soft text-gold-dark text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Credential Registry & Lineage Proof</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
            Verified GMCKS Credentials & Diplomas
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            In energy medicine, uncompromising lineage and verified training are the bedrock of safety and efficacy. Anita Khandelwal holds <strong className="text-ink">18 official certifications</strong> spanning over 16 years of rigorous practice under the direct authority of the World Pranic Healing Foundation (WPHF) and Institute for Inner Studies (IISI), Manila.
          </p>
        </div>

        {/* Credibility Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
          <div className="p-5 rounded-2xl bg-canvas border border-divider">
            <span className="text-xs text-ink-subtle uppercase tracking-wider block">Lineage Experience</span>
            <strong className="font-serif text-2xl sm:text-3xl font-bold text-primary block mt-1">16+ Years</strong>
            <span className="text-[11px] text-ink-muted">Active practice since 2010</span>
          </div>
          <div className="p-5 rounded-2xl bg-canvas border border-divider">
            <span className="text-xs text-ink-subtle uppercase tracking-wider block">Completed Courses</span>
            <strong className="font-serif text-2xl sm:text-3xl font-bold text-gold-dark block mt-1">18 Diplomas</strong>
            <span className="text-[11px] text-ink-muted">Healing, Arhatic & Esoteric</span>
          </div>
          <div className="p-5 rounded-2xl bg-canvas border border-divider">
            <span className="text-xs text-ink-subtle uppercase tracking-wider block">Spiritual Elevation</span>
            <strong className="font-serif text-2xl sm:text-3xl font-bold text-sage block mt-1">Arhatic L2</strong>
            <span className="text-[11px] text-ink-muted">Certified in Dubai (IISI)</span>
          </div>
          <div className="p-5 rounded-2xl bg-canvas border border-divider">
            <span className="text-xs text-ink-subtle uppercase tracking-wider block">Global Recognition</span>
            <strong className="font-serif text-2xl sm:text-3xl font-bold text-ink block mt-1">120+ Countries</strong>
            <span className="text-[11px] text-ink-muted">WPHF & IISI Manila seals</span>
          </div>
        </div>
      </section>

      {/* 2. Interactive Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-4 h-4 text-ink-subtle shrink-0 ml-1 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-canvas text-ink-muted hover:bg-stone-200 border border-divider'
              }`}
            >
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-stone-200 text-ink'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 3. Certificate Grid with Authentic Images */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="rounded-3xl bg-white border border-divider hover:border-gold/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Image Preview Container */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative h-64 bg-stone-100 overflow-hidden cursor-pointer border-b border-divider flex items-center justify-center p-3"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 shadow-sm"
                  loading="lazy"
                />
                
                {/* Year Pill Top Left */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 text-white text-[11px] font-bold backdrop-blur-sm">
                  {cert.year}
                </span>

                {/* Verified Badge Top Right */}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-600/90 text-white text-[10px] font-semibold flex items-center gap-1 backdrop-blur-sm">
                  <CheckCircle2 className="w-3 h-3" /> Verified
                </span>

                {/* Hover Overlay Button */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-4 py-2 rounded-full bg-white text-primary text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Full Certificate</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary-soft text-primary font-semibold text-[11px]">
                      {cert.categoryLabel}
                    </span>
                    <span className="text-[11px] text-ink-subtle flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gold-dark" />
                      <span className="truncate max-w-[130px]">{cert.location.split(',')[0]}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-ink group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-ink-muted mt-1 line-clamp-2 leading-relaxed">
                      {cert.summary}
                    </p>
                  </div>

                  {/* Why It Matters Snippet */}
                  <div className="p-3 rounded-xl bg-canvas border border-divider text-xs space-y-1">
                    <span className="text-[10px] uppercase font-bold text-ink-subtle tracking-wider block">
                      Curriculum Importance
                    </span>
                    <p className="text-ink text-[11px] line-clamp-2 leading-snug">
                      {cert.importance}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-divider">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-primary text-primary text-xs font-bold hover:bg-primary hover:text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Official Seal & Signatures</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Verification Guide & Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-canvas border border-divider space-y-4">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>How to Authenticate GMCKS Pranic Healing Certificates</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-ink-muted leading-relaxed">
            <div className="space-y-1.5">
              <strong className="text-ink block">1. Embossed Gold Foil Seal</strong>
              <p>Authentic certificates carry the official World Pranic Healing Foundation or Institute for Inner Studies embossed gold seal with the Grand Master Choa Kok Sui copyright.</p>
            </div>
            <div className="space-y-1.5">
              <strong className="text-ink block">2. Authorized Acharya Signatures</strong>
              <p>Courses are signed by authorized Acharyas and lecturers licensed by Manila headquarters (e.g. Master Hector Ramos, Acharya Daniel Gorgonia, Hermie Corcuera, Sumi Lazar).</p>
            </div>
            <div className="space-y-1.5">
              <strong className="text-ink block">3. Serial Number & QR Registry</strong>
              <p>Recent higher-level certifications feature digital QR verification codes registered directly in the international alumni registry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Modal */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </div>
  );
}
