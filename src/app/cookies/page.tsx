import Link from "next/link";

export const metadata = {
  title: "Cookie Policy — Rayvok",
  description: "Cookie Policy for Rayvok. Learn about what cookies we use, how we use them, and your cookie choices.",
};

export default function CookiePolicyPage() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 bg-rayvok-black min-h-screen text-rayvok-offwhite">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12 border-b border-rayvok-surface pb-8">
          <h1 className="text-rayvok-offwhite text-[36px] md:text-[54px] font-semibold leading-tight font-display mb-4">
            Cookie <span className="text-rayvok-volt">Policy.</span>
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
            This Cookie Policy explains how Rayvok (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) uses cookies and similar technologies on <Link href="/" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors font-medium">rayvok.com</Link>.
          </p>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files that are placed on your device (computer, phone, or tablet) when you visit a website. They are widely used to make websites work efficiently and to provide information to website owners.
            </p>
            <p>
              Cookies do not contain viruses or harmful code. They cannot access other files on your device.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              2. How We Use Cookies
            </h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To ensure the website functions correctly</li>
              <li>To understand how visitors use our website so we can improve it</li>
              <li>To remember your cookie preferences</li>
            </ul>
            <p className="mt-4">
              We do not use cookies for advertising, retargeting, or selling data to third parties.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              3. Cookies We Use
            </h2>
            
            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-4">
              3.1 Essential Cookies
            </h3>
            <p>
              These cookies are necessary for the website to function. They cannot be switched off. They do not store any personally identifiable information.
            </p>
            
            <div className="overflow-x-auto border border-rayvok-surface rounded-xl mt-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-rayvok-deep text-rayvok-offwhite border-b border-rayvok-surface font-display text-[14px]">
                    <th className="p-4 font-semibold">Cookie Name</th>
                    <th className="p-4 font-semibold">Purpose</th>
                    <th className="p-4 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rayvok-surface text-[14px]">
                  <tr>
                    <td className="p-4 text-rayvok-offwhite font-mono font-medium">Cookie consent preference</td>
                    <td className="p-4">Remembers your cookie consent choice</td>
                    <td className="p-4">1 year</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-rayvok-offwhite font-mono font-medium">Session cookie</td>
                    <td className="p-4">Maintains your session while browsing</td>
                    <td className="p-4">Session (deleted when browser closes)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              3.2 Analytics Cookies (Google Analytics)
            </h3>
            <p>
              These cookies help us understand how visitors interact with our website — which pages are most visited, how long people stay, and how they found us. All data collected is anonymised and aggregated.
            </p>
            
            <div className="overflow-x-auto border border-rayvok-surface rounded-xl mt-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-rayvok-deep text-rayvok-offwhite border-b border-rayvok-surface font-display text-[14px]">
                    <th className="p-4 font-semibold">Cookie Name</th>
                    <th className="p-4 font-semibold">Purpose</th>
                    <th className="p-4 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rayvok-surface text-[14px]">
                  <tr>
                    <td className="p-4 text-rayvok-offwhite font-mono font-medium">_ga</td>
                    <td className="p-4">Distinguishes unique users</td>
                    <td className="p-4">2 years</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-rayvok-offwhite font-mono font-medium">_ga_[ID]</td>
                    <td className="p-4">Maintains session state</td>
                    <td className="p-4">2 years</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-rayvok-offwhite font-mono font-medium">_gid</td>
                    <td className="p-4">Distinguishes unique users (daily)</td>
                    <td className="p-4">24 hours</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-rayvok-offwhite font-mono font-medium">_gat</td>
                    <td className="p-4">Throttles request rate</td>
                    <td className="p-4">1 minute</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="mt-4 text-[15px]">
              These cookies are set by Google Analytics and are governed by Google&apos;s Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors">policies.google.com/privacy</a>.
            </p>
            <p className="text-[15px]">
              You can opt out of Google Analytics by installing the browser add-on at: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors font-medium">tools.google.com/dlpage/gaoptout</a>.
            </p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              3.3 Third-Party Cookies — Calendly
            </h3>
            <p>
              If you interact with the Calendly booking widget embedded on our website, Calendly may set its own cookies to enable the booking functionality. These cookies are governed by Calendly&apos;s Cookie Policy: <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors font-medium">calendly.com/privacy</a>.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              4. Cookies We Do NOT Use
            </h2>
            <p>We do not use:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Advertising or retargeting cookies (Facebook Pixel, Google Ads, etc.)</li>
              <li>Social media tracking cookies</li>
              <li>Behavioural profiling cookies (Hotjar, Crazy Egg, etc.)</li>
              <li>Any cookies that sell or share your data with third parties for commercial purposes</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              5. Your Cookie Choices
            </h2>
            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-4">
              5.1 Cookie Consent Banner
            </h3>
            <p>When you first visit rayvok.com, you will see a cookie consent banner. You can:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="text-rayvok-offwhite font-medium">Accept all cookies</span> — including analytics cookies</li>
              <li><span className="text-rayvok-offwhite font-medium">Accept essential cookies only</span> — only the cookies necessary for the site to work</li>
              <li><span className="text-rayvok-offwhite font-medium">Manage preferences</span> — choose which cookie categories to allow</li>
            </ul>
            <p className="mt-4">
              Your preference is stored for 1 year. You can change your preference at any time.
            </p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              5.2 Changing Your Preferences
            </h3>
            <p>
              To update your cookie preferences at any time, click the <span className="text-rayvok-offwhite font-semibold font-medium">&quot;Cookie Settings&quot;</span> link in the footer of rayvok.com.
            </p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              5.3 Browser Settings
            </h3>
            <p>You can also control cookies through your browser settings. Most browsers allow you to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>View cookies currently stored on your device</li>
              <li>Block all cookies</li>
              <li>Delete cookies when you close your browser</li>
              <li>Block third-party cookies specifically</li>
            </ul>
            
            <p className="mt-4 font-semibold text-rayvok-offwhite">How to manage cookies in popular browsers:</p>
            <ul className="list-disc pl-6 space-y-1 text-[15px]">
              <li><span className="text-rayvok-offwhite font-medium">Chrome:</span> Settings → Privacy and Security → Cookies and other site data</li>
              <li><span className="text-rayvok-offwhite font-medium">Safari:</span> Preferences → Privacy → Manage Website Data</li>
              <li><span className="text-rayvok-offwhite font-medium">Firefox:</span> Options → Privacy & Security → Cookies and Site Data</li>
              <li><span className="text-rayvok-offwhite font-medium">Edge:</span> Settings → Privacy, search, and services → Cookies</li>
            </ul>
            <p className="text-[15px] italic mt-2">
              Note: Blocking all cookies may affect the functionality of this website.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              6. Cookie Consent for Indian Users
            </h2>
            <p>
              Under India&apos;s <span className="text-rayvok-offwhite font-medium">Digital Personal Data Protection Act (DPDP Act) 2023</span>, we are required to obtain your consent before collecting personal data through cookies beyond what is strictly necessary. Our cookie consent banner is designed to comply with this requirement.
            </p>
            <p>
              You have the right to withdraw your consent at any time by updating your cookie preferences through the Cookie Settings option in our website footer.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              7. Cookie Consent for EU / UK Users
            </h2>
            <p>
              If you are visiting from the European Union or United Kingdom, our cookie practices are designed to comply with the <span className="text-rayvok-offwhite font-medium">General Data Protection Regulation (GDPR)</span> and <span className="text-rayvok-offwhite font-medium">UK GDPR</span> respectively, including the ePrivacy Directive.
            </p>
            <p>This means:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Analytics cookies are only placed after you provide explicit consent</li>
              <li>You can withdraw consent at any time</li>
              <li>We do not use pre-ticked consent boxes</li>
              <li>Refusing analytics cookies does not prevent you from using our website</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              8. Changes to This Cookie Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for legal, operational, or regulatory reasons. When we do, we will update the &quot;Last updated&quot; date at the top of this page.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              9. Contact
            </h2>
            <p>If you have any questions about how we use cookies, contact:</p>
            <div className="bg-rayvok-deep border border-rayvok-surface rounded-xl p-6 mt-4">
              <p>Email: <a href="mailto:hello@rayvok.com" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors font-semibold">hello@rayvok.com</a></p>
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
