import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 bg-[radial-gradient(ellipse_at_center,_var(--color-rayvok-deep)_0%,_var(--color-rayvok-black)_100%)]">
      <div className="text-center">
        <h1 className="text-rayvok-volt font-display text-[120px] leading-none mb-4 opacity-20">
          404
        </h1>
        <h2 className="text-rayvok-offwhite text-[32px] md:text-[48px] mb-4">
          This page doesn't exist.
        </h2>
        <p className="text-rayvok-mid text-[18px] mb-10">
          But your new website can.
        </p>
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}
