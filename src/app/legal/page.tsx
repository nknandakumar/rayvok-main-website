import Link from "next/link";
import LegalPageTracker from "@/components/analytics/LegalPageTracker";

export const metadata = {
  title: "Legal Notice — Rayvok",
  description: "Legal information, business identity, and terms of website use for Rayvok.",
};

export default function LegalNoticePage() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 bg-rayvok-black min-h-screen text-rayvok-offwhite">
      <LegalPageTracker pageName="legal_notice" />
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12 border-b border-rayvok-surface pb-8">
          <h1 className="text-rayvok-offwhite text-[36px] md:text-[54px] font-semibold leading-tight font-display mb-4">
            Legal <span className="text-rayvok-volt">Notice.</span>
          </h1>
          <div className="flex items-center gap-3 text-[13px] text-rayvok-mid font-mono">
            <span>Last updated: 2025</span>
            <span className="text-rayvok-surface">•</span>
            <span>Bengaluru, India</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-10 text-[16px] leading-relaxed text-rayvok-mid font-body">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              1. Business Identity
            </h2>
            <p>
              This website, <Link href="/" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors">rayvok.com</Link>, is owned and operated by:
            </p>
            <div className="bg-rayvok-deep border border-rayvok-surface rounded-xl p-6 space-y-2 mt-4">
              <p className="font-semibold text-rayvok-offwhite">Nanda Kumar M</p>
              <p className="font-mono text-[13px] text-rayvok-volt font-medium">Sole Proprietor — Rayvok</p>
              <p>Bengaluru, Karnataka, India</p>
              <p>Email: <a href="mailto:hello@rayvok.com" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors">hello@rayvok.com</a></p>
              <p>Website: <Link href="/" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors">rayvok.com</Link></p>
            </div>
            <p className="text-[15px] italic mt-4">
              Rayvok is a sole proprietorship operating under the personal name of Nanda Kumar M and is not a registered company, private limited, or LLP entity at this time.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              2. Nature of Business
            </h2>
            <p>
              Rayvok provides web design and web development services to businesses, professionals, and individuals. Services include website design, web development, web application development, and landing page design and development.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              3. Intellectual Property
            </h2>
            <p>
              All content on this website — including but not limited to text, design, graphics, logos, icons, images, and code — is the intellectual property of Nanda Kumar M / Rayvok unless explicitly stated otherwise.
            </p>
            <p>
              You may not reproduce, distribute, republish, modify, transmit, or create derivative works from any content on this website without prior written permission from Nanda Kumar M.
            </p>
            <p>
              The Rayvok name, wordmark, and logo are proprietary identifiers of this business. Unauthorised use is prohibited.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              4. Third-Party Content
            </h2>
            <p>
              Where this website references, links to, or displays work created for clients, such work is shared with the client&apos;s knowledge and consent as part of Rayvok&apos;s portfolio. If you are a client and wish to request removal of your project from this site, contact <a href="mailto:hello@rayvok.com" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors">hello@rayvok.com</a>.
            </p>
            <p>
              Work created by Rayvok for clients remains the property of the respective client upon full payment of the agreed project fee, unless otherwise specified in the project agreement.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              5. Accuracy of Information
            </h2>
            <p>
              The information on this website is provided in good faith and is believed to be accurate at the time of publication. Rayvok makes no representations or warranties — express or implied — about the completeness, accuracy, reliability, or suitability of any information on this site.
            </p>
            <p>
              Rayvok reserves the right to update, modify, or remove any content on this website at any time without prior notice.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              6. External Links
            </h2>
            <p>
              This website may contain links to third-party websites. These links are provided for convenience and reference only. Rayvok does not endorse, control, or take responsibility for the content, privacy practices, or availability of any linked external websites.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              7. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, Nanda Kumar M / Rayvok shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Your use of, or inability to use, this website</li>
              <li>Any errors or omissions in the content of this website</li>
              <li>Any unauthorised access to or use of our servers or personal data stored therein</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              8. Governing Law
            </h2>
            <p>
              This website and its legal notice are governed by the laws of India. Any disputes arising in connection with this website shall be subject to the exclusive jurisdiction of the courts located in <strong className="font-semibold text-rayvok-offwhite">Bengaluru, Karnataka, India</strong>.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              9. Contact
            </h2>
            <p>
              For any questions regarding this legal notice, contact:
            </p>
            <div className="bg-rayvok-deep border border-rayvok-surface rounded-xl p-6 mt-4">
              <p>Email: <a href="mailto:hello@rayvok.com" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors">hello@rayvok.com</a></p>
              <p className="mt-2 text-[14px]">Business: Rayvok, Bengaluru, Karnataka, India</p>
            </div>
          </section>
        </div>

        {/* Footer info */}
        <div className="mt-16 pt-8 border-t border-rayvok-surface text-center font-mono text-[12px] text-rayvok-mid">
          <p>© {new Date().getFullYear()} RAYVOK. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </section>
  );
}
