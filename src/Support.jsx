import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-indigo-400 transition-colors"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-400 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function Support() {
  const [formStatus, setFormStatus] = useState(null);
  const companyName = "Star Flux Digital LLC";
  const email = "contact@starflux.digital";

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus(null), 5000);
    }, 1500);
  };

  const faqs = [
    {
      question: "How do I report a bug or an issue?",
      answer: "Please send an email to contact@starflux.digital with your device model, OS version, and a detailed description of the issue. Screenshots are highly appreciated!"
    },
    {
      question: "How can I request a refund?",
      answer: "For iOS users, please request refunds directly through the Apple App Store. For Android users, please contact Google Play Support. If you have specific issues with in-app purchases, email us with your transaction ID."
    },
    {
      question: "Where can I find your Privacy Policy?",
      answer: <>You can view our Privacy Policy <Link to="/privacy" className="text-indigo-400 hover:underline">here</Link>.</>
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-gray-300 font-inter selection:bg-indigo-500/30 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0A0A0C]/70 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div className="text-white font-space font-bold tracking-tight">Support Center</div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-4">
              <HelpCircle size={14} />
              Help & Support
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-space tracking-tight">
              We are here to <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">help.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Whether you have a question about our apps, need technical assistance, or want to provide feedback, the Star Flux Digital team is ready to assist you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
              <p className="text-sm text-gray-500 mb-6">General inquiries & technical support</p>
              <a href={`mailto:${email}`} className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors break-all">
                {email}
              </a>
              <p className="text-[10px] text-gray-600 mt-4 italic">Response within 24-48 hours</p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-sm text-gray-500 mb-6">For business inquiries only</p>
              <a href="tel:+13464050803" className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors">
                +1 (346) 405-0803
              </a>
              <p className="text-[10px] text-gray-600 mt-4 italic">Location: United States</p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mailing Address</h3>
              <p className="text-sm text-gray-500 mb-6">Our headquarters</p>
              <div className="text-gray-400 text-sm leading-relaxed">
                Star Flux Digital LLC<br />
                30 N Gould St Ste R<br />
                Sheridan, WY 82801, USA
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 font-space">Frequently Asked Questions</h2>
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} {...faq} />
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-2 font-space">Send a Message</h2>
              <p className="text-sm text-gray-500 mb-8">Direct line to our developer team</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Your Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Subject</label>
                  <select className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-colors appearance-none">
                    <option>General Inquiry</option>
                    <option>Bug Report</option>
                    <option>Feedback</option>
                    <option>Business Opportunity</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Message</label>
                  <textarea 
                    required
                    rows="4"
                    placeholder="Describe your issue..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button 
                  disabled={formStatus === 'sending'}
                  type="submit" 
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${
                    formStatus === 'success' 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                  }`}
                >
                  {formStatus === 'sending' ? (
                    'Sending...'
                  ) : formStatus === 'success' ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Submit Request
                      <Send size={18} />
                    </>
                  )}
                </button>
                
                {formStatus === 'success' && (
                  <p className="text-center text-xs text-emerald-400 animate-pulse">
                    Thank you! We'll get back to you soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 py-12 bg-[#0A0A0C]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
             {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full opacity-80" />
                </div>
                <span className="text-lg font-bold text-white font-space">Star Flux Digital</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Crafting the unseen logic that powers the visible world.
              </p>
            </div>

            {/* Mailing Address */}
            <div className="md:text-right">
              <h4 className="text-white font-bold mb-4">Mailing Address</h4>
               <p className="text-gray-400 text-sm leading-relaxed">
                Star Flux Digital LLC<br />
                30 N Gould St Ste R<br />
                Sheridan, WY 82801, USA
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              &copy; 2026 {companyName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
