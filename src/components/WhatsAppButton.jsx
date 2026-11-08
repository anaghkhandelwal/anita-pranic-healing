import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Healing Session');
  const [fullName, setFullName] = useState('');
  const [ailment, setAilment] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    const phone = '919829000000';
    let text = `Namaste Anita ji, My name is ${fullName || 'a seeker'}. I am reaching out regarding *${selectedTopic}*`;
    if (ailment) {
      text += ` for: ${ailment}.`;
    } else {
      text += `. Could you please share the next available appointment / workshop slot?`;
    }
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40">
      {/* Quick Intake Popover */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-1.5rem)] max-w-sm sm:w-96 bg-white rounded-2xl shadow-2xl border border-divider overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-primary text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-gold-light">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm">Consult Anita Khandelwal</h4>
                <p className="text-[11px] text-primary-soft">Typically replies within a few hours</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSend} className="p-4 space-y-3 text-xs">
            <div>
              <label className="block font-semibold text-ink-muted mb-1">I am inquiring about:</label>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  'Healing Session',
                  'Basic Course (L1)',
                  'Advanced Course (L2)',
                  'Pranic Psychotherapy (L3)',
                  'Free Twin Hearts',
                  'Distance Healing'
                ].map((topic) => (
                  <button
                    type="button"
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-2 py-1.5 rounded-lg border text-left transition-all ${
                      selectedTopic === topic
                        ? 'border-primary bg-primary-soft text-primary font-bold'
                        : 'border-divider text-ink-muted hover:border-primary/40'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-semibold text-ink-muted mb-1">Your Name</label>
              <input
                type="text"
                placeholder="e.g. Suman Sharma"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-divider focus:outline-none focus:border-primary text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-ink-muted mb-1">Brief Concern or Location</label>
              <input
                type="text"
                placeholder="e.g. Migraine relief, Jaipur or Online Zoom"
                value={ailment}
                onChange={(e) => setAilment(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-divider focus:outline-none focus:border-primary text-xs"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl font-semibold text-white bg-sage hover:bg-sage-light hover:text-stone-900 transition-colors flex items-center justify-center gap-1.5 shadow-md"
            >
              <Send className="w-3.5 h-3.5" /> Start WhatsApp Chat
            </button>
          </form>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-sage text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all group"
        aria-label="Chat with Anita Khandelwal on WhatsApp"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gold-light"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="font-semibold text-sm hidden sm:inline">Ask Anita ji</span>
      </button>
    </div>
  );
}
