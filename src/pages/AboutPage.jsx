import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, ShieldCheck, Heart, Sparkles, CheckCircle2, ArrowRight, 
  Calendar, MapPin, Compass, BookOpen, Users, Feather, Star
} from 'lucide-react';
import { CERTIFICATES_DATA } from '../data/certificatesData.js';
import { TIMELINE_MILESTONES } from '../data/specializedOfferingsData.js';

export default function AboutPage() {
  const [activeEra, setActiveEra] = useState('all');

  const filteredEras = activeEra === 'all' 
    ? TIMELINE_MILESTONES 
    : TIMELINE_MILESTONES.filter(era => era.year.includes(activeEra));

  return (
    <div className="space-y-24 py-12">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Grand Master Choa Kok Sui (GMCKS) Lineage</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
            The Journey of Anita Khandelwal
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            16+ years of disciplined spiritual sadhana, 18 international diplomas, and an unwavering commitment to relieving human physical, emotional, and psychological suffering through the authentic energy science of GMCKS.
          </p>
        </div>
      </section>

      {/* 2. MAIN BIOGRAPHY & MOTHER-DAUGHTER SYNERGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-ink-muted leading-relaxed">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                Rooted in Jaipur, Dedicated to Universal Healing
              </h2>
              <p>
                Based in the heritage city of <strong className="text-ink">Jaipur, Rajasthan</strong>, Anita Khandelwal’s journey into energy medicine began in early 2010. What started as an earnest pursuit to explore the body's innate self-recuperative abilities quickly transformed into a lifelong vocation. Under the guidance of certified senior Acharyas from the <strong>World Pranic Healing Foundation (WPHF), Manila</strong> and the <strong>Institute for Inner Studies (IISI)</strong>, she immersed herself in the exact protocols of Grand Master Choa Kok Sui.
              </p>
              <p>
                Over the past 16 years, Anita has conducted hundreds of in-person healing sessions at her peaceful Jaipur sanctuary, alongside distance healing consultations for clients across the United Kingdom, Europe, the United States, UAE, and pan-India. Her practice is recognized for its calm clinical precision, deep compassionate listening, and strict adherence to non-touch energetic hygiene.
              </p>
            </div>

            {/* Mother-Daughter Synergy Callout */}
            <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8E2DC] space-y-4">
              <div className="flex items-center gap-2 text-primary font-serif font-bold text-lg">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                <span>The Mother-Daughter Healing Synergy</span>
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Anita collaborates closely with her daughter, <strong className="text-ink">Anugya Maharwal</strong> — a practicing Chartered Accountant, Company Secretary, and active Trustee of the <strong>GMCKS Rajasthan Trust of Pranic Healing</strong>.
              </p>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Together, they bridge ancient spiritual energy science with modern analytical rigor. As active community leaders, public speakers, podcast hosts, and co-founders of the <em>Jaipur Mahjong Club</em>, they continuously work to demystify subtle energy, bringing accessible meditation and mental health tools into corporate boardrooms, classrooms, and family households.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-white border border-[#E8E2DC] text-ink font-semibold">
                  MCKS Rajasthan Trust Affiliation
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#E8E2DC] text-ink font-semibold">
                  Community Seva & Free Sunday Meditations
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#E8E2DC] text-ink font-semibold">
                  Corporate Mindfulness & Podcasting
                </span>
              </div>
            </div>

            <p>
              As an authorized instructor across Levels 1, 2, and 3, Anita does not merely treat ailments—she empowers individuals with the lifelong ability to scan, cleanse, and vitalize their own health and protect their loved ones.
            </p>
          </div>

          {/* Right Column: Verified Credentials Quick-Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-divider shadow-xl space-y-6">
              {/* Featured Authentic Portrait (Complete & Uncropped) */}
              <div className="relative rounded-2xl overflow-hidden border border-divider/80 bg-stone-100 shadow-sm group">
                <img
                  src="/images/anita-portrait.jpg"
                  alt="Anita Khandelwal, Certified GMCKS Pranic Healer with Grand Master Choa Kok Sui"
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/65 text-white text-[11px] font-semibold backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3 h-3 text-gold-light" />
                  <span>Direct GMCKS Lineage</span>
                </div>
              </div>

              {/* Clean Dedicated Identity Block (Zero Obscurity on Photo) */}
              <div className="p-4 rounded-2xl bg-canvas border border-divider space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-dark block">
                  Certified Pranic Healer & Instructor
                </span>
                <h3 className="font-serif text-2xl font-bold text-ink leading-tight">
                  Anita Khandelwal
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Jaipur Sanctuary • Serving in-person & global distance seekers since 2010. Authorized instructor across Basic, Advanced, and Pranic Psychotherapy levels.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-3.5 rounded-2xl bg-canvas border border-divider">
                  <span className="text-ink-subtle block text-[10px] uppercase font-bold tracking-wider">Experience</span>
                  <strong className="font-serif text-xl font-bold text-primary block mt-0.5">16+ Years</strong>
                  <span className="text-[10px] text-ink-muted">Continuous sadhana</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-canvas border border-divider">
                  <span className="text-ink-subtle block text-[10px] uppercase font-bold tracking-wider">Diplomas</span>
                  <strong className="font-serif text-xl font-bold text-gold-dark block mt-0.5">18 Official</strong>
                  <span className="text-[10px] text-ink-muted">Manila registered</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-ink-muted pt-2 border-t border-divider">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ink block">Level 1: Basic Pranic Healing Instructor</strong>
                    <span>Authorized to teach foundational energy anatomy & aura scanning</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ink block">Level 2: Advanced Pranic Healing Instructor</strong>
                    <span>Authorized instructor for specialized color prana cellular regeneration</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ink block">Level 3: Pranic Psychotherapy Instructor</strong>
                    <span>Authorized to train disciples in psychological trauma extraction</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ink block">Arhatic Yoga® Level 2 Graduate</strong>
                    <span>Elite esoteric initiation (Dubai IISI & GMCKS Mulshi Ashram)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/certificates"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-dark transition-all shadow-sm"
                >
                  <span>Inspect All 18 Verified Certificates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 16-YEAR AUTHENTIC JOURNEY TIMELINE */}
      <section className="bg-canvas py-16 border-y border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-soft text-gold-dark text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                <span>Documented Lineage Chronology</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
                16 Years of Spiritual Evolution (2010 – 2026+)
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Anita’s journey is backed by 18 official, dated diplomas signed by leading GMCKS Acharyas across Jaipur, Varanasi, Pune Ashram, and Dubai.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setActiveEra('all')}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeEra === 'all'
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white text-ink-muted border border-divider hover:bg-stone-100'
                }`}
              >
                Full 16-Year Timeline
              </button>
              <button
                onClick={() => setActiveEra('2010')}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeEra === '2010'
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white text-ink-muted border border-divider hover:bg-stone-100'
                }`}
              >
                2010: Triad Awakening
              </button>
              <button
                onClick={() => setActiveEra('2011')}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeEra === '2011'
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white text-ink-muted border border-divider hover:bg-stone-100'
                }`}
              >
                2011–2017: Sadhana & Mastery
              </button>
              <button
                onClick={() => setActiveEra('2021')}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeEra === '2021'
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white text-ink-muted border border-divider hover:bg-stone-100'
                }`}
              >
                2021–2026: Arhatic Level 2
              </button>
            </div>
          </div>

          {/* Timeline Eras Stack */}
          <div className="space-y-12">
            {filteredEras.map((eraBlock, eraIdx) => (
              <div 
                key={eraIdx}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-divider shadow-sm space-y-8"
              >
                {/* Era Header Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-divider">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      Era {eraIdx + 1} • {eraBlock.year}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-ink">
                      {eraBlock.era}
                    </h3>
                    <p className="text-xs text-gold-dark font-medium italic">
                      "{eraBlock.tagline}"
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-canvas border border-divider text-xs text-ink-subtle shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>{eraBlock.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {eraBlock.overview}
                </p>

                {/* Milestone Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {eraBlock.milestones.map((m, mIdx) => (
                    <div 
                      key={mIdx}
                      className="p-5 rounded-2xl bg-canvas border border-divider hover:border-gold/50 transition-all space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-primary">
                            {m.month}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-white border border-divider text-[10px] font-semibold text-ink-muted">
                            {m.badge}
                          </span>
                        </div>
                        <h4 className="font-serif text-base font-bold text-ink">
                          {m.event}
                        </h4>
                        <p className="text-xs text-ink-muted leading-relaxed">
                          {m.details}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center gap-1 text-[11px] text-sage font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified Manila Credential</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SENIOR ACHARYA MENTORS & LINEAGE TEACHERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Direct Transmission of Wisdom
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            Trained Under World-Renowned GMCKS Acharyas
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            Authenticity in esoteric sciences flows through direct spiritual lineage. Anita had the privilege to study directly under Grand Master Choa Kok Sui’s foremost global disciples:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-divider space-y-3 hover:border-gold/60 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-primary-soft flex items-center justify-center text-primary font-serif font-bold text-base">
              HR
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-ink">Master Hector Ramos</h3>
              <span className="text-xs text-gold-dark font-medium block">Senior Acharya & Former Head of GMCKS Ashram</span>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed">
              Instructed Anita in the sacred science of <em>Kriyashakti</em> in Varanasi (2010), decoding the esoteric laws of manifestation and prosperity karma.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-divider space-y-3 hover:border-gold/60 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-primary-soft flex items-center justify-center text-primary font-serif font-bold text-base">
              DG
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-ink">Acharya Daniel Gorgonia</h3>
              <span className="text-xs text-gold-dark font-medium block">Senior International Instructor, WPHF Manila</span>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed">
              Guided Anita through <em>Spiritual Business Management</em>, <em>Arhatic Yoga Level 1</em>, and <em>Higher Clairvoyance</em> at the sacred Mulshi Pune Ashram.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-divider space-y-3 hover:border-gold/60 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-primary-soft flex items-center justify-center text-primary font-serif font-bold text-base">
              HC
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-ink">Hermie Corcuera</h3>
              <span className="text-xs text-gold-dark font-medium block">Institute for Inner Studies, Manila</span>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed">
              Conducted Anita’s initiation into <em>Arhatic Yoga® Level 2</em> in Dubai (2025), expanding higher soul connection and international alignment.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-divider space-y-3 hover:border-gold/60 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-primary-soft flex items-center justify-center text-primary font-serif font-bold text-base">
              SL
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-ink">Sumi Lazar</h3>
              <span className="text-xs text-gold-dark font-medium block">Senior GMCKS Instructor, India</span>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed">
              Instructed Anita in the vibrational power of <em>Om Mani Padme Hum</em> (2017) and the universal esoteric truths of <em>Christianity Revealed</em> (2021).
            </p>
          </div>
        </div>
      </section>

      {/* 5. ETHICS & CLINICAL INTEGRITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-divider shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Uncompromising Ethics</span>
            <h2 className="font-serif text-3xl font-bold text-ink">The Guiding Pillars of Our Healing Sanctuary</h2>
            <p className="text-xs sm:text-sm text-ink-muted">
              Energy healing is effective only when practiced with purity, character, and strict ethical boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-canvas border border-divider space-y-3">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <h3 className="font-serif text-lg font-bold text-ink">100% Non-Touch & Scientific</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Pranic Healing never involves physical contact or removal of clothing. Treatments are standardized, documented, and reproducible, operating entirely within the bioplasmic aura.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-canvas border border-divider space-y-3">
              <Heart className="w-8 h-8 text-sage" />
              <h3 className="font-serif text-lg font-bold text-ink">Integrative Medical Harmony</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                We work in strict harmony with licensed medical practitioners. We never diagnose illnesses or prescribe drugs; instead, we accelerate the body’s innate healing response to medical treatment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-canvas border border-divider space-y-3">
              <Sparkles className="w-8 h-8 text-gold" />
              <h3 className="font-serif text-lg font-bold text-ink">Community Seva & Free Practice</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                In honor of Master Choa Kok Sui's teachings, we run free weekly Sunday morning Meditation on Twin Hearts sessions to flush stress and radiate divine peace to the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-3xl bg-primary text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-gold-light text-xs font-bold tracking-widest uppercase">Begin Your Journey</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal">
              Connect Directly with Anita Khandelwal
            </h2>
            <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed">
              Whether you are seeking relief from chronic pain or wish to become a certified healer to take care of your loved ones, we welcome you with open arms.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/healing-sessions"
              className="px-8 py-3.5 rounded-full bg-white text-primary text-xs font-bold tracking-wider uppercase hover:bg-gold-light hover:text-ink transition-all shadow-md"
            >
              Book a Healing Session
            </Link>
            <Link
              to="/courses"
              className="px-8 py-3.5 rounded-full border border-white/40 text-white text-xs font-bold tracking-wider uppercase hover:bg-white/10 transition-all"
            >
              View Upcoming Workshops
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
