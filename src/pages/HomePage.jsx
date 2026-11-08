import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Check, Award, Feather, PhoneCall, Heart, Star, ShieldCheck, Eye } from 'lucide-react';
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
      tag: "Emotional & Mental Calm",
      title: "Anxiety, Stress & Restful Sleep",
      description: "Cleanse accumulated emotional exhaustion and overactive thoughts from the energy centers without medication.",
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
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      {/* 1. LUXURY MINIMALIST HERO */}
      <section ref={heroRef} className="relative pt-12 pb-16 sm:pt-20 sm:pb-24">
        {/* Subtle Ambient Aura */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-12 left-1/4 w-80 h-80 rounded-full bg-[#B88E3E]/10 blur-3xl animate-float-slow" />
          <div className="absolute top-24 right-1/4 w-96 h-96 rounded-full bg-[#4A1E56]/10 blur-3xl animate-float-reverse" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
          {/* Pill Badge */}
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8E2DC] text-xs font-semibold tracking-wider text-[#4A1E56] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B88E3E]" />
            <span>Grand Master Choa Kok Sui Certified Lineage</span>
          </div>

          {/* Heading */}
          <h1 ref={headingRef} className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1F1A1C] leading-[1.12]">
            Energy Medicine for the <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#4A1E56]">Mind, Body & Soul.</span>
          </h1>

          {/* Subtitle */}
          <p ref={subRef} className="text-base sm:text-lg text-[#5A5255] font-light max-w-2xl mx-auto leading-relaxed">
            Experience gentle, non-touch healing with <strong className="font-semibold text-[#1F1A1C]">Anita Khandelwal</strong>. Let us handhold you from physical discomfort and emotional overwhelm into lasting vitality.
          </p>

          {/* Handholding Hero Quick Actions */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/919829000000?text=Hello%20Anita%20ji,%20I%20am%20new%20to%20Pranic%20Healing%20and%20would%20love%20to%20book%20a%20Free%2015-Minute%20Discovery%20Call."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#2A1234] hover:bg-[#4A1E56] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#DFC082]" />
              <span>Book Free 15-Min Discovery Call</span>
            </a>

            <Link
              to="/twin-hearts-meditation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#1F1A1C] hover:text-[#4A1E56] bg-white border border-[#E8E2DC] hover:border-[#B88E3E] transition-all"
            >
              <Heart className="w-4 h-4 text-[#B88E3E]" />
              <span>Free Sunday Twin Hearts</span>
            </Link>
          </div>

          {/* Clean Trust Strip */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs text-[#5A5255]">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#B88E3E]" /> 100% Non-Touch & Drug-Free
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#B88E3E]" /> 18 Verified GMCKS Diplomas
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#B88E3E]" /> Arhatic Yoga® Level 2 Graduate
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#B88E3E]" /> 16+ Years Experience (Since 2010)
            </span>
          </div>
        </div>
      </section>

      {/* 2. HANDHOLDING: "WHERE SHALL WE BEGIN?" */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8E2DC] shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#B88E3E]">
              Personalized Guidance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1F1A1C]">
              Where shall we begin your healing?
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5255] max-w-lg mx-auto">
              Select your priority below. We will guide you with the exact right first step.
            </p>
          </div>

          {/* 3 Touch Cards with consistent borders and hovers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setSelectedGoal('stress')}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 ${
                selectedGoal === 'stress'
                  ? 'bg-[#2A1234] text-white border-[#2A1234] shadow-md -translate-y-1'
                  : 'bg-[#FAF8F5] text-[#1F1A1C] border-[#E8E2DC] hover:border-[#B88E3E]'
              }`}
            >
              <Feather className={`w-5 h-5 mb-3 ${selectedGoal === 'stress' ? 'text-[#DFC082]' : 'text-[#4A1E56]'}`} />
              <h3 className="font-serif text-lg font-bold">Relieve Stress & Anxiety</h3>
              <p className={`text-xs mt-1 leading-relaxed ${selectedGoal === 'stress' ? 'text-[#EFE8E2]' : 'text-[#5A5255]'}`}>
                Calm restless thoughts, overcome burnout, and enjoy uninterrupted deep sleep.
              </p>
            </button>

            <button
              onClick={() => setSelectedGoal('pain')}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 ${
                selectedGoal === 'pain'
                  ? 'bg-[#2A1234] text-white border-[#2A1234] shadow-md -translate-y-1'
                  : 'bg-[#FAF8F5] text-[#1F1A1C] border-[#E8E2DC] hover:border-[#B88E3E]'
              }`}
            >
              <Sparkles className={`w-5 h-5 mb-3 ${selectedGoal === 'pain' ? 'text-[#DFC082]' : 'text-[#B88E3E]'}`} />
              <h3 className="font-serif text-lg font-bold">Soothe Physical Pain</h3>
              <p className={`text-xs mt-1 leading-relaxed ${selectedGoal === 'pain' ? 'text-[#EFE8E2]' : 'text-[#5A5255]'}`}>
                Target chronic migraines, spine/sciatica stiffness, and post-op recovery.
              </p>
            </button>

            <button
              onClick={() => setSelectedGoal('learn')}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 ${
                selectedGoal === 'learn'
                  ? 'bg-[#2A1234] text-white border-[#2A1234] shadow-md -translate-y-1'
                  : 'bg-[#FAF8F5] text-[#1F1A1C] border-[#E8E2DC] hover:border-[#B88E3E]'
              }`}
            >
              <Award className={`w-5 h-5 mb-3 ${selectedGoal === 'learn' ? 'text-[#DFC082]' : 'text-[#4A1E56]'}`} />
              <h3 className="font-serif text-lg font-bold">Learn the Healing Art</h3>
              <p className={`text-xs mt-1 leading-relaxed ${selectedGoal === 'learn' ? 'text-[#EFE8E2]' : 'text-[#5A5255]'}`}>
                Earn an internationally recognized GMCKS certificate to heal your family.
              </p>
            </button>
          </div>

          {/* Solution Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#E8E2DC] space-y-4 transition-all">
            <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white border border-[#E8E2DC] text-[#4A1E56] inline-block">
              {activeSolution.tag}
            </span>
            <h4 className="font-serif text-2xl font-bold text-[#1F1A1C]">{activeSolution.title}</h4>
            <p className="text-sm text-[#5A5255] leading-relaxed">{activeSolution.description}</p>

            <div className="pt-2 border-t border-[#E8E2DC] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-white border border-[#E8E2DC]">
                <span className="text-[#B88E3E] font-bold block mb-0.5">Recommended Starting Point:</span>
                <span className="text-[#1F1A1C] font-medium">{activeSolution.recommendedStep}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#E8E2DC]">
                <span className="text-[#4A1E56] font-bold block mb-0.5">Next Natural Progression:</span>
                <span className="text-[#1F1A1C] font-medium">{activeSolution.upsellOption}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              {activeSolution.ctaLink.startsWith('http') ? (
                <a
                  href={activeSolution.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#2A1234] hover:bg-[#4A1E56] transition-all shadow-sm"
                >
                  <span>{activeSolution.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFC082]" />
                </a>
              ) : (
                <Link
                  to={activeSolution.ctaLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#2A1234] hover:bg-[#4A1E56] transition-all shadow-sm"
                >
                  <span>{activeSolution.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFC082]" />
                </Link>
              )}
              <span className="text-xs text-[#82787B]">No commitment required • Direct personal guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIMPLE 3-TIER JOURNEY: FREE & 2 UPSELLS (CONSISTENT COLORS) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#B88E3E]">
            A Gentle Progression
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1F1A1C]">
            How We Work Together
          </h2>
          <p className="text-sm text-[#5A5255]">
            We believe in complete transparency. Start with a zero-risk free experience, and advance only when you feel the benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: FREE ENTRY */}
          <div className="p-8 rounded-3xl bg-white border border-[#E8E2DC] shadow-sm flex flex-col justify-between space-y-6 hover:border-[#B88E3E] hover:-translate-y-1.5 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E2DC] text-[#4A1E56] text-[11px] font-bold uppercase tracking-wider">
                  Tier 1 • Free Entry
                </span>
                <span className="font-serif text-lg font-bold text-[#B88E3E]">₹0 / Free</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1F1A1C]">15-Min Energy Discovery Call</h3>
              <p className="text-xs text-[#5A5255] leading-relaxed">
                A private 15-minute phone or Zoom consultation with Anita Khandelwal. She will scan your energy centers, explain where blockages exist, and guide your next steps.
              </p>
              <ul className="space-y-2 text-xs text-[#5A5255] pt-2 border-t border-[#E8E2DC]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#B88E3E] shrink-0" />
                  <span>Personalized chakra & aura scan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#B88E3E] shrink-0" />
                  <span>Clear answers to your symptoms</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#B88E3E] shrink-0" />
                  <span>Zero obligation to purchase</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/919829000000?text=Hello%20Anita%20ji,%20I%20would%20like%20to%20schedule%20my%20Free%2015-Minute%20Aura%20Discovery%20Call."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full text-center text-xs font-bold tracking-wider uppercase text-white bg-[#2A1234] hover:bg-[#4A1E56] transition-colors shadow-sm block"
            >
              Book Free Discovery Call
            </a>
          </div>

          {/* Card 2: CORE UPSELL (HEALING SESSION) */}
          <div className="p-8 rounded-3xl bg-white border-2 border-[#B88E3E] shadow-lg flex flex-col justify-between space-y-6 relative hover:-translate-y-2 transition-all duration-300">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B88E3E] text-white text-[10px] font-bold uppercase tracking-widest shadow">
              Core Recommendation
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E2DC] text-[#4A1E56] text-[11px] font-bold uppercase tracking-wider">
                  Tier 2 • Upsell 1
                </span>
                <span className="font-serif text-2xl font-bold text-[#1F1A1C]">
                  {formatPrice(SESSION_PRICING.singleSession.inr, SESSION_PRICING.singleSession.usd)}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1F1A1C]">Targeted 1-on-1 Healing Session</h3>
              <p className="text-xs text-[#5A5255] leading-relaxed">
                A full 60-minute intensive treatment for your specific ailment (migraine, back pain, anxiety, or insomnia). Available at our Jaipur clinic or globally online.
              </p>
              <ul className="space-y-2 text-xs text-[#5A5255] pt-2 border-t border-[#E8E2DC]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#B88E3E] shrink-0" />
                  <span>Deep bioplasmic sweeping & extraction</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#B88E3E] shrink-0" />
                  <span>Targeted fresh prana energizing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#B88E3E] shrink-0" />
                  <span>Energy hygiene & salt-bath protocol</span>
                </li>
              </ul>
            </div>

            <Link
              to="/healing-sessions"
              className="w-full py-3 rounded-full text-center text-xs font-bold tracking-wider uppercase text-white bg-[#2A1234] hover:bg-[#4A1E56] transition-colors shadow-sm block"
            >
              Explore Healing Sessions
            </Link>
          </div>

          {/* Card 3: HIGHER UPSELL (CERTIFIED WORKSHOP) */}
          <div className="p-8 rounded-3xl bg-white border border-[#E8E2DC] shadow-sm flex flex-col justify-between space-y-6 hover:border-[#B88E3E] hover:-translate-y-1.5 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E2DC] text-[#4A1E56] text-[11px] font-bold uppercase tracking-wider">
                  Tier 3 • Upsell 2
                </span>
                <span className="font-serif text-2xl font-bold text-[#1F1A1C]">
                  {formatPrice(COURSES_DATA[0].fees.inr.fresher, COURSES_DATA[0].fees.usd.fresher)}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1F1A1C]">Certified Basic Pranic Healing (L1)</h3>
              <p className="text-xs text-[#5A5255] leading-relaxed">
                A transformative 2-day weekend certification. Learn to scan auras, heal physical ailments, and take charge of your family’s health. Manila IISI certificate valid in 120+ countries.
              </p>
              <ul className="space-y-2 text-xs text-[#5A5255] pt-2 border-t border-[#E8E2DC]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#B88E3E] shrink-0" />
                  <span>Official textbook & meditation audio</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#B88E3E] shrink-0" />
                  <span>Hands-on practice under Anita</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#B88E3E] shrink-0" />
                  <span>Next Batch: {COURSES_DATA[0].upcomingBatches[0].dates}</span>
                </li>
              </ul>
            </div>

            <Link
              to="/courses"
              className="w-full py-3 rounded-full text-center text-xs font-bold tracking-wider uppercase text-[#1F1A1C] bg-[#FAF8F5] hover:bg-[#2A1234] hover:text-white transition-colors border border-[#E8E2DC] block"
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
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#B88E3E] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B88E3E]" /> Authentic GMCKS Lineage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1F1A1C]">
              18 Verified International Diplomas
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5255] max-w-xl">
              Spanning 16+ years of disciplined practice (2010–2026), directly authorized under the World Pranic Healing Foundation (WPHF) and Institute for Inner Studies (IISI), Manila.
            </p>
          </div>
          <Link
            to="/certificates"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#4A1E56] hover:text-[#B88E3E] transition-colors shrink-0"
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
              className="group rounded-3xl bg-white border border-[#E8E2DC] hover:border-[#B88E3E] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="h-48 bg-stone-100 overflow-hidden p-2 flex items-center justify-center relative border-b border-[#E8E2DC]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/70 text-white text-[10px] font-bold">
                  {cert.year}
                </span>
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-emerald-600/90 text-white text-[10px] font-semibold">
                  Verified
                </span>
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#B88E3E] block">
                    {cert.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#1F1A1C] group-hover:text-[#4A1E56] transition-colors mt-0.5">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#5A5255] mt-1 line-clamp-2">
                    {cert.summary}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E8E2DC] flex items-center justify-between text-[11px] text-[#4A1E56] font-semibold">
                  <span>Inspect Credentials</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. THREE STEPS (CONSISTENT STYLING) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#B88E3E]">The Science</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1F1A1C]">
            Three Steps to Energetic Balance
          </h2>
          <p className="text-xs sm:text-sm text-[#5A5255]">
            Non-invasive, no physical contact, no clothes removed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-[#E8E2DC] text-center space-y-3 hover:border-[#B88E3E] hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF8F5] border border-[#E8E2DC] flex items-center justify-center text-[#4A1E56] font-serif text-lg font-bold">
              1
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1F1A1C]">Touchless Scan</h3>
            <p className="text-xs text-[#5A5255] leading-relaxed">
              We sense your aura and 11 chakras with hands to locate where energy is congested or drained.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E8E2DC] text-center space-y-3 hover:border-[#B88E3E] hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF8F5] border border-[#E8E2DC] flex items-center justify-center text-[#4A1E56] font-serif text-lg font-bold">
              2
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1F1A1C]">Gentle Sweeping</h3>
            <p className="text-xs text-[#5A5255] leading-relaxed">
              Stale, diseased grey energy is swept away from the organs and nervous system, releasing pain at the root.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E8E2DC] text-center space-y-3 hover:border-[#B88E3E] hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF8F5] border border-[#E8E2DC] flex items-center justify-center text-[#4A1E56] font-serif text-lg font-bold">
              3
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1F1A1C]">Revitalizing Prana</h3>
            <p className="text-xs text-[#5A5255] leading-relaxed">
              Fresh life-force energy is projected into depleted areas, multiplying the body's natural recovery speed.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CLIENT STORIES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#B88E3E]">Client Stories</span>
          <h2 className="font-serif text-3xl font-normal text-[#1F1A1C]">Words from Those We Have Healed</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.slice(0, 2).map((t) => (
            <div key={t.id} className="p-8 rounded-3xl bg-white border border-[#E8E2DC] shadow-sm space-y-4">
              <div className="flex gap-1 text-[#B88E3E]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B88E3E]" />
                ))}
              </div>
              <p className="font-serif text-base text-[#1F1A1C] italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="pt-2 border-t border-[#E8E2DC]">
                <span className="font-bold text-sm text-[#1F1A1C] block">{t.client}</span>
                <span className="text-xs text-[#82787B]">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FINAL ELEGANT CALLOUT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-3xl bg-[#2A1234] text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-[#DFC082] text-xs font-bold tracking-widest uppercase">Begin Today</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal">
              Take Your First Step with Anita
            </h2>
            <p className="text-xs sm:text-sm text-[#EFE8E2] font-light leading-relaxed">
              Have questions? Unsure which option suits you? Schedule a complimentary 15-minute discovery call and let us guide you.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919829000000?text=Hello%20Anita%20ji,%20I%20would%20like%20to%20book%20a%20Free%2015-Minute%20Aura%20Discovery%20Call."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#1F1A1C] bg-[#DFC082] hover:bg-white transition-all shadow-md font-semibold"
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
