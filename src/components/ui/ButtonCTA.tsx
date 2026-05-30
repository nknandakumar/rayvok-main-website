import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  arrowAbsolute?: boolean;
  showArrow?: boolean;
}

export default function ButtonCTA({ href, children, className = "", onClick, arrowAbsolute = false, showArrow = true }: ButtonCTAProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group inline-flex p-[3px] rounded-full border border-rayvok-volt/40 hover:border-rayvok-volt transition-all duration-300 ${className}`}
    >
      <span className={`relative flex items-center justify-center bg-rayvok-volt text-rayvok-black font-ui font-medium text-[13px] tracking-[0.06em] uppercase rounded-full transition-all duration-300 group-hover:bg-rayvok-black group-hover:text-rayvok-volt w-full ${
        !showArrow ? "px-8 py-3.5" : (arrowAbsolute ? "pl-10 pr-10 py-3.5" : "pl-7 pr-2.5 py-3 md:py-2.5 gap-4")
      }`}>
        <span>{children}</span>
        {showArrow && (
          <span className={`w-8 h-8 rounded-full bg-rayvok-black text-rayvok-volt flex items-center justify-center transition-all duration-300 group-hover:bg-rayvok-volt group-hover:text-rayvok-black shrink-0 ${
            arrowAbsolute ? "absolute right-2.5 top-1/2 -translate-y-1/2" : ""
          }`}>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
          </span>
        )}
      </span>
    </Link>
  );
}
