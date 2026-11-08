import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Clock, Calendar, ArrowRight, Search, ShieldCheck, Heart } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData.js';

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Physical Health', 'Emotional Wellness', 'Spiritual Science'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.metaDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="space-y-16 py-12">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-soft text-gold-dark text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Energy Science, Research & Healing Wisdom</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
            Pranic Healing Knowledge Sanctuary
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            Thoughtful articles, clinical insights, and scientific explanations of subtle energy medicine by Anita Khandelwal. Demystifying how chakras, bioplasmic auras, and non-touch healing bring lasting physical and emotional relief.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-divider pb-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white text-ink-muted border border-divider hover:bg-stone-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-ink-subtle absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, chakra or symptom..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full border border-divider text-xs focus:outline-none focus:border-primary bg-white text-ink"
            />
          </div>
        </div>
      </section>

      {/* 2. FEATURED POST HERO CARD */}
      {selectedCategory === 'All' && !searchQuery && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="group block p-8 sm:p-12 rounded-3xl bg-white border border-divider hover:border-gold/60 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-primary-soft text-primary font-bold text-xs">
                    {featuredPost.category}
                  </span>
                  <span className="text-xs text-ink-subtle flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                  </span>
                  <span className="text-xs text-ink-subtle flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {featuredPost.publishDate}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-ink group-hover:text-primary transition-colors leading-snug">
                  {featuredPost.title}
                </h2>

                <p className="text-sm sm:text-base text-ink-muted leading-relaxed line-clamp-3">
                  {featuredPost.subtitle}
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <span className="text-xs font-bold text-primary flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <span>Read In-Depth Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-canvas border border-divider space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                  Key Takeaways Inside:
                </span>
                <ul className="space-y-2 text-xs text-ink-muted">
                  {featuredPost.tldr.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-dark mt-1.5 shrink-0" />
                      <span className="line-clamp-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* 3. ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="p-7 rounded-3xl bg-white border border-divider hover:border-gold/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-soft text-primary font-bold text-[11px]">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-ink-subtle flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-ink group-hover:text-primary transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-ink-muted mt-2 leading-relaxed line-clamp-3">
                    {post.subtitle}
                  </p>
                </div>

                {/* TLDR preview box */}
                <div className="p-3.5 rounded-xl bg-canvas border border-divider text-xs text-ink-muted space-y-1.5">
                  <span className="text-[10px] font-bold uppercase text-ink-subtle block">Core Insight:</span>
                  <p className="text-[11px] line-clamp-2 leading-snug text-ink">
                    {post.tldr[0]}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-divider flex items-center justify-between">
                <span className="text-[11px] text-ink-subtle">
                  By {post.author}
                </span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-gold-dark transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <BookOpen className="w-10 h-10 text-ink-subtle mx-auto" />
            <h3 className="font-serif text-xl font-bold text-ink">No articles found</h3>
            <p className="text-xs text-ink-muted">Try adjusting your search query or category filter.</p>
          </div>
        )}
      </section>

      {/* 4. CLINICAL INTEGRITY CALLOUT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-canvas border border-divider flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-white border border-divider flex items-center justify-center text-primary shrink-0 shadow-sm">
            <ShieldCheck className="w-7 h-7 text-gold-dark" />
          </div>
          <div className="space-y-1 text-center sm:text-left flex-1">
            <h4 className="font-serif text-lg font-bold text-ink">
              Our Editorial & Medical Policy
            </h4>
            <p className="text-xs text-ink-muted leading-relaxed">
              All articles are authored by Anita Khandelwal in strict alignment with Grand Master Choa Kok Sui’s curriculum. Pranic Healing is a non-touch, drug-free complementary therapy that works alongside orthodox medical treatment.
            </p>
          </div>
          <a
            href="https://wa.me/919829000000?text=Hello%20Anita%20ji,%20I%20read%20your%20articles%20and%20have%20a%20question%20about%20my%20condition."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-bold whitespace-nowrap hover:bg-primary-dark transition-all shadow-sm"
          >
            Ask Anita a Question
          </a>
        </div>
      </section>
    </div>
  );
}
