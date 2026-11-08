import React, { useState } from 'react';
import { 
  ShieldCheck, CheckCircle2, ArrowRight, MessageCircle, Globe, MapPin, 
  Sparkles, HelpCircle, Feather, Shield, Home, Compass, Zap, Award 
} from 'lucide-react';
import { SESSION_PRICING, AILMENTS_DATA } from '../data/ailmentsData.js';
import { SPECIALIZED_OFFERINGS } from '../data/specializedOfferingsData.js';
import { useCurrency } from '../components/CurrencyContext.jsx';

export default function HealingSessionsPage() {
  const { formatPrice, currency, toggleCurrency } = useCurrency();
  const [sessionType, setSessionType] = useState('in-person');
  const [selectedAilment, setSelectedAilment] = useState(AILMENTS_DATA[0].id);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const currentAilment = AILMENTS_DATA.find(a => a.id === selectedAilment) || AILMENTS_DATA[0];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const whatsappNum = '919829000000';
    const message = `Namaste Anita ji, My name is ${fullName || 'Client'}.
I would like to book a *${sessionType === 'in-person' ? 'In-Person (Jaipur)' : 'Distance Healing (Online)'}* session.
Primary concern: *${currentAilment.title}*
Phone: ${phone || 'Not provided'}
Additional notes: ${notes || 'None'}`;

    const url = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-20 py-12">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Private Client Care</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
            Pranic Healing Sessions & Protocols
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            Experience restorative, non-touch energy medicine tailored to your unique physical condition or emotional challenges. Available in person at our peaceful Jaipur clinic or remotely across the world via distance healing.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={toggleCurrency}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-divider text-xs font-semibold text-ink-muted bg-white hover:border-gold hover:text-gold-dark"
            >
              <Globe className="w-3.5 h-3.5 text-gold-dark" />
              <span>Currency: {currency === 'INR' ? '₹ INR (India)' : '$ USD (International)'} (Click to switch)</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Formats: In-Person vs Distance Healing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-divider hover:border-primary/40 shadow-sm transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary-soft flex items-center justify-center text-primary">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-ink">In-Person Healing (Jaipur)</h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Conducted in our tranquil private healing sanctuary in Jaipur. You remain fully clothed and comfortably seated or lying down while Anita scans, cleanses, and energizes your chakras without any physical contact.
            </p>
            <ul className="space-y-2 text-xs text-ink-muted pt-2 border-t border-divider">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sage shrink-0" />
                <span>Immediate direct assessment and physical aura palpation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sage shrink-0" />
                <span>Deep meditative environment with sacred chants</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sage shrink-0" />
                <span>Ideal for residents of Jaipur, Rajasthan, and visiting travelers</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-divider hover:border-gold/50 shadow-sm transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-soft flex items-center justify-center text-gold-dark">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-ink">Global Distance Healing (Online)</h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Energy is not restricted by time or geographic space. In quantum physics and esoteric energy science, the bioplasmic body can be accessed and revitalized anywhere on Earth via the principle of interconnected energy fields.
            </p>
            <ul className="space-y-2 text-xs text-ink-muted pt-2 border-t border-divider">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sage shrink-0" />
                <span>Conducted via Zoom or confidential phone appointment</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sage shrink-0" />
                <span>Equally potent and effective as an in-person session</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sage shrink-0" />
                <span>Serving NRI clients in the USA, UK, UAE, Canada & Australia</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Transparent Pricing</span>
          <h2 className="font-serif text-3xl font-bold text-ink">Treatment Rates & Outcome Packages</h2>
          <p className="text-sm text-ink-muted">
            Choose between an individual session or comprehensive outcome-based protocols for chronic recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Single Session */}
          <div className="p-8 rounded-3xl bg-white border border-divider shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold text-ink-subtle uppercase tracking-wider">Discovery</span>
              <h3 className="font-serif text-2xl font-bold text-ink">{SESSION_PRICING.singleSession.title}</h3>
              <p className="text-xs text-ink-muted">{SESSION_PRICING.singleSession.tagline}</p>
              
              <div className="py-3 border-y border-divider">
                <span className="font-serif text-3xl font-bold text-primary">
                  {formatPrice(SESSION_PRICING.singleSession.inr, SESSION_PRICING.singleSession.usd)}
                </span>
                <span className="text-xs text-ink-subtle block">per 60-minute appointment</span>
              </div>

              <ul className="space-y-2 text-xs text-ink-muted">
                {SESSION_PRICING.singleSession.includes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sage shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#booking-form"
              className="w-full text-center py-2.5 rounded-full border border-primary text-primary text-xs font-bold hover:bg-primary hover:text-white transition-colors"
            >
              Select Single Session
            </a>
          </div>

          {/* Card 2: 5-Session Protocol (Highlighted) */}
          <div className="p-8 rounded-3xl bg-white border-2 border-primary shadow-xl space-y-6 flex flex-col justify-between relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-[11px] font-bold uppercase tracking-wider shadow">
              Most Recommended for Chronic Relief
            </div>

            <div className="space-y-4 pt-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Multi-Stage Restoration</span>
              <h3 className="font-serif text-2xl font-bold text-ink">{SESSION_PRICING.intensivePackage.title}</h3>
              <p className="text-xs text-ink-muted">{SESSION_PRICING.intensivePackage.tagline}</p>

              <div className="py-3 border-y border-divider">
                <span className="font-serif text-3xl font-bold text-primary">
                  {formatPrice(SESSION_PRICING.intensivePackage.inr, SESSION_PRICING.intensivePackage.usd)}
                </span>
                <span className="text-xs text-sage font-semibold block">
                  (Save {formatPrice(SESSION_PRICING.intensivePackage.savingsINR, SESSION_PRICING.intensivePackage.savingsUSD)} compared to single rates)
                </span>
              </div>

              <ul className="space-y-2 text-xs text-ink-muted">
                {SESSION_PRICING.intensivePackage.includes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sage shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#booking-form"
              className="w-full text-center py-3 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary-dark transition-all shadow-md"
            >
              Book 5-Session Protocol
            </a>
          </div>

          {/* Card 3: Annual Retainer */}
          <div className="p-8 rounded-3xl bg-white border border-divider shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold text-ink-subtle uppercase tracking-wider">Executive & Family</span>
              <h3 className="font-serif text-2xl font-bold text-ink">{SESSION_PRICING.annualRetainer.title}</h3>
              <p className="text-xs text-ink-muted">{SESSION_PRICING.annualRetainer.tagline}</p>

              <div className="py-3 border-y border-divider">
                <span className="font-serif text-3xl font-bold text-primary">
                  {formatPrice(SESSION_PRICING.annualRetainer.inr, SESSION_PRICING.annualRetainer.usd)}
                </span>
                <span className="text-xs text-ink-subtle block">12 Monthly Sessions + 2 Emergency</span>
              </div>

              <ul className="space-y-2 text-xs text-ink-muted">
                {SESSION_PRICING.annualRetainer.includes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sage shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#booking-form"
              className="w-full text-center py-2.5 rounded-full border border-divider text-ink-muted text-xs font-bold hover:bg-canvas transition-colors"
            >
              Inquire for Retainer
            </a>
          </div>
        </div>
      </section>

      {/* 3.5 SPECIALIZED CLINICAL MODALITIES (FROM 18 DIPLOMAS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-soft text-gold-dark text-xs font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>Certified Advanced Modalities</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
              Specialized Healing Protocols
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              Beyond foundational energetic sweeping, Anita holds certified masteries in specialized GMCKS technologies for deep localized pain extraction, aesthetic rejuvenation, space vastu, and executive prosperity.
            </p>
          </div>
          <span className="text-xs text-ink-subtle hidden md:block">
            All protocols 100% non-touch & drug-free
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALIZED_OFFERINGS.map((offering) => (
            <div
              key={offering.id}
              className="p-7 rounded-3xl bg-white border border-divider hover:border-gold/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-canvas border border-divider flex items-center justify-center">
                    {offering.iconName === 'Sparkles' && <Sparkles className="w-5 h-5 text-gold-dark" />}
                    {offering.iconName === 'Feather' && <Feather className="w-5 h-5 text-rose-500" />}
                    {offering.iconName === 'Home' && <Home className="w-5 h-5 text-primary" />}
                    {offering.iconName === 'Compass' && <Compass className="w-5 h-5 text-emerald-600" />}
                    {offering.iconName === 'Shield' && <Shield className="w-5 h-5 text-primary" />}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-soft text-primary font-bold text-[10px] uppercase tracking-wider">
                    {offering.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-ink group-hover:text-primary transition-colors">
                    {offering.title}
                  </h3>
                  <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                    {offering.tagline}
                  </p>
                </div>

                <div className="py-2.5 border-y border-divider flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-ink-subtle uppercase block font-semibold">Session Investment</span>
                    <span className="font-serif text-xl font-bold text-primary">
                      {formatPrice(offering.pricing.inr, offering.pricing.usd)}
                    </span>
                  </div>
                  <span className="text-[11px] text-ink-muted font-medium">{offering.duration}</span>
                </div>

                <div className="space-y-2 text-xs text-ink-muted">
                  <span className="text-[10px] font-bold uppercase text-ink tracking-wider block">Target Outcomes:</span>
                  {offering.benefits.slice(0, 3).map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sage shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-canvas border border-divider text-[11px] text-ink-subtle">
                  <span className="font-semibold text-ink block">Verified Credential:</span>
                  <span>{offering.credentialTitle}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-divider">
                <a
                  href={`https://wa.me/919829000000?text=${encodeURIComponent(
                    `Hello Anita ji, I would like to book a session for your specialized protocol: *${offering.title}*. Please let me know your earliest available slot.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-canvas hover:bg-primary hover:text-white text-ink text-xs font-bold transition-all border border-divider"
                >
                  <span>Book {offering.title.split(' ')[0]} {offering.title.split(' ')[1] || 'Session'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Interactive Intake & Booking Form */}
      <section id="booking-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-divider shadow-2xl p-8 sm:p-12 space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-soft text-gold-dark text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step 1 of 2: Session Intake</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-ink">Schedule Your Appointment</h2>
            <p className="text-xs sm:text-sm text-ink-muted max-w-lg mx-auto">
              Fill out your details below. This will pre-fill your consultation request and connect directly with Anita Khandelwal on WhatsApp for instant confirmation.
            </p>
          </div>

          <form onSubmit={handleBookingSubmit} className="space-y-6">
            {/* Session Format Toggle */}
            <div>
              <label className="block text-xs font-bold text-ink mb-2">Preferred Session Format:</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSessionType('in-person')}
                  className={`p-4 rounded-xl border text-center transition-all ${
                    sessionType === 'in-person'
                      ? 'border-primary bg-primary-soft text-primary font-bold shadow-sm'
                      : 'border-divider text-ink-muted hover:border-primary/40'
                  }`}
                >
                  <MapPin className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <span className="text-xs block">In-Person (Jaipur Clinic)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSessionType('distance')}
                  className={`p-4 rounded-xl border text-center transition-all ${
                    sessionType === 'distance'
                      ? 'border-primary bg-primary-soft text-primary font-bold shadow-sm'
                      : 'border-divider text-ink-muted hover:border-primary/40'
                  }`}
                >
                  <Globe className="w-5 h-5 mx-auto mb-1 text-gold-dark" />
                  <span className="text-xs block">Global Distance (Zoom/WhatsApp)</span>
                </button>
              </div>
            </div>

            {/* Ailment Selection */}
            <div>
              <label className="block text-xs font-bold text-ink mb-2">Primary Area of Concern:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {AILMENTS_DATA.map((ailment) => (
                  <button
                    type="button"
                    key={ailment.id}
                    onClick={() => setSelectedAilment(ailment.id)}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      selectedAilment === ailment.id
                        ? 'border-primary bg-primary-soft text-primary font-bold'
                        : 'border-divider text-ink-muted hover:border-primary/30'
                    }`}
                  >
                    <span className="font-serif block text-sm">{ailment.title}</span>
                    <span className="text-[11px] text-ink-subtle">{ailment.category}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Client Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-ink-muted mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Khandelwal"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-divider text-xs focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink-muted mb-1">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98290 12345"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-divider text-xs focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-muted mb-1">Briefly describe your symptoms or timeline</label>
              <textarea
                rows={3}
                placeholder="How long have you had this ailment? Any ongoing treatments or medical diagnoses?"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-divider text-xs focus:outline-none focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full font-bold text-white bg-sage hover:bg-sage-light hover:text-stone-900 transition-all flex items-center justify-center gap-2 shadow-lg text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Confirm & Send via WhatsApp</span>
            </button>
          </form>
        </div>
      </section>

      {/* 5. What to Expect FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h3 className="font-serif text-2xl font-bold text-ink text-center">Frequently Asked Questions</h3>
        <div className="space-y-4 text-xs sm:text-sm text-ink-muted">
          <div className="p-5 rounded-2xl bg-white border border-divider space-y-1">
            <strong className="text-ink text-sm block">Do I need to remove my clothes or be touched during a session?</strong>
            <p>No. Pranic Healing is 100% non-touch. You remain fully clothed in comfortable loose attire throughout the entire treatment.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-divider space-y-1">
            <strong className="text-ink text-sm block">How does Distance Healing work if I live in London or New York?</strong>
            <p>Energy follows intention. Just as radio waves or Wi-Fi signals traverse physical space without tangible cables, prana operates in the subtle bioplasmic quantum field. We coordinate a scheduled appointment time, connect briefly over phone or Zoom, and project healing prana directly into your aura.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-divider space-y-1">
            <strong className="text-ink text-sm block">Should I stop my doctor's prescription medicines?</strong>
            <p>Never. Pranic Healing is designed to strictly complement conventional medical care. It accelerates the body's natural response to medication and recovery, but we never alter or interfere with physician prescriptions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
