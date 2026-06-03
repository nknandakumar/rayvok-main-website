import Link from "next/link";
import LegalPageTracker from "@/components/analytics/LegalPageTracker";

export const metadata = {
  title: "Privacy Policy — Rayvok",
  description: "Privacy Policy for Rayvok. Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 bg-rayvok-black min-h-screen text-rayvok-offwhite">
      <LegalPageTracker pageName="privacy_policy" />
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12 border-b border-rayvok-surface pb-8">
          <h1 className="text-rayvok-offwhite text-[36px] md:text-[54px] font-semibold leading-tight font-display mb-4">
            Privacy <span className="text-rayvok-volt">Policy.</span>
          </h1>
          <div className="flex items-center gap-3 text-[13px] text-rayvok-mid font-mono">
            <span>Last updated: 2025</span>
            <span className="text-rayvok-surface">•</span>
            <span>Bengaluru, India</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-10 text-[16px] leading-relaxed text-rayvok-mid font-body">
          <p>
            Rayvok (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your personal data. This Privacy Policy explains what information we collect, how we use it, how we protect it, and your rights in relation to it.
          </p>
          <p>
            This policy applies to all visitors and users of <Link href="/" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors">rayvok.com</Link>, including those who submit enquiries or book calls through this website.
          </p>
          <p>
            By using this website, you agree to the collection and use of information in accordance with this policy.
          </p>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              2. Who We Are
            </h2>
            <div className="bg-rayvok-deep border border-rayvok-surface rounded-xl p-6 space-y-2 mt-4 text-[15px]">
              <p className="font-semibold text-rayvok-offwhite">Business name: <span className="font-normal text-rayvok-mid font-body">Rayvok</span></p>
              <p className="font-semibold text-rayvok-offwhite">Owner: <span className="font-normal text-rayvok-mid font-body">Nanda Kumar M (Sole Proprietor)</span></p>
              <p className="font-semibold text-rayvok-offwhite">Location: <span className="font-normal text-rayvok-mid font-body">Bengaluru, Karnataka, India</span></p>
              <p className="font-semibold text-rayvok-offwhite">Contact: <a href="mailto:hello@rayvok.com" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors font-normal font-body font-semibold">hello@rayvok.com</a></p>
              <p className="font-semibold text-rayvok-offwhite">Website: <Link href="/" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors font-normal font-body font-semibold">rayvok.com</Link></p>
            </div>
            <p className="mt-4">
              As a sole proprietorship, Nanda Kumar M is the data controller responsible for your personal data collected through this website.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              3. What Data We Collect
            </h2>
            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-4">
              3.1 Data You Provide Directly
            </h3>
            <p>When you use our contact form or reach out via email, we collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your project type and budget range (if provided)</li>
              <li>Any message or details you submit</li>
              <li>Your preferred meeting time (if you book through Calendly)</li>
            </ul>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              3.2 Data Collected Automatically
            </h3>
            <p>When you visit rayvok.com, the following data may be collected automatically through Google Analytics:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your approximate geographic location (country/city level)</li>
              <li>Browser type and version</li>
              <li>Device type (desktop, mobile, tablet)</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website (how you found us)</li>
              <li>Session duration and bounce rate</li>
            </ul>
            <p className="text-[15px] italic">This data is aggregated and anonymised and is not used to personally identify you.</p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              3.3 Data We Do NOT Collect
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do not collect payment information on this website. All payments are handled separately through agreed channels after a client agreement is signed.</li>
              <li>We do not collect sensitive personal data (health, religion, political views, etc.)</li>
              <li>We do not use Facebook Pixel, Hotjar, or other behavioural tracking tools beyond Google Analytics.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              4. How We Use Your Data
            </h2>
            <p>We use the data we collect for the following purposes:</p>
            
            <div className="overflow-x-auto border border-rayvok-surface rounded-xl mt-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-rayvok-deep text-rayvok-offwhite border-b border-rayvok-surface font-display text-[14px]">
                    <th className="p-4 font-semibold">Purpose</th>
                    <th className="p-4 font-semibold">Legal Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rayvok-surface text-[14px]">
                  <tr>
                    <td className="p-4 text-rayvok-offwhite font-medium">Responding to your project enquiry</td>
                    <td className="p-4">Legitimate interest / Pre-contractual steps</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-rayvok-offwhite font-medium">Scheduling and managing discovery calls</td>
                    <td className="p-4">Legitimate interest</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-rayvok-offwhite font-medium">Sending project-related communications</td>
                    <td className="p-4">Performance of contract</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-rayvok-offwhite font-medium">Analysing website traffic to improve user experience</td>
                    <td className="p-4">Legitimate interest</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-rayvok-offwhite font-medium">Complying with legal obligations</td>
                    <td className="p-4">Legal obligation</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[15px] italic mt-2">We do not use your data for automated decision-making or profiling.</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              5. Third-Party Services
            </h2>
            <p>This website uses the following third-party services that may process your data:</p>
            
            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-4">
              5.1 Google Analytics
            </h3>
            <p>
              We use Google Analytics to understand how visitors use our website. Google Analytics uses cookies to collect anonymised usage data. This data is processed by Google and governed by Google&apos;s Privacy Policy (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors font-medium">policies.google.com/privacy</a>).
            </p>
            <p>
              You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors font-medium">Google Analytics Opt-out Browser Add-on</a>.
            </p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              5.2 Calendly
            </h3>
            <p>
              If you book a discovery call through our website, you will be redirected to or interact with Calendly&apos;s booking system. Calendly will collect your name, email address, and meeting preferences. This data is processed by Calendly and governed by Calendly&apos;s Privacy Policy (<a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors font-medium">calendly.com/privacy</a>).
            </p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              5.3 Email (hello@rayvok.com)
            </h3>
            <p>
              When you email us directly, your email and any attachments are stored in our email service provider&apos;s systems.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              6. Cookies
            </h2>
            <p>
              This website uses cookies. Please refer to our separate <Link href="/cookies" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors font-medium font-semibold">Cookie Policy</Link> for full details on what cookies we use and how to manage them.
            </p>
            <p>In summary:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="text-rayvok-offwhite font-medium">Essential cookies</span> — required for the website to function</li>
              <li><span className="text-rayvok-offwhite font-medium">Analytics cookies</span> — Google Analytics (can be declined)</li>
            </ul>
            <p>
              You can manage cookie preferences through the cookie settings banner on this website or through your browser settings.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              7. Data Sharing
            </h2>
            <p>We do not sell, trade, or rent your personal data to any third party.</p>
            <p>We may share your data only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With third-party service providers listed in Section 5 (Google Analytics, Calendly) strictly as necessary to provide our services</li>
              <li>If required by law, court order, or government authority under Indian law</li>
              <li>To protect the rights, property, or safety of Rayvok, its clients, or others</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              8. Data Retention
            </h2>
            
            <div className="overflow-x-auto border border-rayvok-surface rounded-xl mt-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-rayvok-deep text-rayvok-offwhite border-b border-rayvok-surface font-display text-[14px]">
                    <th className="p-4 font-semibold">Data Type</th>
                    <th className="p-4 font-semibold">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rayvok-surface text-[14px]">
                  <tr>
                    <td className="p-4 text-rayvok-offwhite font-medium">Project enquiry emails</td>
                    <td className="p-4">Duration of client relationship + 3 years</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-rayvok-offwhite font-medium">Contact form submissions</td>
                    <td className="p-4">2 years from date of submission</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-rayvok-offwhite font-medium">Google Analytics data</td>
                    <td className="p-4">14 months (Google&apos;s default retention)</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-rayvok-offwhite font-medium">Calendly booking data</td>
                    <td className="p-4">As per Calendly&apos;s retention policy</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[15px] italic mt-2">After the applicable retention period, data is deleted or anonymised.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              9. International Data Transfers
            </h2>
            <p>
              Rayvok is based in India and primarily operates under Indian law. However, because we use Google Analytics and Calendly — US-based services — your data may be transferred to and processed in countries outside India, including the United States.
            </p>
            <p>
              These transfers occur under the respective service providers&apos; standard contractual clauses and privacy frameworks. We only use service providers who maintain adequate data protection standards.
            </p>
            <p>
              For clients and visitors based in the European Union or United Kingdom, we acknowledge your rights under GDPR and UK GDPR respectively (see Section 10).
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              10. Your Rights
            </h2>
            <p>Depending on your location, you have the following rights regarding your personal data:</p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-4">
              For All Users (India — under IT Act 2000 and DPDP Act 2023)
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>The right to know what personal data we hold about you</li>
              <li>The right to correct inaccurate personal data</li>
              <li>The right to request deletion of your personal data</li>
              <li>The right to withdraw consent where processing is consent-based</li>
            </ul>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              For EU/UK Users (GDPR / UK GDPR)
            </h3>
            <p>In addition to the above:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The right of access to your personal data</li>
              <li>The right to data portability</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to lodge a complaint with your local data protection authority</li>
            </ul>

            <p className="mt-6">
              To exercise any of these rights, email: <a href="mailto:hello@rayvok.com" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors font-semibold">hello@rayvok.com</a>
            </p>
            <p className="text-[15px] italic">We will respond to all requests within 30 days.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              11. Data Security
            </h2>
            <p>
              We take reasonable technical and organisational measures to protect your personal data from unauthorised access, loss, or misuse. These include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Secure email communications</li>
              <li>Limited access to personal data (only Nanda Kumar M processes your data)</li>
              <li>No storage of payment information on this website</li>
            </ul>
            <p className="text-[15px] italic">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              12. Children&apos;s Privacy
            </h2>
            <p>
              This website is not directed at children under the age of 18. We do not knowingly collect personal data from minors. If you believe a child has submitted personal data through this website, contact us at <a href="mailto:hello@rayvok.com" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors font-semibold">hello@rayvok.com</a> and we will delete it promptly.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              13. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the &quot;Last updated&quot; date at the top of this page. We encourage you to review this policy periodically.
            </p>
            <p>
              Continued use of this website after any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              14. Contact Us
            </h2>
            <p>For any questions, requests, or concerns regarding this Privacy Policy:</p>
            <div className="bg-rayvok-deep border border-rayvok-surface rounded-xl p-6 mt-4">
              <p>Email: <a href="mailto:hello@rayvok.com" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors">hello@rayvok.com</a></p>
              <p className="mt-2 font-semibold text-rayvok-offwhite font-body">Business: <span className="font-normal text-rayvok-mid font-body">Rayvok — Nanda Kumar M</span></p>
              <p className="text-[14px]">Location: Bengaluru, Karnataka, India</p>
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
