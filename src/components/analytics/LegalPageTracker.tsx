"use client";

import { useEffect } from "react";
import { trackLegalPageView } from "@/lib/analytics";
import PageTimeTracker from "@/components/analytics/PageTimeTracker";

interface Props {
  pageName: string; // e.g. "privacy_policy", "terms", "cookies", "legal"
}

/**
 * Drop this inside any legal/policy page to get:
 *  - legal_page_view event on mount
 *  - time_on_page event on leave
 */
export default function LegalPageTracker({ pageName }: Props) {
  useEffect(() => {
    trackLegalPageView(pageName);
  }, [pageName]);

  return <PageTimeTracker pageName={pageName} />;
}
