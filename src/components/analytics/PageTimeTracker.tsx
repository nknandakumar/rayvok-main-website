"use client";

import { useEffect, useRef } from "react";
import { trackTimeOnPage } from "@/lib/analytics";

interface Props {
  pageName: string; // e.g. "home", "case_study_paddock_passion", "contact"
}

/**
 * Invisible tracker — measures seconds spent on a page and fires
 * a GA4 "time_on_page" event when the user navigates away or closes the tab.
 * Mount this inside any page component.
 */
export default function PageTimeTracker({ pageName }: Props) {
  const startTime = useRef<number>(Date.now());
  const sent = useRef(false);

  useEffect(() => {
    startTime.current = Date.now();
    sent.current = false;

    const fire = () => {
      if (sent.current) return;
      sent.current = true;
      const seconds = (Date.now() - startTime.current) / 1000;
      trackTimeOnPage(pageName, seconds);
    };

    // Fire when tab becomes hidden (most reliable for SPAs)
    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") fire();
    };

    // Fire on page unload (fallback for direct closes / navigations)
    const onBeforeUnload = () => fire();

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      // Fire when the component unmounts (Next.js client-side navigation)
      fire();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, [pageName]);

  return null;
}
