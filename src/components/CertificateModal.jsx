import React, { useState, useEffect } from 'react';
import { X, Award, ShieldCheck, CheckCircle2, Calendar, MapPin, User, ZoomIn, ZoomOut, ExternalLink, Sparkles } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!certificate) return null;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-divider overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-primary text-white px-4 py-3.5 sm:px-6 sm:py-5 flex items-center justify-between shrink-0 gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-white/15 flex items-center justify-center text-gold-light shrink-0">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-light truncate">
                  {certificate.categoryLabel || 'Official Verification'}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold shrink-0">
                  <CheckCircle2 className="w-3 h-3" /> {certificate.verificationStatus || 'Verified'}
                </span>
              </div>
              <h3 id="certificate-modal-title" className="font-serif text-base sm:text-xl font-bold leading-tight mt-0.5 truncate">
                {certificate.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-7 space-y-5 sm:space-y-6 overflow-y-auto flex-1">
          {/* Main Grid: Left = Certificate Image Viewer, Right = Importance & Metadata */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left: Certificate Image & Zoom Control */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-divider bg-stone-100 shadow-inner group">
                <div className={`overflow-auto max-h-[380px] sm:max-h-[480px] flex items-center justify-center transition-all ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
                  <img
                    src={certificate.image}
                    alt={certificate.officialCourseName || certificate.title}
                    onClick={() => setIsZoomed(!isZoomed)}
                    className={`object-contain transition-all duration-300 ${
                      isZoomed ? 'w-[150%] max-w-none py-4' : 'w-full max-h-[360px] sm:max-h-[460px] hover:scale-[1.01]'
                    }`}
                    loading="lazy"
                  />
                </div>

                {/* Zoom Helper Button */}
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/75 text-white text-[11px] font-semibold flex items-center gap-1.5 backdrop-blur-sm hover:bg-black transition-colors"
                >
                  {isZoomed ? (
                    <>
                      <ZoomOut className="w-3.5 h-3.5 text-gold-light" />
                      <span>Reset Zoom</span>
                    </>
                  ) : (
                    <>
                      <ZoomIn className="w-3.5 h-3.5 text-gold-light" />
                      <span>Click to Zoom</span>
                    </>
                  )}
                </button>
              </div>

              {/* Seal & Issuer Tag */}
              <div className="p-3.5 rounded-2xl bg-canvas border border-divider flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-ink font-semibold">
                  <ShieldCheck className="w-4 h-4 text-gold-dark shrink-0" />
                  <span className="truncate">{certificate.issuer}</span>
                </div>
                <span className="text-ink-subtle font-medium shrink-0">Year: {certificate.year}</span>
              </div>
            </div>

            {/* Right: Spiritual Significance & Client Benefit */}
            <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm">
              {/* Course Title & Level */}
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-dark block">
                  Official GMCKS Curriculum
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-ink mt-0.5">
                  {certificate.officialCourseName || certificate.title}
                </h4>
              </div>

              {/* Curriculum Importance Box */}
              <div className="p-4 rounded-2xl bg-canvas border border-divider space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-primary block">
                  What This Masterclass Represents
                </span>
                <p className="text-ink-muted leading-relaxed">
                  {certificate.curriculumImportance}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2.5 py-1 rounded-full bg-primary-soft text-primary font-semibold">
                    Category: {certificate.categoryLabel}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-gold-soft text-gold-dark font-semibold">
                    Authorized Lineage
                  </span>
                </div>
              </div>

              {/* Why It Matters for Clients */}
              <div className="p-4 rounded-2xl bg-gold-soft/50 border border-gold/30 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-gold-dark text-xs uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
                  <span>Client Benefit & Treatment Efficacy</span>
                </div>
                <p className="text-ink leading-relaxed font-medium">
                  {certificate.clientRelevance}
                </p>
              </div>

              {/* Authentic Archival Details */}
              <div className="space-y-1.5 p-3.5 rounded-xl bg-primary-soft/50 border border-primary/15">
                <h4 className="text-xs font-bold text-primary flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Archival Verification & Lineage Record</span>
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {certificate.archivalNotes}
                </p>
              </div>

              {/* Metadata Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-canvas border border-divider">
                  <span className="text-ink-subtle block text-[11px]">Course Code</span>
                  <strong className="text-ink block mt-0.5">{certificate.code}</strong>
                </div>
                <div className="p-3 rounded-xl bg-canvas border border-divider">
                  <span className="text-ink-subtle block text-[11px]">Training Location</span>
                  <strong className="text-ink block mt-0.5 leading-snug flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold-dark shrink-0" />
                    <span className="truncate">{certificate.location}</span>
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-canvas border border-divider">
                  <span className="text-ink-subtle block text-[11px]">Certification Date</span>
                  <strong className="text-ink block mt-0.5 flex items-center gap-1">
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
        <div className="p-3.5 sm:p-5 bg-stone-50 border-t border-divider flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-[11px] sm:text-xs text-ink-subtle text-center sm:text-left">
            Directly certified under Grand Master Choa Kok Sui lineage • Valid in 120+ countries
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-divider text-xs font-semibold text-ink-muted hover:bg-stone-200 transition-colors text-center"
            >
              Close
            </button>
            <a
              href={`https://wa.me/919829000000?text=Hello%20Anita%20ji,%20I%20am%20reviewing%20your%20verified%20${encodeURIComponent(certificate.title)}%20credential%20on%20your%20website%20and%20would%20like%20to%20learn%20more.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-dark transition-all shadow-sm flex items-center justify-center gap-1.5 text-center"
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
