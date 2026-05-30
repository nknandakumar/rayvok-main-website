import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions — Rayvok",
  description: "Terms and Conditions for engaging Rayvok's services and using rayvok.com.",
};

export default function TermsAndConditionsPage() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 bg-rayvok-black min-h-screen text-rayvok-offwhite">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12 border-b border-rayvok-surface pb-8">
          <h1 className="text-rayvok-offwhite text-[36px] md:text-[54px] font-semibold leading-tight font-display mb-4">
            Terms & <span className="text-rayvok-volt">Conditions.</span>
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
            Welcome to <Link href="/" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors font-medium">rayvok.com</Link>. 
            These Terms and Conditions (&quot;Terms&quot;) govern your use of our website and any services provided by Rayvok (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), operated by Nanda Kumar M, a sole proprietor based in Bengaluru, Karnataka, India.
          </p>
          <p>
            By accessing this website or engaging Rayvok for any service, you (&quot;the Client&quot;, &quot;you&quot;) agree to be bound by these Terms. If you do not agree, you must not use this website or engage our services.
          </p>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              2. Services
            </h2>
            <p>Rayvok provides the following services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="text-rayvok-offwhite font-medium">Website Design</span> — UI/UX design, responsive layout design, brand-aligned visual design</li>
              <li><span className="text-rayvok-offwhite font-medium">Web Development</span> — Custom website development, CMS integration, front-end and back-end development</li>
              <li><span className="text-rayvok-offwhite font-medium">Web Application Development</span> — Custom web application design and development</li>
              <li><span className="text-rayvok-offwhite font-medium">Landing Page Design & Development</span> — Single-page designs built for specific campaigns, products, or goals</li>
            </ul>
            <p className="mt-4">
              The specific scope, deliverables, timeline, and cost for each project are agreed upon individually and documented in a separate Project Agreement or Proposal before work begins.
            </p>
            <p>
              These Terms apply to all service engagements unless otherwise superseded by a signed Project Agreement. In the event of any conflict between these Terms and a Project Agreement, the Project Agreement shall prevail.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              3. Project Agreement and Scope
            </h2>
            
            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-4">
              3.1 Project Scope
            </h3>
            <p>All projects begin with a written proposal or project brief that outlines:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Scope of work and deliverables</li>
              <li>Project timeline and milestones</li>
              <li>Total project fee</li>
              <li>Payment schedule</li>
              <li>Revision rounds included</li>
            </ul>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              3.2 Scope Changes
            </h3>
            <p>
              Any changes to the agreed scope — including additional pages, features, or design changes beyond the agreed revisions — are considered &quot;scope changes&quot; and will be quoted and billed separately. Work on scope changes will not begin until agreed in writing.
            </p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              3.3 Client Responsibilities
            </h3>
            <p>The Client agrees to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide all required content, assets, credentials, and feedback in a timely manner</li>
              <li>Designate a single point of contact for the project</li>
              <li>Review and provide feedback within the agreed timeframe</li>
              <li>Notify Rayvok of any changes to requirements as early as possible</li>
            </ul>
            <p className="text-[15px] italic mt-2">
              Delays caused by the Client — including delayed feedback, delayed content delivery, or delayed approvals — may result in revised timelines. Rayvok is not liable for delays caused by the Client.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              4. Payment Terms
            </h2>
            
            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-4">
              4.1 Payment Structure
            </h3>
            <p>All projects follow a two-part payment structure:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="text-rayvok-offwhite font-medium">50% deposit</span> — due before any work begins</li>
              <li><span className="text-rayvok-offwhite font-medium">50% final payment</span> — due upon project completion and before final files, access credentials, or website launch are delivered</li>
            </ul>
            <p className="mt-2 text-[15px] italic">
              No work will commence until the deposit payment is received and confirmed.
            </p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              4.2 Final Delivery
            </h3>
            <p>
              Final files, source code, website access, and all deliverables will be transferred to the Client only upon receipt of the full and final payment.
            </p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              4.3 Payment Methods
            </h3>
            <p>
              Accepted payment methods will be communicated in the Project Agreement. For Indian clients, UPI, NEFT, IMPS, and bank transfer are accepted. For international clients, payment methods will be agreed upon individually.
            </p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              4.4 Late Payments
            </h3>
            <p>
              If the final payment is not received within 14 days of the project completion date, Rayvok reserves the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Suspend or take down any launched website until payment is received</li>
              <li>Withhold final file delivery until payment is received</li>
              <li>Charge a late payment fee as specified in the Project Agreement</li>
            </ul>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              4.5 Currency
            </h3>
            <p>
              All pricing is in Indian Rupees (INR) unless otherwise agreed in writing. For international clients, pricing may be quoted in USD or another agreed currency.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              5. Cancellation and Refund Policy
            </h2>
            
            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-4">
              5.1 Cancellation Before Work Begins
            </h3>
            <p>
              If the Client cancels the project after paying the deposit but before any work has commenced, a <span className="text-rayvok-offwhite font-medium">full refund of the deposit</span> will be provided within 14 business days.
            </p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              5.2 Cancellation After Work Has Commenced
            </h3>
            <p>If the Client cancels the project after work has commenced:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="text-rayvok-offwhite font-medium">The deposit is non-refundable.</span> The deposit compensates Rayvok for time, research, planning, and work already completed.</li>
              <li>If the Client has paid more than the deposit amount at the time of cancellation, Rayvok will assess the work completed and may provide a partial refund at its discretion based on work completed vs. work remaining.</li>
            </ul>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              5.3 What Constitutes &quot;Work Commenced&quot;
            </h3>
            <p>
              Work is considered commenced from the date of the first project deliverable — including but not limited to: initial discovery or briefing session, first wireframe, first design concept, or first line of code.
            </p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              5.4 Cancellation by Rayvok
            </h3>
            <p>Rayvok reserves the right to cancel a project if:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Client is unresponsive for more than 30 consecutive days without prior notice</li>
              <li>The Client requests work that is unlawful, unethical, or outside the agreed scope</li>
              <li>The working relationship becomes untenable</li>
            </ul>
            <p className="mt-2 text-[15px] italic">
              In the event Rayvok cancels a project, a pro-rata refund will be provided based on work completed.
            </p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              5.5 No Refunds After Completion
            </h3>
            <p>No refunds will be provided after the final project has been delivered, approved, and launched.</p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              6. Revisions
            </h2>
            <p>
              The number of revision rounds included in each project will be specified in the Project Agreement. Typically this is two rounds of revisions per deliverable.
            </p>
            <p>
              Revisions are defined as reasonable modifications to the existing design or functionality. A revision is not a redesign. If the Client requests a fundamental change in direction after a design has been approved, this will be treated as a scope change and billed accordingly.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              7. Intellectual Property and Ownership
            </h2>
            
            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-4">
              7.1 Client Ownership Upon Full Payment
            </h3>
            <p>
              Upon receipt of full and final payment, the Client owns all custom design and code created specifically for their project. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Final website design files</li>
              <li>Custom code written for the project</li>
              <li>All project deliverables specified in the Project Agreement</li>
            </ul>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              7.2 Rayvok Retains Rights Until Full Payment
            </h3>
            <p>
              Until full payment is received, all work — including designs, code, and deliverables — remains the intellectual property of Nanda Kumar M / Rayvok.
            </p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              7.3 Third-Party Assets
            </h3>
            <p>
              Any third-party assets used in the project — including stock images, fonts, plugins, libraries, or frameworks — are subject to their respective licences. The Client is responsible for obtaining and maintaining any required licences for third-party assets used in their project after delivery.
            </p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              7.4 Portfolio Rights
            </h3>
            <p>
              Rayvok reserves the right to display completed projects in its portfolio, on its website (rayvok.com), and on its social media channels unless the Client explicitly requests otherwise in writing before the project begins. We will never disclose confidential business information.
            </p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              7.5 Rayvok&apos;s Pre-existing IP
            </h3>
            <p>
              Any tools, frameworks, templates, processes, or methodologies developed by Rayvok independently of the Client&apos;s project remain the intellectual property of Nanda Kumar M / Rayvok.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              8. Confidentiality
            </h2>
            <p>
              Both parties agree to keep confidential any sensitive business information shared during the course of the project. Neither party shall disclose the other&apos;s confidential information to any third party without prior written consent.
            </p>
            <p>
              This clause does not apply to information that is publicly available or that must be disclosed by law.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              9. Warranties and Representations
            </h2>
            
            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-4">
              9.1 Rayvok Warrants That:
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Services will be performed with reasonable skill and care</li>
              <li>Deliverables will substantially conform to the agreed specifications</li>
              <li>Work will be original and will not knowingly infringe third-party intellectual property rights</li>
            </ul>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              9.2 Client Warrants That:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>They have the right to use all content, images, text, and assets provided to Rayvok</li>
              <li>The content provided does not infringe any third-party intellectual property, privacy, or other rights</li>
              <li>They have the authority to enter into this agreement</li>
            </ul>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              9.3 No Guarantee of Results
            </h3>
            <p>
              Rayvok does not guarantee specific business outcomes — including but not limited to: website traffic, lead volume, revenue, search engine rankings, or conversion rates. These outcomes depend on many factors outside Rayvok&apos;s control.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              10. Limitation of Liability
            </h2>
            <p>To the fullest extent permitted by Indian law:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rayvok&apos;s total liability to the Client shall not exceed the total project fee paid by the Client for the specific project in question</li>
              <li>Rayvok shall not be liable for any indirect, consequential, incidental, or punitive damages, including loss of profit, loss of data, or loss of business</li>
              <li>Rayvok is not liable for any third-party services, tools, or platforms (including but not limited to hosting providers, CMS platforms, payment gateways, or analytics tools) used as part of the project</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              11. Website Use
            </h2>
            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-4">
              11.1 Permitted Use
            </h3>
            <p>
              You may use rayvok.com for lawful purposes only. You must not use this website in any way that is unlawful, harmful, fraudulent, or that violates any applicable law or regulation.
            </p>
            
            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              11.2 Prohibited Use
            </h3>
            <p>You must not:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Attempt to gain unauthorised access to any part of this website</li>
              <li>Use this website to transmit any harmful, offensive, or spam content</li>
              <li>Copy, reproduce, or republish any content from this website without permission</li>
              <li>Use any automated tools to scrape or extract data from this website</li>
            </ul>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              12. Third-Party Links and Services
            </h2>
            <p>
              This website may link to or integrate with third-party services including Calendly. Rayvok is not responsible for the content, privacy practices, or terms of any third-party services. Use of third-party services is governed by their own terms and conditions.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              13. Changes to These Terms
            </h2>
            <p>
              Rayvok reserves the right to update these Terms at any time. The updated Terms will be posted on this page with a revised &quot;Last updated&quot; date. Continued use of this website or engagement of Rayvok&apos;s services after changes are posted constitutes acceptance of the updated Terms.
            </p>
            <p>
              For ongoing client projects, any material changes to Terms will be communicated directly.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              14. Governing Law and Dispute Resolution
            </h2>
            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-4">
              14.1 Governing Law
            </h3>
            <p>
              These Terms are governed by and construed in accordance with the laws of India, including the Indian Contract Act 1872, Information Technology Act 2000, and all other applicable Indian statutes.
            </p>
            
            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              14.2 Jurisdiction
            </h3>
            <p>
              Any disputes arising out of or relating to these Terms or any project agreement shall be subject to the exclusive jurisdiction of the courts of <strong className="font-semibold text-rayvok-offwhite">Bengaluru, Karnataka, India</strong>.
            </p>

            <h3 className="text-rayvok-offwhite text-[18px] font-semibold font-display mt-6">
              14.3 Dispute Resolution Process
            </h3>
            <p>
              Before initiating legal proceedings, both parties agree to make a good-faith effort to resolve any dispute through direct communication. Either party may initiate this process by emailing <a href="mailto:hello@rayvok.com" className="text-rayvok-offwhite hover:text-rayvok-volt underline underline-offset-4 transition-colors font-medium font-mono text-[14px]">hello@rayvok.com</a> with a written description of the dispute. Both parties will attempt to resolve the matter within 30 days of such notice.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              15. Severability
            </h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid under applicable law, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will continue in full force and effect.
            </p>
          </section>

          {/* Section 16 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              16. Entire Agreement
            </h2>
            <p>
              For any given project, these Terms together with the Project Agreement or Proposal constitute the entire agreement between Rayvok and the Client with respect to that project, and supersede all prior communications, representations, or agreements.
            </p>
          </section>

          {/* Section 17 */}
          <section className="space-y-4">
            <h2 className="text-rayvok-offwhite text-[22px] md:text-[26px] font-semibold font-display border-b border-rayvok-surface/40 pb-2">
              17. Contact
            </h2>
            <p>For any questions regarding these Terms:</p>
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
