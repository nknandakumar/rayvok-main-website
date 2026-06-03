/**
 * Rayvok — Google Analytics 4 event helpers (GA ID: G-SYH80DR7V9)
 *
 * All custom event tracking for the website lives here.
 * Call these functions from components to fire GA4 events.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Fire a raw GA4 event (safe — no-ops if GA hasn't loaded yet) */
export function gaEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params ?? {});
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA BUTTON CLICKS
// ─────────────────────────────────────────────────────────────────────────────

/** Fired when any primary CTA button is clicked */
export function trackCTAClick(label: string, destination?: string) {
  gaEvent("cta_click", {
    cta_label: label,
    destination: destination ?? "unknown",
  });
}

/** Fired when a "View Project / Case Study" card is clicked */
export function trackCaseStudyClick(projectName: string, slug: string) {
  gaEvent("case_study_card_click", {
    project_name: projectName,
    slug,
  });
}

/** Fired when "Live Website" button inside a case study is clicked */
export function trackLiveWebsiteClick(projectName: string, url: string) {
  gaEvent("live_website_click", {
    project_name: projectName,
    url,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT FORM
// ─────────────────────────────────────────────────────────────────────────────

/** Fired when user lands on /start (contact page view) */
export function trackContactPageView() {
  gaEvent("contact_page_view");
}

/** Fired when the form submit button is clicked */
export function trackFormSubmitAttempt() {
  gaEvent("form_submit_attempt");
}

/** Fired when Web3Forms confirms successful submission */
export function trackFormSubmitSuccess() {
  gaEvent("form_submit_success");
  // Also fire GA4's recommended "generate_lead" event
  gaEvent("generate_lead", { method: "contact_form" });
}

/** Fired if the form fails */
export function trackFormSubmitError(reason: string) {
  gaEvent("form_submit_error", { reason });
}

// ─────────────────────────────────────────────────────────────────────────────
// TIME ON PAGE
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Sends a "time_on_page" event when the user is about to leave.
 * Call this from a useEffect with a beforeunload + visibilitychange listener.
 */
export function trackTimeOnPage(pageName: string, seconds: number) {
  gaEvent("time_on_page", {
    page_name: pageName,
    seconds_spent: Math.round(seconds),
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// NAVIGATION & LEGAL PAGES
// ─────────────────────────────────────────────────────────────────────────────

/** Fired when a legal/policy page is viewed */
export function trackLegalPageView(pageName: string) {
  gaEvent("legal_page_view", { page_name: pageName });
}

/** Fired when "Book a call" is toggled on the contact page */
export function trackBookCallClick() {
  gaEvent("book_call_click");
}
