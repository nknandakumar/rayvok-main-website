import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="py-32 px-6 md:px-12 border-t border-rayvok-surface text-center bg-[radial-gradient(ellipse_at_top,_var(--color-rayvok-deep)_0%,_var(--color-rayvok-black)_70%)]">
      <div className="container mx-auto max-w-3xl">
        <p className="label text-rayvok-mid rounded-lg bg-rayvok-surface/20 border border-rayvok-surface inline-block px-4 py-1.5 mb-6">Let&apos;s build something</p>
        <h2 className="text-rayvok-offwhite text-[38px] md:text-[54px] lg:text-[80px] leading-[1.1] tracking-tight mb-6">
          Ready to build a website<br />
          <span className="text-rayvok-volt">that actually works?</span>
        </h2>
        <p className="text-rayvok-mid text-body-lg mb-12">
          Tell us about your project.<br />
          We'll get back to you within 24 hours.
        </p>
        <div className="flex flex-col items-center gap-6">
          <Link href="/start" className="btn-primary text-base px-8 py-4">
            Start a project
          </Link>
          <div className="space-y-2">
            <p className="caption text-rayvok-mid tracking-wide uppercase">
              Free 30-min discovery call &middot; No commitment
            </p>
            <p className="text-rayvok-mid text-[14px]">
              Or email directly: <a href="mailto:hello@rayvok.com" className="text-rayvok-offwhite hover:text-rayvok-volt transition-colors">hello@rayvok.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
