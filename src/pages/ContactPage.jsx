import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, ShieldCheck, Sparkles, Send } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNum = '919829000000';
    const text = `Namaste Anita ji, My name is ${name} (${phone}, ${email}).
Message: ${message}`;
    const url = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-20 py-12">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Get In Touch</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
            Connect with Anita Khandelwal
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            Whether you have questions about an acute physical ailment, wish to book a distance healing session, or want to enroll in an upcoming certified workshop, we are here to guide you with care and confidentiality.
          </p>
        </div>
      </section>

      {/* 2. Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-divider shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-ink">Clinic & Sanctuary</h3>

              <div className="space-y-4 text-xs sm:text-sm text-ink-muted">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ink block">Jaipur Healing Center</strong>
                    <span>Civil Lines / C-Scheme area, Jaipur, Rajasthan 302001, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ink block">Consultation Hours</strong>
                    <span>Monday to Saturday: 10:00 AM – 6:30 PM IST</span>
                    <span className="text-xs text-ink-subtle block">Online distance healing available across international time zones</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-sage shrink-0" />
                  <div>
                    <strong className="text-ink block">Direct Line</strong>
                    <span>+91 98290 00000</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <strong className="text-ink block">Email Correspondence</strong>
                    <span>anita@pranichealingjaipur.in</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919829000000?text=Hello%20Anita%20ji,%20I%20would%20like%20to%20connect%20regarding%20Pranic%20Healing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-sage text-white text-xs font-semibold hover:bg-sage-light hover:text-stone-900 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-divider shadow-xl space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-ink">Send a Confidential Message</h3>
                <p className="text-xs text-ink-muted mt-1">
                  We treat all health and personal inquiries with strict confidentiality.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-ink-muted mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Meera Singhania"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-divider focus:outline-none focus:border-primary text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-ink-muted mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. meera@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-divider focus:outline-none focus:border-primary text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-ink-muted mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98290 12345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-divider focus:outline-none focus:border-primary text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-ink-muted mb-1">Your Message or Query *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the condition or course you are interested in..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-divider focus:outline-none focus:border-primary text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-bold text-white bg-primary hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-md text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
