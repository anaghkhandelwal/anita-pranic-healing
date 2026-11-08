import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-gold-light">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6c1.5 2.5 3 3.5 3 6s-1.5 3.5-3 6c-1.5-2.5-3-3.5-3-6s1.5-3.5 3-6z" fill="#DFC082" fillOpacity="0.4" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block">Anita Khandelwal</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gold block">
                  Certified Healer & Instructor
                </span>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Dedicated to relieving physical, emotional, and psychological suffering through the authentic teachings of Grand Master Choa Kok Sui (GMCKS). Certified under the World Pranic Healing Foundation, Manila.
            </p>
            <div className="flex items-center gap-2 text-xs text-gold-light">
              <ShieldCheck className="w-4 h-4" />
              <span>GMCKS Rajasthan Trust Affiliated</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-serif text-lg font-semibold tracking-wide">Quick Exploration</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">About Anita Khandelwal</Link>
              </li>
              <li>
                <Link to="/healing-sessions" className="hover:text-gold transition-colors">Private Healing Sessions (In-Person & Distance)</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-gold transition-colors">GMCKS Certified Courses (Levels 1–3)</Link>
              </li>
              <li>
                <Link to="/twin-hearts-meditation" className="hover:text-gold transition-colors">Meditation on Twin Hearts (Free)</Link>
              </li>
              <li>
                <Link to="/certificates" className="hover:text-gold transition-colors">Verified Certificates & Lineage</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gold transition-colors">Energy Articles & Research</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">Contact & Clinic Location</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Ailments Treated */}
          <div className="space-y-3">
            <h4 className="text-white font-serif text-lg font-semibold tracking-wide">Ailments Treated</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>• Chronic Migraines & Headaches</li>
              <li>• Sciatica, Spine & Lower Back Pain</li>
              <li>• Anxiety, Panic & Stress Burnout</li>
              <li>• Chronic Insomnia & Sleep Disorders</li>
              <li>• Post-Surgical & Wound Healing</li>
              <li>• Energetic Cord Cutting & Relationships</li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-white font-serif text-lg font-semibold tracking-wide">Connect & Clinic</h4>
            <div className="space-y-2 text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Jaipur, Rajasthan, India (Serving Global Inquiries Online)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+91 98290 00000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>anita@pranichealingjaipur.in</span>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://wa.me/919829000000?text=Hello%20Anita%20ji,%20I%20would%20like%20to%20know%20more%20about%20Pranic%20Healing."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage text-white text-xs font-semibold hover:bg-sage-light hover:text-stone-900 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Direct WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Medical & Legal Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-stone-950/70 border border-stone-800 text-xs text-stone-400 leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-semibold text-stone-300">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>Important Medical & Legal Disclaimer</span>
          </div>
          <p>
            Pranic Healing® is a non-touch, complementary energy healing modality designed to work alongside conventional medical treatments, not replace them. Certified Pranic Healers do not make medical diagnoses, prescribe drugs, or interfere with orthodox therapies prescribed by licensed medical practitioners. If an ailment is severe or persistent, please immediately seek professional medical evaluation.
          </p>
          <p className="text-[11px] text-stone-500">
            GMCKS Pranic Healing®, Arhatic Yoga®, and Meditation on Twin Hearts® are registered trademarks of the Institute for Inner Studies, Inc. and World Pranic Healing Foundation, Inc., Manila.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Anita Khandelwal Pranic Healing. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with reverence & devotion <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for human healing.
          </p>
        </div>
      </div>
    </footer>
  );
}
