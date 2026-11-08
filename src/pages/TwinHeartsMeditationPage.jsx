import React, { useState } from 'react';
import { Sparkles, Heart, Brain, ShieldCheck, CheckCircle2, MessageCircle, Calendar, Clock, Video } from 'lucide-react';

export default function TwinHeartsMeditationPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNum = '919829000000';
    const text = `Namaste Anita ji, My name is ${name}. I would like to join the free weekly Meditation on Twin Hearts session. Please send me the Zoom link. (Phone: ${phone})`;
    const url = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 py-12">
      {/* 1. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-soft text-sage text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 fill-sage" />
            <span>Free Community Blessing</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
            Meditation on Twin Hearts
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            An advanced spiritual technique introduced by Grand Master Choa Kok Sui to flush out deep stress, negative emotional energy, and illuminate the consciousness through divine love and peace.
          </p>
        </div>
      </section>

      {/* 2. What are the Twin Hearts? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-sm sm:text-base text-ink-muted leading-relaxed">
            <h2 className="font-serif text-3xl font-bold text-ink">
              The Two Centers of Divine Love
            </h2>
            <p>
              The "Twin Hearts" refer to the <strong className="text-ink">Heart Chakra</strong> (the center of human emotional love, compassion, and refined feelings) and the <strong className="text-ink">Crown Chakra</strong> (the center of divine spiritual love and cosmic oneness).
            </p>
            <p>
              When both chakras are systematically activated and blessed, tremendous amounts of divine spiritual energy flood down into the crown and bioplasmic body. This divine prana flushes out dirty, grey stress energies, negative thoughts, anxiety, and depressive blockages.
            </p>
            <p>
              Practicing this meditation acts like a spiritual shower, leaving you feeling profoundly peaceful, mentally alert, and emotionally renewed.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-divider shadow-xl space-y-6">
            <h3 className="font-serif text-xl font-bold text-ink">Scientifically Documented Benefits</h3>
            <div className="space-y-3 text-xs text-ink-muted">
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ink block">Hemispheric Brain Synchronization</strong>
                  <span>Clinical EEG studies demonstrate rapid synchronization between left and right brain hemispheres.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ink block">Cardiovascular & Cortisol Balance</strong>
                  <span>Dramatic reduction in serum cortisol (stress hormone) and stabilization of resting heart rate.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ink block">Aura Expansion & Vitality</strong>
                  <span>Kirlian photography documents visible expansion and purification of the biofield after just 21 minutes.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Free Sunday Batch Schedule & Join Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-divider shadow-2xl space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-canvas border border-divider shadow-xs mx-auto">
              <img
                src="/images/anita-headshot.jpg"
                alt="Anita Khandelwal"
                className="w-10 h-10 rounded-full object-cover object-center border-2 border-gold shrink-0"
              />
              <div className="text-left">
                <span className="font-serif text-xs font-bold text-ink block leading-tight">Guided by Anita Khandelwal</span>
                <span className="text-[10px] text-gold-dark font-semibold block">Certified GMCKS Instructor • 16+ Yrs Sadhana</span>
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-sage block">Join Us Every Week</span>
            <h2 className="font-serif text-3xl font-bold text-ink">Sunday Morning Community Meditation</h2>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-ink-muted pt-2">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-canvas border border-divider">
                <Calendar className="w-3.5 h-3.5 text-primary" /> Every Sunday
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-canvas border border-divider">
                <Clock className="w-3.5 h-3.5 text-gold-dark" /> 10:00 AM – 10:45 AM IST
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-canvas border border-divider">
                <Video className="w-3.5 h-3.5 text-sage" /> Live on Zoom (Free)
              </span>
            </div>
          </div>

          {submitted ? (
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-sage-soft border border-sage/30 text-center space-y-3 animate-fadeIn">
              <CheckCircle2 className="w-10 h-10 text-sage mx-auto" />
              <h3 className="font-serif text-lg font-bold text-ink">Zoom Link Request Sent!</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Thank you, {name || 'dear seeker'}. WhatsApp has opened with your meditation registration details. Anita's team will verify your entry and send the direct Zoom link for Sunday morning.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-primary underline hover:text-gold-dark pt-1 inline-block"
              >
                Register another family member
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-ink mb-1 text-xs">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Suman Agarwal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-divider focus:outline-none focus:border-sage text-base sm:text-xs"
                />
              </div>
              <div>
                <label className="block font-semibold text-ink mb-1 text-xs">WhatsApp Number (For Zoom Link) *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98290 12345"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-divider focus:outline-none focus:border-sage text-base sm:text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full font-bold text-white bg-sage hover:bg-sage-light hover:text-stone-900 transition-colors flex items-center justify-center gap-2 shadow-md text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Free Zoom Access on WhatsApp</span>
              </button>
            </form>
          )}

          <p className="text-[11px] text-center text-ink-subtle">
            *Note: As prescribed by Grand Master Choa Kok Sui, participants must be at least 16 years old. Not recommended for pregnant women in their third trimester or persons with severe heart ailments.
          </p>
        </div>
      </section>
    </div>
  );
}
