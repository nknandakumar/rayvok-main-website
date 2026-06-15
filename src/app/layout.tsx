import type { Metadata } from "next";
import { Geist, Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import StairsPreloader from "@/components/ui/StairsPreloader";
import CookieConsent from "@/components/ui/CookieConsent";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";



const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// ── Primary font: Lay Grotesk ────────────────────────────────────────
const layGrotesk = localFont({
  src: [
    { path: "./fonts/lay-grotesk-font-family/laygrotesk-trial-regular.otf",  weight: "400" },
    { path: "./fonts/lay-grotesk-font-family/laygrotesk-trial-medium.otf",   weight: "500" },
    { path: "./fonts/lay-grotesk-font-family/laygrotesk-trial-semibold.otf", weight: "600" },
    { path: "./fonts/lay-grotesk-font-family/laygrotesk-trial-bold.otf",     weight: "700" },
    { path: "./fonts/lay-grotesk-font-family/laygrotesk-trial-black.otf",    weight: "900" },
  ],
  variable: "--font-lay-grotesk",
  display: "swap",
});

// ── Secondary font: PP Neue Montreal Mono ────────────────────────────
const ppNeueMontrealMono = localFont({
  src: [
    { path: "./fonts/PPNeueMontrealMono/PPNeueMontrealMono-Thin.otf",          weight: "100" },
    { path: "./fonts/PPNeueMontrealMono/PPNeueMontrealMono-Book.otf",          weight: "400" },
    { path: "./fonts/PPNeueMontrealMono/PPNeueMontrealMono-Medium.otf",        weight: "500" },
    { path: "./fonts/PPNeueMontrealMono/PPNeueMontrealMono-Bold.otf",          weight: "700" },
  ],
  variable: "--font-pp-neue-mono",
  display: "swap",
});

// ── Legacy local fonts (kept for fallback) ───────────────────────────
const ppNeue = localFont({
  src: [
    { path: "./fonts/pp-neue-montreal/ppneuemontreal-thin.otf",   weight: "100" },
    { path: "./fonts/pp-neue-montreal/ppneuemontreal-book.otf",   weight: "400" },
    { path: "./fonts/pp-neue-montreal/ppneuemontreal-medium.otf", weight: "500" },
    { path: "./fonts/pp-neue-montreal/ppneuemontreal-bold.otf",   weight: "700" },
  ],
  variable: "--font-pp-neue",
  display: "swap",
});

const switzer = localFont({
  src: [
    { path: "./fonts/swister/OTF/Switzer-Regular.otf",  weight: "400" },
    { path: "./fonts/swister/OTF/Switzer-Medium.otf",   weight: "500" },
    { path: "./fonts/swister/OTF/Switzer-Semibold.otf", weight: "600" },
    { path: "./fonts/swister/OTF/Switzer-Bold.otf",     weight: "700" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rayvok — Web Design & Development for Businesses and SaaS",
  description: "Rayvok builds high-performance conversion-focused websites for SaaS products, businesses, and professionals. Web design that turns visitors into revenue.",
  metadataBase: new URL("https://rayvok.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rayvok — Web Design & Development",
    description: "Rayvok builds high-performance websites for SaaS products, businesses, and professionals. Web design that turns visitors into revenue.",
    url: "https://rayvok.com",
    siteName: "Rayvok",
    images: [
      {
        url: "https://res.cloudinary.com/dokrpo5fl/image/upload/c_scale,w_1200,h_630,q_auto,f_jpg/v1780156439/520ogImage_vhge7h.jpg",
        width: 1200,
        height: 630,
        alt: "Rayvok — Premium Web Design & Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayvok — Web Design & Development",
    description: "Rayvok builds high-performance conversion-focused websites for SaaS products, businesses, and professionals. Web design that turns visitors into revenue.",
    images: ["https://res.cloudinary.com/dokrpo5fl/image/upload/c_scale,w_1200,h_630,q_auto,f_jpg/v1780156439/520ogImage_vhge7h.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "kyFghkZbHT4sw8WTmA44WSPDQDcpTy9jPY1_Pc18eVY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geist.variable} ${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} ${ppNeue.variable} ${switzer.variable} ${layGrotesk.variable} ${ppNeueMontrealMono.variable} antialiased`}
    >
      <body suppressHydrationWarning className="min-h-screen bg-rayvok-black text-rayvok-offwhite flex flex-col font-body selection:bg-rayvok-volt selection:text-rayvok-black">
        <GoogleAnalytics />
        <StairsPreloader />
        <CookieConsent />
        <SmoothScroll>
          <Navigation />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Rayvok",
              "image": "https://res.cloudinary.com/dokrpo5fl/image/upload/c_scale,w_1200,h_630,q_auto,f_jpg/v1780156439/520ogImage_vhge7h.jpg",
              "@id": "https://rayvok.com/#organization",
              "url": "https://rayvok.com",
              "telephone": "",
              "priceRange": "₹20000 - ₹200000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "",
                "postalCode": "",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 0,
                "longitude": 0
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/rayvok",
                "https://www.instagram.com/rayvokhq"
              ],
              "description": "Rayvok builds high-performance websites for SaaS products, businesses, and professionals. Web design that turns visitors into revenue.",
              "logo": "https://res.cloudinary.com/dokrpo5fl/image/upload/v1779005565/wordmarkdark_kpx3dm.png"
            })
          }}
        />
      </body>
    </html>
  );
}
