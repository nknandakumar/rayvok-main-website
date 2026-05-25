import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rayvok-deep pt-24 pb-12 border-t border-rayvok-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0 mb-20">
          <div>
            <Image
              src="https://res.cloudinary.com/dokrpo5fl/image/upload/v1779005682/wordmarklight_bx3hju.png"
              alt="Rayvok Logo"
              width={160}
              height={40}
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-rayvok-mid font-ui text-[13px] tracking-[0.06em] uppercase">
              Web design & development
            </p>
          </div>

          <div className="flex flex-col gap-2 items-start md:items-end font-ui text-[13px] tracking-[0.06em] uppercase">
            <a
              href="mailto:hello@rayvok.com"
              className="text-rayvok-offwhite hover:text-rayvok-volt transition-colors"
            >
              hello@rayvok.com
            </a>
            <a
              href="https://rayvok.com"
              className="text-rayvok-offwhite hover:text-rayvok-volt transition-colors"
            >
              rayvok.com
            </a>
            <a
              href="https://twitter.com/rayvokHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rayvok-offwhite hover:text-rayvok-volt transition-colors"
            >
              @rayvokHQ
            </a>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center pt-8 border-t border-rayvok-surface/50 gap-8 md:gap-0">
          <p className="text-rayvok-mid text-[12px] font-ui uppercase tracking-[0.04em]">
            &copy; {currentYear} Rayvok. All rights reserved.
          </p>

          <nav className="flex flex-wrap items-center gap-x-8 gap-y-4 font-ui text-[12px] tracking-[0.06em] uppercase text-rayvok-mid">
            <Link href="/work" className="hover:text-rayvok-volt transition-colors">
              Work
            </Link>
            <Link href="/about" className="hover:text-rayvok-volt transition-colors">
              About
            </Link>
            <Link href="/start" className="hover:text-rayvok-volt transition-colors">
              Start a project
            </Link>
            <Link href="/privacy" className="hover:text-rayvok-volt transition-colors">
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
