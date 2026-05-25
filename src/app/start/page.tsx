"use client";

import { useState } from "react";
import Link from "next/link";

export default function StartPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Here you would normally send to your API/formspree/etc.
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="pt-32 pb-24 px-6 md:px-12 bg-rayvok-black min-h-screen">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Header Info */}
          <div className="lg:col-span-5 max-w-xl">
            <p className="label text-rayvok-mid mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
              Let's work together
            </p>
            <h1 className="text-rayvok-offwhite mb-6 text-[40px] md:text-[56px] animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
              Tell us about your project.
            </h1>
            <p className="text-rayvok-mid text-body-lg mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
              We respond within 24 hours. No pitch decks, no pressure — just a conversation.
            </p>

            <div className="hidden lg:block space-y-12 animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
              <div>
                <p className="caption text-rayvok-mid mb-2">Or reach us directly:</p>
                <a href="mailto:hello@rayvok.com" className="text-rayvok-offwhite text-[18px] hover:text-rayvok-volt transition-colors block mb-1">
                  hello@rayvok.com
                </a>
                <a href="https://twitter.com/rayvokHQ" target="_blank" rel="noopener noreferrer" className="text-rayvok-offwhite text-[18px] hover:text-rayvok-volt transition-colors">
                  @rayvokHQ
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            {isSubmitted ? (
              <div className="bg-rayvok-deep border border-rayvok-surface p-12 rounded-lg text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-rayvok-volt/20 rounded-full flex items-center justify-center text-rayvok-volt mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-rayvok-offwhite text-[24px] mb-4">Message sent.</h3>
                <p className="text-rayvok-mid mb-8 max-w-sm mx-auto">
                  Thanks for reaching out. We'll get back to you within 24 hours to discuss your project.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn-secondary">
                  Send another message
                </button>
              </div>
            ) : (
              <div className="bg-rayvok-deep border border-rayvok-surface p-8 md:p-10 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-rayvok-offwhite font-ui text-[13px] uppercase tracking-wide">Your name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-rayvok-black border border-rayvok-surface focus:border-rayvok-volt rounded-md px-4 py-3 text-rayvok-offwhite outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-rayvok-offwhite font-ui text-[13px] uppercase tracking-wide">Your email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-rayvok-black border border-rayvok-surface focus:border-rayvok-volt rounded-md px-4 py-3 text-rayvok-offwhite outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-rayvok-offwhite font-ui text-[13px] uppercase tracking-wide">What do you need? *</label>
                    <div className="relative">
                      <select 
                        id="projectType" 
                        name="projectType" 
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-rayvok-black border border-rayvok-surface focus:border-rayvok-volt rounded-md px-4 py-3 text-rayvok-offwhite appearance-none outline-none transition-colors"
                      >
                        <option value="" disabled>Select an option</option>
                        <option value="Website Design">Website Design</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-rayvok-mid">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-rayvok-offwhite font-ui text-[13px] uppercase tracking-wide">Rough budget range</label>
                    <div className="relative">
                      <select 
                        id="budget" 
                        name="budget" 
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-rayvok-black border border-rayvok-surface focus:border-rayvok-volt rounded-md px-4 py-3 text-rayvok-offwhite appearance-none outline-none transition-colors"
                      >
                        <option value="" disabled>Select an option</option>
                        <option value="Under ₹20,000">Under ₹20,000</option>
                        <option value="₹20,000–₹50,000">₹20,000–₹50,000</option>
                        <option value="₹50,000–₹1,00,000">₹50,000–₹1,00,000</option>
                        <option value="Above ₹1,00,000">Above ₹1,00,000</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-rayvok-mid">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-rayvok-offwhite font-ui text-[13px] uppercase tracking-wide">Tell us about your project *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required
                      rows={5}
                      placeholder="What are you building, who's it for, and what does success look like?"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-rayvok-black border border-rayvok-surface focus:border-rayvok-volt rounded-md px-4 py-3 text-rayvok-offwhite outline-none transition-colors resize-y"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full md:w-auto"
                  >
                    {isSubmitting ? "Sending..." : "Send it"}
                  </button>
                </form>

                <div className="mt-12 flex items-center">
                  <div className="flex-1 border-t border-rayvok-surface"></div>
                  <span className="px-4 text-rayvok-mid font-ui text-[12px] uppercase tracking-wide">prefer to book a call?</span>
                  <div className="flex-1 border-t border-rayvok-surface"></div>
                </div>

                <div className="mt-8 text-center bg-rayvok-black border border-rayvok-surface p-6 rounded-md hover:border-rayvok-volt/50 transition-colors">
                  <h4 className="text-rayvok-offwhite mb-2 text-[18px]">Book a free 30-minute discovery call.</h4>
                  <p className="text-rayvok-mid mb-6 text-[14px]">Pick a time that works for you.</p>
                  <a href="#" className="btn-secondary w-full text-center">
                    Open Calendly
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
