import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Clock, Calendar, ArrowLeft, ArrowRight, CheckCircle2, 
  HelpCircle, ShieldCheck, Share2, MessageCircle, ChevronDown, Award 
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData.js';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  const [openFaq, setOpenFaq] = useState(0);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="py-12 space-y-16">
      {/* 1. BREADCRUMBS & HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-ink-subtle">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Knowledge Base</Link>
            <span>/</span>
            <span className="text-ink font-semibold truncate max-w-xs">{post.category}</span>
          </nav>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-primary-soft text-primary font-bold text-xs uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-xs text-ink-subtle flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
              <span className="text-xs text-ink-subtle flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Published {post.publishDate}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-light">
              {post.subtitle}
            </p>

            {/* Author Quick Strip */}
            <div className="pt-2 flex items-center gap-3.5 border-t border-divider">
              <img
                src="/images/anita-portrait.jpg"
                alt="Anita Khandelwal"
                className="w-11 h-11 rounded-full object-cover object-top border-2 border-gold shadow-xs shrink-0"
              />
              <div className="text-xs">
                <span className="font-bold text-ink block">{post.author}</span>
                <span className="text-ink-subtle">{post.authorTitle} • 16+ Years GMCKS Practice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN LAYOUT: ARTICLE BODY + STICKY SIDEBAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 space-y-10">
            {/* TL;DR Featured Snippet Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-canvas border border-divider space-y-4 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-gold-dark animate-pulse" />
                <h3 className="font-serif text-lg font-bold text-ink">
                  At a Glance: Key Clinical Insights
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-muted">
                {post.tldr.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Content Rendered */}
            <div 
              className="prose prose-stone max-w-none text-sm sm:text-base leading-relaxed text-ink-muted space-y-6"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Medical Disclaimer Alert */}
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-950">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>Complementary Healing Disclaimer</span>
              </div>
              <p>
                Pranic Healing is an evidence-informed complementary discipline designed to be used in conjunction with licensed medical doctors and orthodox therapies. Certified Pranic Healers do not diagnose medical diseases, prescribe pharmaceuticals, or modify physician treatments.
              </p>
            </div>

            {/* "People Also Ask" FAQ Accordion */}
            {post.faqs && post.faqs.length > 0 && (
              <div id="faqs" className="space-y-6 pt-6 border-t border-divider">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                    Direct Answers
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-ink">
                    Frequently Asked Questions
                  </h3>
                </div>

                <div className="space-y-3">
                  {post.faqs.map((faq, fIdx) => (
                    <div
                      key={fIdx}
                      className="rounded-2xl border border-divider bg-white overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-bold text-ink hover:text-primary transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown 
                          className={`w-4 h-4 text-ink-subtle shrink-0 transition-transform ${
                            openFaq === fIdx ? 'rotate-180 text-primary' : ''
                          }`} 
                        />
                      </button>
                      {openFaq === fIdx && (
                        <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-divider/60 pt-3 bg-canvas/40">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Right Column: Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Table of Contents */}
            <div className="p-6 rounded-3xl bg-white border border-divider shadow-sm space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary block">
                Table of Contents
              </span>
              <nav className="space-y-2 text-xs">
                {post.toc.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.id}`}
                    className="block text-ink-muted hover:text-primary py-1 border-l-2 border-transparent hover:border-primary pl-3 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Author Credibility Card */}
            <div className="p-6 rounded-3xl bg-white border border-divider shadow-sm space-y-4">
              <div className="flex items-center gap-3.5">
                <img
                  src="/images/anita-portrait.jpg"
                  alt="Anita Khandelwal"
                  className="w-14 h-14 rounded-2xl object-cover object-top border-2 border-gold/50 shadow-xs shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="font-serif text-base font-bold text-ink truncate">Anita Khandelwal</h4>
                  <span className="text-[11px] text-gold-dark font-semibold block leading-tight">GMCKS Certified Instructor</span>
                  <span className="text-[10px] text-ink-subtle block mt-0.5">16+ Years Sadhana</span>
                </div>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                Authorized Instructor for Levels 1–3, Arhatic Yoga Level 2 graduate, with 16+ years of continuous healing sadhana. Affiliated with the GMCKS Rajasthan Trust and World Pranic Healing Foundation, Manila.
              </p>
              <Link
                to="/about"
                className="text-xs font-bold text-primary hover:text-gold-dark inline-flex items-center gap-1 group"
              >
                <span>Read Full Biography & Lineage</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Direct Consultation WhatsApp Box */}
            <div className="p-6 rounded-3xl bg-[#2A1234] text-white shadow-xl space-y-4 text-center sm:text-left">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#DFC082] block">
                Personalized Care
              </span>
              <h4 className="font-serif text-xl font-bold">
                Suffering from this condition?
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Connect directly with Anita for a confidential 15-minute aura assessment. Available in-person in Jaipur or online worldwide.
              </p>
              <a
                href={`https://wa.me/919829000000?text=${encodeURIComponent(
                  `Hello Anita ji, I read your article on "${post.title}" and would like to consult with you about my condition.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-white text-[#2A1234] text-xs font-bold uppercase tracking-wider hover:bg-gold-light transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-sage" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* 3. RELATED ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-divider pt-12 space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">Further Reading</span>
            <h3 className="font-serif text-2xl font-bold text-ink">Related Energy Insights</h3>
          </div>
          <Link
            to="/blog"
            className="text-xs font-bold text-primary hover:text-gold-dark inline-flex items-center gap-1"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedPosts.map((rPost) => (
            <Link
              key={rPost.slug}
              to={`/blog/${rPost.slug}`}
              className="p-6 rounded-3xl bg-white border border-divider hover:border-gold/60 shadow-sm hover:shadow-lg transition-all space-y-3 block group"
            >
              <span className="px-2.5 py-0.5 rounded-full bg-primary-soft text-primary font-bold text-[10px] uppercase">
                {rPost.category}
              </span>
              <h4 className="font-serif text-lg font-bold text-ink group-hover:text-primary transition-colors leading-snug">
                {rPost.title}
              </h4>
              <p className="text-xs text-ink-muted line-clamp-2">
                {rPost.subtitle}
              </p>
              <div className="pt-2 flex items-center justify-between text-[11px] text-ink-subtle">
                <span>By {rPost.author}</span>
                <span className="text-primary font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
