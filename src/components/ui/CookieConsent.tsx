"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Check if consent has already been given or declined
    const consent = localStorage.getItem("rayvok_cookie_consent");
    if (consent === "accepted" || consent === "declined") {
      return;
    }

    // 2. Define handler to reveal cookie banner
    const showBanner = () => {
      // 1.5 seconds delay after preloader completes to let the homepage load beautifully
      setTimeout(() => {
        setIsVisible(true);
      }, 1500);
    };

    // 3. Check if preloader is already finished or wait for it
    if ((window as any).__rayvokPreloaderComplete) {
      showBanner();
    } else {
      window.addEventListener("preloaderComplete", showBanner);
    }

    return () => {
      window.removeEventListener("preloaderComplete", showBanner);
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem("rayvok_cookie_consent", "accepted");
    // Dispatch a custom event in case other scripts/analytics components need to react
    window.dispatchEvent(new CustomEvent("cookieConsentChanged", { detail: { consent: "accepted" } }));
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("rayvok_cookie_consent", "declined");
    window.dispatchEvent(new CustomEvent("cookieConsentChanged", { detail: { consent: "declined" } }));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-[999] bg-rayvok-deep border border-rayvok-surface rounded-xl p-6 shadow-xl"
        >
          <div className="flex flex-col gap-4 text-left">
            {/* Title & Description */}
            <div className="space-y-2">
              <h4 className="font-display font-semibold text-[16px] text-rayvok-offwhite leading-tight">
                Allow Cookies?
              </h4>
              <p className="font-body text-[13px] text-rayvok-mid leading-relaxed">
                We use analytics cookies to understand how you interact with our website. This helps us optimize performance and improve your experience. See our{" "}
                <Link
                  href="/cookies"
                  className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors font-medium"
                >
                  Cookie Policy
                </Link>{" "}
                for details.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between gap-3 mt-1 font-ui text-[12px] tracking-wide uppercase">
              <button
                onClick={handleDecline}
                className="px-4 py-2.5 rounded-lg text-rayvok-mid hover:text-rayvok-offwhite transition-colors duration-200"
              >
                Decline
              </button>
              
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 bg-rayvok-volt text-rayvok-black font-semibold rounded-full hover:bg-rayvok-volt-light active:bg-rayvok-volt-dark transition-all duration-300 shadow-sm"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
