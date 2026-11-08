import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Check, Award, Feather, PhoneCall, Heart, Star, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { useCurrency } from '../components/CurrencyContext.jsx';
import { COURSES_DATA } from '../data/coursesData.js';
import { SESSION_PRICING } from '../data/ailmentsData.js';
import { TESTIMONIALS_DATA, CERTIFICATES_DATA } from '../data/certificatesData.js';

export default function HomePage() {
  const { formatPrice } = useCurrency();
  const [selectedGoal, setSelectedGoal] = useState('stress');

  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  // GSAP Smooth Mount Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(badgeRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.8,
        ease: 'power3.out'
      });
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.15,
        ease: 'power3.out'
      });
      gsap.from(subRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
      });
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.45,
        ease: 'power3.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const goalSolutions = {
    stress: {
      tag: "Emotional & Mental Equilibrium",
      title: "Anxiety, Stress & Restful Sleep",
      description: "Cleanse accumulated emotional exhaustion and overactive thoughts from the energy centers without medication or physical invasion.",
      recommendedStep: "Step 1: Complimentary 15-Minute Energy Discovery Call to identify where stress is held.",
      upsellOption: "Step 2: 1-on-1 Targeted Emotional Clearing Session.",
      ctaText: "Claim Free 15-Min Discovery Call",
      ctaLink: "https://wa.me/919829000000?text=Hello%20Anita%20ji,%20I%20would%20like%20to%20book%20the%20Free%2015-Minute%20Aura%20Discovery%20Call%20for%20stress/sleep%20relief."
    },
    pain: {
      tag: "Physical Body Renewal",
      title: "Chronic Migraines & Spine Relief",
      description: "Non-touch sweeping systematically removes congested inflamed energy from nerves and joints, accelerating cellular repair.",
      recommendedStep: "Step 1: Free 15-Min Energy Scan to map pain blockages in your aura.",
      upsellOption: "Step 2: 5-Session Chronic Relief Protocol.",
      ctaText: "Book Free 15-Min Energy Scan",
      ctaLink: "https://wa.me/919829000000?text=Hello%20Anita%20ji,%20I%20would%20like%20to%20book%20the%20Free%2015-Minute%20Energy%20Scan%20for%20physical%20pain%20relief."
    },
    learn: {
      tag: "Certified Life Skill",
      title: "Learn to Heal Yourself & Loved Ones",
      description: "A standardized scientific 2-day workshop where you directly feel auras, scan energy, and treat everyday ailments.",
      recommendedStep: "Step 1: Experience the energy in our Free Sunday Twin Hearts practice.",
      upsellOption: "Step 2: Enroll in the certified GMCKS Basic Pranic Healing Weekend Workshop.",
      ctaText: "Reserve Seat for Workshop",
      ctaLink: "/courses"
    }
  };

  const activeSolution = goalSolutions[selectedGoal];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-hidden">
      {/* 1. LUXURY MINIMALIST HERO */}
      <section ref={heroRef} className="relative pt-12 pb-12 sm:pt-20 sm:pb-20">
        {/* Subtle Ambient Aura */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-12 left-1/4 w-80 h-80 rounded-full bg-gold/10 blur-3xl animate-float-slow" />
          <div className="absolute top-24 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float-reverse" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          {/* Pill Badge */}
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-divider text-xs font-semibold tracking-wider text-primary shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Grand Master Choa Kok Sui Certified Lineage</span>
          </div>

          {/* Heading with generous line-height */}
          <h1 ref={headingRef} className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-ink leading-[1.15] sm:leading-[1.18]">
            Energy Medicine for the <br className="hidden sm:inline" />
            <span className="italic font-normal text-primary">Mind, Body & Soul.</span>
          </h1>

          {/* Subtitle */}
          <p ref={subRef} className="text-base sm:text-lg text-ink-muted font-light max-w-2xl mx-auto leading-relaxed">
            Experience gentle, non-touch healing with <strong className="font-semibold text-ink">Anita Khandelwal</strong>. Let us handhold you from physical discomfort and emotional overwhelm into lasting vitality.
          </p>

          {/* Handholding Hero Quick Actions */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href="https://wa.me/919829000000?text=Hello%20Anita%20ji,%20I%20am%20new%20to%20Pranic%20Healing%20and%20would%20love%20to%20book%20a%20Free%2015-Minute%20Discovery%20Call."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-primary hover:bg-plum-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-gold-light" />
              <span>Book Free 15-Min Discovery Call</span>
            </a>

            <Link
              to="/twin-hearts-meditation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-ink hover:text-primary bg-white border border-divider hover:border-gold transition-all"
            >
              <Heart className="w-4 h-4 text-rose-500" />
              <span>Free Sunday Twin Hearts</span>
            </Link>
          </div>

          {/* Clean Unified Trust Strip */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-ink-muted">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-divider/60">
              <Check className="w-3.5 h-3.5 text-sage shrink-0" />
              <span>100% Non-Touch & Drug-Free</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-divider/60">
              <Check className="w-3.5 h-3.5 text-gold-dark shrink-0" />
              <span>18 Verified GMCKS Diplomas</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-divider/60">
              <Check className="w-3.5 h-3.5 text-gold-dark shrink-0" />
              <span>Arhatic Yoga® Level 2 Graduate</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-divider/60">
              <Check className="w-3.5 h-3.5 text-sage shrink-0" />
              <span>16+ Years Experience (Since 2010)</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. HANDHOLDING: "WHERE SHALL WE BEGIN?" */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-divider shadow-xs space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-[11px] font-bold tracking-widest uppercase text-gold-dark">
              Personalized Guidance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink">
              Where shall we begin your healing?
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted">
              Select your priority below. We will guide you with the exact right first step.
            </p>
          </div>

          {/* 3 Touch Cards with consistent heights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setSelectedGoal('stress')}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 h-full flex flex-col justify-between ${
                selectedGoal === 'stress'
                  ? 'bg-primary text-white border-primary shadow-md -translate-y-0.5'
                  : 'bg-canvas text-ink border-divider hover:border-gold'
              }`}
            >
              <div>
                <Feather className={`w-5 h-5 mb-3 ${selectedGoal === 'stress' ? 'text-gold-light' : 'text-primary'}`} />
                <h3 className="font-serif text-lg font-bold">Relieve Stress & Anxiety</h3>
                <p className={`text-xs mt-1.5 leading-relaxed ${selectedGoal === 'stress' ? 'text-[#EFE8E2]' : 'text-ink-muted'}`}>
                  Calm restless thoughts, overcome burnout, and enjoy uninterrupted deep sleep.
                </p>
              </div>
            </button>

            <button
              onClick={() => setSelectedGoal('pain')}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 h-full flex flex-col justify-between ${
                selectedGoal === 'pain'
                  ? 'bg-primary text-white border-primary shadow-md -translate-y-0.5'
                  : 'bg-canvas text-ink border-divider hover:border-gold'
              }`}
            >
              <div>
                <Sparkles className={`w-5 h-5 mb-3 ${selectedGoal === 'pain' ? 'text-gold-light' : 'text-gold-dark'}`} />
                <h3 className="font-serif text-lg font-bold">Soothe Physical Pain</h3>
                <p className={`text-xs mt-1.5 leading-relaxed ${selectedGoal === 'pain' ? 'text-[#EFE8E2]' : 'text-ink-muted'}`}>
                  Target chronic migraines, spine/sciatica stiffness, and post-op recovery.
                </p>
              </div>
            </button>

            <button
              onClick={() => setSelectedGoal('learn')}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 h-full flex flex-col justify-between ${
                selectedGoal === 'learn'
                  ? 'bg-primary text-white border-primary shadow-md -translate-y-0.5'
                  : 'bg-canvas text-ink border-divider hover:border-gold'
              }`}
            >
              <div>
                <Award className={`w-5 h-5 mb-3 ${selectedGoal === 'learn' ? 'text-gold-light' : 'text-primary'}`} />
                <h3 className="font-serif text-lg font-bold">Learn the Healing Art</h3>
                <p className={`text-xs mt-1.5 leading-relaxed ${selectedGoal === 'learn' ? 'text-[#EFE8E2]' : 'text-ink-muted'}`}>
                  Earn an internationally recognized GMCKS certificate to heal your family.
                </p>
              </div>
            </button>
          </div>

          {/* Solution Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-canvas border border-divider space-y-4 transition-all">
            <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white border border-divider text-primary inline-block">
              {activeSolution.tag}
            </span>
            <h4 className="font-serif text-2xl font-bold text-ink">{activeSolution.title}</h4>
            <p className="text-sm text-ink-muted leading-relaxed">{activeSolution.description}</p>

            <div className="pt-2 border-t border-divider grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
              <div className="p-3.5 rounded-xl bg-white border border-divider">
                <span className="text-gold-dark font-bold block mb-0.5">Recommended Starting Point:</span>
                <span className="text-ink font-medium leading-relaxed block">{activeSolution.recommendedStep}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-divider">
                <span className="text-primary font-bold block mb-0.5">Next Natural Progression:</span>
                <span className="text-ink font-medium leading-relaxed block">{activeSolution.upsellOption}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              {activeSolution.ctaLink.startsWith('http') ? (
                <a
                  href={activeSolution.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-primary hover:bg-plum-800 transition-all shadow-sm"
                >
                  <span>{activeSolution.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-light" />
                </a>
              ) : (
                <Link
                  to={activeSolution.ctaLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-primary hover:bg-plum-800 transition-all shadow-sm"
                >
                  <span>{activeSolution.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-light" />
                </Link>
              )}
              <span className="text-xs text-ink-subtle">No commitment required • Direct personal guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIMPLE 3-TIER JOURNEY */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <span className="text-[11px] font-bold tracking-widest uppercase text-gold-dark">
            A Gentle Progression
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink">
            How We Work Together
          </h2>
          <p className="text-sm text-ink-muted">
            We believe in complete transparency. Start with a zero-risk free experience, and advance only when you feel the benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: FREE ENTRY */}
          <div className="p-8 rounded-3xl bg-white border border-divider shadow-xs flex flex-col justify-between space-y-6 hover:border-gold hover:-translate-y-1 transition-all duration-300 h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-canvas border border-divider text-primary text-[11px] font-bold uppercase tracking-wider">
                  Tier 1 • Free Entry
                </span>
                <span className="font-serif text-lg font-bold text-gold-dark">₹0 / Free</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink">15-Min Energy Discovery Call</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                A private 15-minute phone or Zoom consultation with Anita Khandelwal. She will scan your energy centers, explain where blockages exist, and guide your next steps.
              </p>
              <ul className="space-y-2 text-xs text-ink-muted pt-3 border-t border-divider">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sage shrink-0" />
                  <span>Personalized chakra & aura scan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sage shrink-0" />
                  <span>Clear answers to your symptoms</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sage shrink-0" />
                  <span>Zero obligation to purchase</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/919829000000?text=Hello%20Anita%20ji,%20I%20would%20like%20to%20schedule%20my%20Free%2015-Minute%20Aura%20Discovery%20Call."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full text-center text-xs font-bold tracking-wider uppercase text-white bg-primary hover:bg-plum-800 transition-colors shadow-xs block"
            >
              Book Free Discovery Call
            </a>
          </div>

          {/* Card 2: CORE UPSELL (HEALING SESSION) */}
          <div className="p-8 rounded-3xl bg-white border-2 border-gold shadow-md flex flex-col justify-between space-y-6 relative hover:-translate-y-1 transition-all duration-300 h-full">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-gold text-white text-[10px] font-bold uppercase tracking-widest shadow-xs">
              Core Recommendation
            </div>

            <div className="space-y-4 pt-1">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-canvas border border-divider text-primary text-[11px] font-bold uppercase tracking-wider">
                  Tier 2 • Upsell 1
                </span>
                <span className="font-serif text-2xl font-bold text-ink">
                  {formatPrice(SESSION_PRICING.singleSession.inr, SESSION_PRICING.singleSession.usd)}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink">Targeted 1-on-1 Healing Session</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                A full 60-minute intensive treatment for your specific ailment (migraine, back pain, anxiety, or insomnia). Available at our Jaipur clinic or globally online.
              </p>
              <ul className="space-y-2 text-xs text-ink-muted pt-3 border-t border-divider">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                  <span>Deep bioplasmic sweeping & extraction</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                  <span>Targeted fresh prana energizing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                  <span>Energy hygiene & salt-bath protocol</span>
                </li>
              </ul>
            </div>

            <Link
              to="/healing-sessions"
              className="w-full py-3 rounded-full text-center text-xs font-bold tracking-wider uppercase text-white bg-primary hover:bg-plum-800 transition-colors shadow-xs block"
            >
              Explore Healing Sessions
            </Link>
          </div>

          {/* Card 3: HIGHER UPSELL (CERTIFIED WORKSHOP) */}
          <div className="p-8 rounded-3xl bg-white border border-divider shadow-xs flex flex-col justify-between space-y-6 hover:border-gold hover:-translate-y-1 transition-all duration-300 h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-canvas border border-divider text-primary text-[11px] font-bold uppercase tracking-wider">
                  Tier 3 • Upsell 2
                </span>
                <span className="font-serif text-2xl font-bold text-ink">
                  {formatPrice(COURSES_DATA[0].fees.inr.fresher, COURSES_DATA[0].fees.usd.fresher)}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink">Certified Basic Pranic Healing (L1)</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                A transformative 2-day weekend certification. Learn to scan auras, heal physical ailments, and take charge of your family’s health. Manila IISI certificate valid in 120+ countries.
              </p>
              <ul className="space-y-2 text-xs text-ink-muted pt-3 border-t border-divider">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sage shrink-0" />
                  <span>Official textbook & meditation audio</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sage shrink-0" />
                  <span>Hands-on practice under Anita</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sage shrink-0" />
                  <span>Next Batch: {COURSES_DATA[0].upcomingBatches[0].dates}</span>
                </li>
              </ul>
            </div>

            <Link
              to="/courses"
              className="w-full py-3 rounded-full text-center text-xs font-bold tracking-wider uppercase text-ink bg-canvas hover:bg-primary hover:text-white transition-colors border border-divider block"
            >
              View Certified Syllabus
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 VERIFIED CERTIFICATES & LINEAGE SHOWCASE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-[11px] font-bold tracking-widest uppercase text-gold-dark flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-gold-dark" /> Authentic GMCKS Lineage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink">
              18 Verified International Diplomas
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted max-w-xl">
              Spanning 16+ years of disciplined practice (2010–2026), directly authorized under the World Pranic Healing Foundation (WPHF) and Institute for Inner Studies (IISI), Manila.
            </p>
          </div>
          <Link
            to="/certificates"
            className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-gold-dark transition-colors shrink-0"
          >
            <span>Explore All 18 Diplomas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {CERTIFICATES_DATA.filter(c => ['cert-basic', 'cert-arhatic-level-2', 'cert-kriyashakti'].includes(c.id)).map((cert) => (
            <Link
              key={cert.id}
              to="/certificates"
              className="group rounded-3xl bg-white border border-divider hover:border-gold shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="aspect-[4/3] bg-stone-50 overflow-hidden p-3 flex items-center justify-center relative border-b border-divider">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-xs"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/75 text-white text-[10px] font-bold">
                  {cert.year}
                </span>
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-emerald-700/90 text-white text-[10px] font-semibold">
                  Verified
                </span>
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gold-dark block">
                    {cert.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-ink group-hover:text-primary transition-colors mt-0.5 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-ink-muted mt-1 line-clamp-2 leading-relaxed">
                    {cert.summary}
                  </p>
                </div>
                <div className="pt-3 border-t border-divider flex items-center justify-between text-[11px] text-primary font-semibold">
                  <span>Inspect Credentials</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. THREE STEPS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <span className="text-[11px] font-bold tracking-widest uppercase text-gold-dark">The Science</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink">
            Three Steps to Energetic Balance
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted">
            Non-invasive, no physical contact, no clothes removed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-8 rounded-3xl bg-white border border-divider text-center space-y-3 hover:border-gold hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-canvas border border-divider flex items-center justify-center text-primary font-serif text-lg font-bold shrink-0">
              1
            </div>
            <h3 className="font-serif text-xl font-bold text-ink">Touchless Scan</h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              We sense your aura and 11 chakras with hands to locate where energy is congested or drained.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-divider text-center space-y-3 hover:border-gold hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-canvas border border-divider flex items-center justify-center text-primary font-serif text-lg font-bold shrink-0">
              2
            </div>
            <h3 className="font-serif text-xl font-bold text-ink">Gentle Sweeping</h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Stale, diseased grey energy is swept away from the organs and nervous system, releasing pain at the root.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-divider text-center space-y-3 hover:border-gold hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-canvas border border-divider flex items-center justify-center text-primary font-serif text-lg font-bold shrink-0">
              3
            </div>
            <h3 className="font-serif text-xl font-bold text-ink">Revitalizing Prana</h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Fresh life-force energy is projected into depleted areas, multiplying the body's natural recovery speed.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CLIENT STORIES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[11px] font-bold tracking-widest uppercase text-gold-dark">Client Stories</span>
          <h2 className="font-serif text-3xl font-normal text-ink">Words from Those We Have Healed</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.slice(0, 2).map((t) => (
            <div key={t.id} className="p-8 rounded-3xl bg-white border border-divider shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex gap-1 text-gold-dark">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-serif text-base text-ink italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-3 border-t border-divider">
                <span className="font-bold text-sm text-ink block">{t.client}</span>
                <span className="text-xs text-ink-subtle">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FINAL ELEGANT CALLOUT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-primary text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-gold-light text-xs font-bold tracking-widest uppercase">Begin Today</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight">
              Take Your First Step with Anita
            </h2>
            <p className="text-xs sm:text-sm text-[#EFE8E2] font-light leading-relaxed">
              Have questions? Unsure which option suits you? Schedule a complimentary 15-minute discovery call and let us guide you.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="https://wa.me/919829000000?text=Hello%20Anita%20ji,%20I%20would%20like%20to%20book%20a%20Free%2015-Minute%20Aura%20Discovery%20Call."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-ink bg-gold-light hover:bg-white transition-all shadow-md font-semibold"
            >
              Schedule Free 15-Min Call
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-white border border-white/20 hover:bg-white/10 transition-all"
            >
              Clinic Details & Address
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
