import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import { CurrencyProvider } from './components/CurrencyContext.jsx';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import HealingSessionsPage from './pages/HealingSessionsPage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';
import TwinHeartsMeditationPage from './pages/TwinHeartsMeditationPage.jsx';
import CertificatesPage from './pages/CertificatesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import BlogListingPage from './pages/BlogListingPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function AppRoutes() {
  return (
    <CurrencyProvider>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-canvas text-ink">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/healing-sessions" element={<HealingSessionsPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/twin-hearts-meditation" element={<TwinHeartsMeditationPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/blog" element={<BlogListingPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </CurrencyProvider>
  );
}
