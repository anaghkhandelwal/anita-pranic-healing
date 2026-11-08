import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, Calendar, Clock, MapPin, Users, ArrowRight, MessageCircle, Sparkles, Feather, Shield, Home, Compass } from 'lucide-react';
import { COURSES_DATA, BUNDLE_PROGRAM } from '../data/coursesData.js';
import { SPECIALIZED_OFFERINGS } from '../data/specializedOfferingsData.js';
import { useCurrency } from '../components/CurrencyContext.jsx';

export default function CoursesPage() {
  const { formatPrice } = useCurrency();
  const [selectedCourse, setSelectedCourse] = useState(COURSES_DATA[0].id);
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [studentCity, setStudentCity] = useState('');
  const [isReviewer, setIsReviewer] = useState(false);

  const activeCourse = COURSES_DATA.find(c => c.id === selectedCourse) || COURSES_DATA[0];

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    const phone = '919829000000';
    const text = `Namaste Anita ji, My name is ${studentName || 'Student'} from ${studentCity || 'Jaipur'}.
I would like to register for the upcoming *${activeCourse.title}* workshop as a *${isReviewer ? 'Reviewer' : 'Fresher'}*.
My contact number is: ${studentPhone}. Please share the registration details.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-20 py-12">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Official GMCKS Certification Lineage</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
            GMCKS Pranic Healing Certified Courses
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            Learn the exact scientific energy protocols developed by Grand Master Choa Kok Sui. Anita Khandelwal is an authorized instructor for the complete three-tier foundational progression. All certificates are issued directly by the World Pranic Healing Foundation, Manila, and are valid in 120+ countries.
          </p>
        </div>
      </section>

      {/* 2. Course Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className="p-8 rounded-3xl bg-white border border-divider hover:border-primary/50 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-primary-soft text-primary font-bold text-xs">
                    {course.level}
                  </span>
                  <span className="text-xs font-semibold text-gold-dark">{course.duration}</span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-ink">{course.title}</h3>
                  <p className="text-xs text-ink-muted mt-1 italic">{course.tagline}</p>
                </div>

                <div className="py-2 border-y border-divider">
                  <span className="text-xs text-ink-subtle block">Workshop Investment:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-2xl font-bold text-primary">
                      {formatPrice(course.fees.inr.fresher, course.fees.usd.fresher)}
                    </span>
                    <span className="text-xs text-ink-muted">
                      (Reviewers: {formatPrice(course.fees.inr.reviewer, course.fees.usd.reviewer)})
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-ink-muted">
                  <span className="font-semibold text-ink block">Curriculum Highlights:</span>
                  {course.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sage shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-canvas border border-divider text-xs text-ink-muted space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-ink">
                    <Award className="w-3.5 h-3.5 text-primary" />
                    <span>Global Certification</span>
                  </div>
                  <p className="text-[11px]">{course.certificateIssuer}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-divider space-y-3">
                <div className="text-xs text-ink-subtle space-y-1">
                  <div className="flex items-center gap-1.5 text-ink font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>Next Batch: {course.upcomingBatches[0].dates}</span>
                  </div>
                  <span className="text-sage text-[11px] block">
                    Only {course.upcomingBatches[0].seatsLeft} seats remaining
                  </span>
                </div>

                <a
                  href="#enrollment-form"
                  onClick={() => setSelectedCourse(course.id)}
                  className="block w-full py-2.5 text-center rounded-xl font-semibold text-white bg-primary hover:bg-primary-dark text-xs transition-colors shadow-sm"
                >
                  Reserve Seat for {course.level}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Three-Pillar Healer Mastery Pathway Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-spiritual text-white shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3.5 py-1.5 rounded-full bg-gold/20 text-gold-light text-xs font-bold uppercase tracking-wider">
                Full Practitioner Progression
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                {BUNDLE_PROGRAM.title}
              </h2>
              <p className="text-sm text-stone-200 leading-relaxed max-w-2xl">
                Become a fully empowered, confident energetic healer. Take all three foundational levels (Basic, Advanced, and Psychotherapy) under Anita Khandelwal's direct mentorship.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-300 pt-2">
                {BUNDLE_PROGRAM.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-light shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right space-y-4 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <span className="text-xs text-stone-300 block">Complete Healer Bundle:</span>
              <div className="font-serif text-4xl font-bold text-gold-light">
                {formatPrice(BUNDLE_PROGRAM.bundlePriceINR, BUNDLE_PROGRAM.bundlePriceUSD)}
              </div>
              <span className="text-xs text-stone-400 block line-through">
                Individual: {formatPrice(BUNDLE_PROGRAM.regularPriceINR, BUNDLE_PROGRAM.regularPriceUSD)}
              </span>
              <a
                href="#enrollment-form"
                onClick={() => setSelectedCourse('basic-pranic-healing')}
                className="inline-block w-full py-3 rounded-full bg-gold text-stone-900 font-bold text-xs uppercase tracking-wider hover:bg-gold-light transition-all shadow-md"
              >
                Inquire for Full Bundle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 ADVANCED & SPECIALIZED MASTERCLASSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-soft text-gold-dark text-xs font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>Next Steps on Your Healer's Journey</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
              Advanced & Specialized Masterclasses
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              Once you have completed Basic Pranic Healing, unlock specialized branches of Grand Master Choa Kok Sui’s system. Anita provides mentoring and cohort scheduling across:
            </p>
          </div>
          <span className="text-xs text-ink-subtle hidden md:block">
            Prerequisites Apply • Certified Manila Diplomas
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALIZED_OFFERINGS.map((modality) => (
            <div
              key={modality.id}
              className="p-7 rounded-3xl bg-white border border-divider hover:border-gold/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-soft text-primary font-bold text-[10px] uppercase tracking-wider">
                    {modality.badge}
                  </span>
                  <span className="text-xs font-semibold text-gold-dark">Specialized Module</span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-ink">{modality.title}</h3>
                  <p className="text-xs text-ink-muted mt-1 leading-relaxed">{modality.tagline}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-canvas border border-divider text-xs space-y-2">
                  <span className="text-[10px] font-bold uppercase text-ink tracking-wider block">Mastery Highlights:</span>
                  <p className="text-[11px] text-ink-muted leading-relaxed">
                    {modality.description}
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-ink-subtle">
                  <span className="font-semibold text-ink text-[11px] block">Eligibility / Prerequisite:</span>
                  <p className="text-[11px] text-primary">Requires Basic Pranic Healing (Level 1) completion</p>
                </div>
              </div>

              <div className="pt-3 border-t border-divider">
                <a
                  href={`https://wa.me/919829000000?text=${encodeURIComponent(
                    `Hello Anita ji, I am interested in learning more about the upcoming batch/mentorship for *${modality.title}*. Could you please share the eligibility and schedule?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white text-xs font-bold transition-all"
                >
                  <span>Inquire for {modality.title.split(' ')[0]} Masterclass</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Enrollment Registration Form */}
      <section id="enrollment-form" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-divider shadow-xl p-8 sm:p-10 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-serif text-2xl font-bold text-ink">Course Registration & Seat Hold</h3>
            <p className="text-xs sm:text-sm text-ink-muted">
              Secure your place in the upcoming certified training batch in Jaipur or online.
            </p>
          </div>

          <form onSubmit={handleEnrollSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-ink mb-1">Select Workshop:</label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-divider text-xs focus:outline-none focus:border-primary bg-white"
              >
                {COURSES_DATA.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.level}: {c.title} ({c.upcomingBatches[0].dates})
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-4 py-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="studentType"
                  checked={!isReviewer}
                  onChange={() => setIsReviewer(false)}
                  className="text-primary"
                />
                <span className="text-xs font-semibold text-ink">New Student (Fresher)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="studentType"
                  checked={isReviewer}
                  onChange={() => setIsReviewer(true)}
                  className="text-primary"
                />
                <span className="text-xs font-semibold text-ink">Review Student (50% Fee)</span>
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-ink-muted mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-divider focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block font-semibold text-ink-muted mb-1">WhatsApp / Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98290 12345"
                  value={studentPhone}
                  onChange={(e) => setStudentPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-divider focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-ink-muted mb-1">Your City / Country *</label>
              <input
                type="text"
                required
                placeholder="e.g. Jaipur, Delhi, London, or Dubai"
                value={studentCity}
                onChange={(e) => setStudentCity(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-divider focus:outline-none focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full font-bold text-white bg-sage hover:bg-sage-light hover:text-stone-900 transition-colors flex items-center justify-center gap-2 shadow-md text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp to Confirm Enrollment</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
