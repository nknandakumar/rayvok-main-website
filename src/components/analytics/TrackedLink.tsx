"use client";

import Link from "next/link";
import { trackLiveWebsiteClick, trackCaseStudyClick } from "@/lib/analytics";

interface TrackedLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  trackingType: "live_website" | "case_study";
  clientName?: string;
  projectName?: string;
  projectSlug?: string;
  target?: string;
  rel?: string;
}

export default function TrackedLink({
  href,
  className,
  children,
  trackingType,
  clientName,
  projectName,
  projectSlug,
  target,
  rel,
}: TrackedLinkProps) {
  const handleClick = () => {
    if (trackingType === "live_website" && clientName) {
      trackLiveWebsiteClick(clientName, href);
    } else if (trackingType === "case_study" && projectName && projectSlug) {
      trackCaseStudyClick(projectName, projectSlug);
    }
  };

  return (
    <Link 
      href={href} 
      className={className} 
      onClick={handleClick}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}
