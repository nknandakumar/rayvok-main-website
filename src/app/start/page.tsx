"use client";

import { useState, useEffect } from "react";

export default function StartPage() {
  const [activeView, setActiveView] = useState<"form" | "cal">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Modal state
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if the modal has already been shown to the user in a previous visit/session
    const hasModalBeenShown = localStorage.getItem("rayvok_contact_modal_shown");
    if (hasModalBeenShown === "true") {
      return;
    }

    // Show modal after 3 seconds of page load
    const timer = setTimeout(() => {
      setShowModal(true);
      // Mark as shown so it doesn't open on next refresh/visit
      localStorage.setItem("rayvok_contact_modal_shown", "true");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="pt-28 pb-24 px-6 md:px-12 bg-rayvok-offwhite min-h-screen text-[#1A1A1A] relative">
      <div className="container  mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-16 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
         
          <h1 className="text-[#1A1A1A] text-[36px] md:text-[64px] leading-[1.05] tracking-tight font-display max-w-3xl font-bold">
            Let&apos;s build something <span className="text-[#999999]">that works.</span>
          </h1>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ── LEFT SIDEBAR ── */}
          <div className="lg:col-span-4 animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            <div className="bg-[#FFFFFF] border border-[#EAE7DF] rounded-2xl p-8 sticky top-28 shadow-sm">

              {/* Avatar + Name */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-[#EAE7DF] shrink-0 bg-[#C9FE34]/15 flex items-center justify-center">
                  {/* Volt R monogram */}
                  <span className="font-display font-black text-[#1A1A1A] text-xl leading-none">R</span>
                </div>
                <div>
                  <p className="text-[#1A1A1A] font-display font-semibold text-[18px] leading-tight">Rayvok Studio</p>
                  <p className="text-[#8C8C85] font-display text-[12px] uppercase tracking-wider mt-0.5 font-medium">Web Design & Dev</p>
                </div>
              </div>

              {/* Trust signals (Removed NDA) */}
              <div className="space-y-4 mb-10">
                {[
                  "We respond within 24 hours",
                  "Free 30-min discovery call",
                  "No long-term lock-in",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#C9FE34]/20 border border-[#C9FE34]/55 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[#555550] text-[14px] font-display leading-snug">{item}</p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-[#EAE7DF] mb-8" />

              {/* Contact info */}
              <p className=" font-display text-[11px] uppercase tracking-widest mb-4 font-semibold">Project Inquiries</p>
              <div className="space-y-3">
                <a
                  href="mailto:hello@rayvok.com"
                  className="flex items-center gap-3 text-[#555550] hover:text-[#1A1A1A] transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg border border-[#EAE7DF] flex items-center justify-center shrink-0 group-hover:border-[#8C8C85]/30 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </span>
                  <span className="font-display text-[14px] font-medium">hello@rayvok.com</span>
                </a>

                <button
                  onClick={() => setActiveView(activeView === "cal" ? "form" : "cal")}
                  className="flex items-center gap-3 text-[#555550] hover:text-[#1A1A1A] transition-colors group w-full text-left"
                >
                  <span className="w-8 h-8 rounded-lg border border-[#EAE7DF] flex items-center justify-center shrink-0 group-hover:border-[#8C8C85]/30 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2"/>
                      <path d="M16 2v4M8 2v4M3 10h18"/>
                    </svg>
                  </span>
                  <span className="font-display text-[14px] font-medium">
                    {activeView === "cal" ? "Back to form" : "Book a call"}
                  </span>
                </button>
              </div>

              {/* Toggle tabs */}
              <div className="mt-8 p-1 bg-[#F5F5F0] rounded-lg border border-[#EAE7DF] grid grid-cols-2 gap-1">
                <button
                  onClick={() => setActiveView("form")}
                  className={`py-2.5 px-4 rounded-lg font-display text-[12px] uppercase tracking-wider transition-all duration-300 ${
                    activeView === "form"
                      ? "bg-[#C9FE34] text-rayvok-black font-semibold shadow-[0_2px_8px_rgba(201,254,52,0.25)]"
                      : "text-[#8C8C85] hover:text-[#1A1A1A]"
                  }`}
                >
                  Send a brief
                </button>
                <button
                  onClick={() => setActiveView("cal")}
                  className={`py-2.5 px-4 rounded-lg font-display text-[12px] uppercase tracking-wider transition-all duration-300 ${
                    activeView === "cal"
                      ? "bg-[#C9FE34] text-rayvok-black font-semibold shadow-[0_2px_8px_rgba(201,254,52,0.25)]"
                      : "text-[#8C8C85] hover:text-[#1A1A1A]"
                  }`}
                >
                  Book a call
                </button>
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="lg:col-span-8 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>

            {/* ── CAL.COM EMBED ── */}
            {activeView === "cal" && (
              <div className="bg-[#FFFFFF] border border-[#EAE7DF] rounded-2xl overflow-hidden shadow-sm">
                <div className="px-8 pt-8 pb-6 border-b border-[#EAE7DF]">
                  <p className="text-[#8C8C85] font-display text-[11px] uppercase tracking-widest mb-2 font-semibold">30-min discovery call</p>
                  <h2 className="text-[#1A1A1A] font-display text-[24px] md:text-[30px] font-bold leading-tight">
                    Pick a time that works for you.
                  </h2>
                  <p className="text-[#555550] text-[14px] mt-2 font-display">
                    A quick intro call to understand your goals — no sales pitch, just a real conversation.
                  </p>
                </div>
                <div className="w-full" style={{ height: "700px" }}>
                  <iframe
                    src="https://cal.com/rayvok/30min?embed=true&theme=light&hideEventTypeDetails=false&layout=month_view"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Book a 30-minute discovery call with Rayvok"
                    allow="camera; microphone; fullscreen"
                    style={{ border: "none", display: "block" }}
                  />
                </div>
              </div>
            )}

            {/* ── CONTACT FORM ── */}
            {activeView === "form" && (
              <div className="bg-[#FFFFFF] border border-[#EAE7DF] rounded-2xl overflow-hidden shadow-sm">
                <div className="px-8 pt-8 pb-6 border-b border-[#EAE7DF]">
                  <p className="text-[#8C8C85] font-display text-[11px] uppercase tracking-widest mb-2 font-semibold">Project brief</p>
                  <h2 className="text-[#1A1A1A] font-display text-[24px] md:text-[30px] font-bold leading-tight">
                    Tell us about your project.
                  </h2>
                  <p className="text-[#555550] text-[14px] mt-2 font-display">
                    We&apos;ll review your brief and get back to you within 24 hours.
                  </p>
                </div>

                <div className="p-8 md:p-10">
                  {isSubmitted ? (
                    <div className="text-center flex flex-col items-center justify-center py-16 gap-6">
                      <div className="w-16 h-16 bg-[#C9FE34]/20 border border-[#C9FE34]/50 rounded-full flex items-center justify-center text-[#1A1A1A]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-[#1A1A1A] text-[24px] font-display font-bold mb-2">Brief received.</h3>
                        <p className="text-[#555550] text-[15px] max-w-sm mx-auto font-display">
                          Thanks for reaching out. We&apos;ll review your project and get back within 24 hours.
                        </p>
                      </div>
                      <button
                        onClick={() => { setIsSubmitted(false); setFormData({ name: "", email: "", projectType: "", budget: "", message: "" }); }}
                        className="text-[#8C8C85] hover:text-[#1A1A1A] font-display text-[13px] uppercase tracking-wider transition-colors underline underline-offset-4 font-semibold"
                      >
                        Send another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name + Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-[#8C8C85] font-display text-[11px] uppercase tracking-widest font-semibold">Your name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Alex Johnson"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-[#F5F5F0] border border-[#EAE7DF] focus:border-[#8C8C85]/60 rounded-lg px-4 py-3.5 text-[#1A1A1A] placeholder-[#888880] outline-none transition-colors font-display text-[15px]"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-[#8C8C85] font-display text-[11px] uppercase tracking-widest font-semibold">Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="alex@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-[#F5F5F0] border border-[#EAE7DF] focus:border-[#8C8C85]/60 rounded-lg px-4 py-3.5 text-[#1A1A1A] placeholder-[#888880] outline-none transition-colors font-display text-[15px]"
                          />
                        </div>
                      </div>

                      {/* Project Type */}
                      <div className="space-y-2">
                        <label htmlFor="projectType" className="text-[#8C8C85] font-display text-[11px] uppercase tracking-widest font-semibold">What do you need? *</label>
                        <div className="relative">
                          <select
                            id="projectType"
                            name="projectType"
                            required
                            value={formData.projectType}
                            onChange={handleChange}
                            className="w-full bg-[#F5F5F0] border border-[#EAE7DF] focus:border-[#8C8C85]/60 rounded-lg px-4 py-3.5 text-[#1A1A1A] appearance-none outline-none transition-colors font-display text-[15px]"
                          >
                            <option value="" disabled>Select an option</option>
                            <option value="Website Design & Development">Website Design & Development</option>
                            <option value="Landing Page">Landing Page</option>
                            <option value="SaaS Product UI">Web Application</option>
                            <option value="Not sure yet">Not sure yet</option>
                          </select>
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#8C8C85]">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="6 9 12 15 18 9"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Budget — pill selectors */}
                      <div className="space-y-3">
                        <label className="text-[#8C8C85] font-display text-[11px] uppercase tracking-widest font-semibold">Budget range</label>
                        <div className="flex flex-wrap gap-2">
                          {["Under ₹20K", "₹20K–₹50K", "₹50K–₹1L", "Above ₹1L", "Let's talk"].map((range) => (
                            <button
                              key={range}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: range })}
                              className={`px-4 py-2 rounded-lg border font-display text-[12px] uppercase tracking-wider transition-all duration-200 ${
                                formData.budget === range
                                  ? "bg-[#C9FE34] border-[#C9FE34] text-rayvok-black font-semibold shadow-sm"
                                  : "border-[#EAE7DF] text-[#555550] hover:border-[#8C8C85] hover:text-[#1A1A1A]"
                              }`}
                            >
                              {range}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-[#8C8C85] font-display text-[11px] uppercase tracking-widest font-semibold">About your project *</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="What are you building, who's it for, and what does success look like?"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-[#F5F5F0] border border-[#EAE7DF] focus:border-[#8C8C85]/60 rounded-lg px-4 py-3.5 text-[#1A1A1A] placeholder-[#888880] outline-none transition-colors resize-none font-display text-[15px]"
                        />
                      </div>

                      {/* Submit row */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-3 bg-[#1A1A1A] text-[#FFFFFF] font-display font-semibold text-[13px] tracking-widest uppercase px-8 py-4 rounded-full hover:bg-rayvok-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm disabled:opacity-60"
                        >
                          <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                              <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          {isSubmitting ? "Sending..." : "Submit brief"}
                        </button>
                        <p className="text-[#8C8C85] font-display text-[11px] leading-relaxed max-w-[200px]">
                          By submitting you agree to our{" "}
                          <span className="text-[#1A1A1A] underline underline-offset-2 cursor-pointer font-medium">Privacy Policy</span>
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ── MODAL POPUP (AFTER FEW SECONDS) ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#000000]/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setShowModal(false)}
          />
          
          {/* Modal Content Card */}
          <div className="bg-[#FFFFFF] border border-[#EAE7DF] rounded-2xl max-w-md w-full p-8 shadow-xl relative z-10 animate-fade-in-up text-center">
            {/* Cancel Button */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-[#8C8C85] hover:text-[#1A1A1A] transition-colors p-1"
              aria-label="Close modal"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-[#C9FE34]/20 border border-[#C9FE34]/60 flex items-center justify-center mx-auto mb-5 text-[#1A1A1A]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
            </div>

            <h3 className="text-[#1A1A1A] font-display text-[22px] font-bold mb-3 leading-tight">
              How would you prefer to start?
            </h3>
            
            <p className="text-[#555550] font-display text-[14px] mb-6 leading-relaxed">
              Book a direct 30-minute discovery call right now, or send us your project brief first using the form.
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setActiveView("cal");
                  setShowModal(false);
                }}
                className="w-full bg-[#1A1A1A] text-[#FFFFFF] font-display font-semibold text-[13px] tracking-wider uppercase py-3.5 rounded-full hover:bg-rayvok-black hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-sm"
              >
                Book a call
              </button>
              
              <button
                onClick={() => {
                  setActiveView("form");
                  setShowModal(false);
                }}
                className="w-full bg-[#F5F5F0] border border-[#EAE7DF] text-[#1A1A1A] font-display font-semibold text-[13px] tracking-wider uppercase py-3.5 rounded-full hover:bg-[#EAE7DF] transition-colors"
              >
                Continue with form
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
