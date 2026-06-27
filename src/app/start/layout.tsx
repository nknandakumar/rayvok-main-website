import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Rayvok",
  description: "Get in touch with Rayvok. Tell us about your project or book a call.",
};

export default function StartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
