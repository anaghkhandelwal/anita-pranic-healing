import React, { useState } from 'react';
import { X, Award, ShieldCheck, CheckCircle2, Calendar, MapPin, User, ZoomIn, ZoomOut, ExternalLink, Sparkles } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-divider overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-primary text-white px-6 py-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center text-gold-light shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-light">
                  {certificate.categoryLabel || 'Official Credential Verification'}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                  <CheckCircle2 className="w-3 h-3" /> {certificate.verificationStatus || 'Verified'}
                </span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight mt-0.5">
                {certificate.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 space-y-6 overflow-y-auto flex-1">
          {/* Main Grid: Left = Certificate Image Viewer, Right = Importance & Metadata */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left: Certificate Image & Zoom Control */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-divider bg-stone-100 shadow-inner group">
                <div className={`overflow-auto flex items-center justify-center transition-all ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
                  <img
                    src={certificate.image}
                    alt={certificate.officialCourseName || certificate.title}
                    onClick={() => setIsZoomed(!isZoomed)}
                    className={`w-full object-contain transition-transform duration-300 ${
                      isZoomed ? 'scale-150 py-4' : 'max-h-[460px] hover:scale-[1.02]'
                    }`}
                    loading="lazy"
                  />
                </div>

                {/* Floating Zoom Button */}
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black text-white text-xs font-semibold backdrop-blur-sm flex items-center gap-1.5 shadow-lg transition-all"
                >
                  {isZoomed ? (
                    <>
                      <ZoomOut className="w-3.5 h-3.5" />
                      <span>Reset Zoom</span>
                    </>
                  ) : (
                    <>
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Click to Zoom</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-ink-subtle px-1">
                <span>Certificate Ref: <strong className="text-ink">{certificate.certificateNumber || 'Official IISI/WPHF Registry'}</strong></span>
                <span className="text-emerald-700 font-medium">100% Authentic Lineage Proof</span>
              </div>
            </div>

            {/* Right: Detailed Context, Importance & Relevance */}
            <div className="lg:col-span-6 space-y-4">
              {/* Official Course Name & Level */}
              <div className="p-4 rounded-2xl bg-canvas border border-divider space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-primary block">
                  Official Course Curriculum
                </span>
                <p className="font-serif text-lg font-bold text-ink leading-snug">
                  {certificate.officialCourseName}
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-primary-soft text-primary font-semibold">
                    {certificate.level}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-gold-soft text-gold-dark font-semibold">
                    Year: {certificate.year}
                  </span>
                </div>
              </div>

              {/* Course Importance Section */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
                  <span>Curriculum Science & Esoteric Importance</span>
                </h4>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {certificate.importance}
                </p>
              </div>

              {/* Relevance to Client/Student */}
              <div className="space-y-1.5 p-3.5 rounded-xl bg-primary-soft/50 border border-primary/15">
                <h4 className="text-xs font-bold text-primary flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Why This Matters For Your Healing & Learning</span>
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {certificate.relevance}
                </p>
              </div>

              {/* Verification Details Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-3 rounded-xl bg-canvas border border-divider">
                  <span className="text-ink-subtle block text-[11px]">Accrediting Body</span>
                  <strong className="text-ink block mt-0.5 leading-snug">{certificate.issuer}</strong>
                </div>
                <div className="p-3 rounded-xl bg-canvas border border-divider">
                  <span className="text-ink-subtle block text-[11px]">Completed Location</span>
                  <strong className="text-ink block mt-0.5 leading-snug flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold-dark shrink-0" />
                    <span>{certificate.location}</span>
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-canvas border border-divider">
                  <span className="text-ink-subtle block text-[11px]">Awarded Date</span>
                  <strong className="text-ink block mt-0.5 leading-snug flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-primary shrink-0" />
                    <span>{certificate.date}</span>
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-canvas border border-divider">
                  <span className="text-ink-subtle block text-[11px]">Instructor / Signatory</span>
                  <strong className="text-ink block mt-0.5 leading-snug flex items-center gap-1">
                    <User className="w-3 h-3 text-sage shrink-0" />
                    <span className="truncate">{certificate.instructor || 'GMCKS Acharya'}</span>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-divider flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-ink-subtle text-center sm:text-left">
            Directly certified under Grand Master Choa Kok Sui lineage • Valid in 120+ countries
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-divider text-xs font-semibold text-ink-muted hover:bg-stone-200 transition-colors"
            >
              Close
            </button>
            <a
              href={`https://wa.me/919829000000?text=Hello%20Anita%20ji,%20I%20am%20reviewing%20your%20verified%20${encodeURIComponent(certificate.title)}%20credential%20on%20your%20website%20and%20would%20like%20to%20learn%20more.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-dark transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Inquire With Anita</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
