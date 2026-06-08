"use client";

const clients = [
  {
    name: "Paddock Passion",
    logo: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1779033013/logo_1_ombqjw.avif",
  },
  {
    name: "Space of Tools",
    logo: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1780940347/logo_1_p5zhao.webp",
  },
  {
    name: "Cenimax",
    logo: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1779034326/d04970823d5c151bf1b54b63a6c710dd_moosnb.jpg",
  },
];

export default function SocialProofStrip() {
  return (
    <section className="py-10 pt-10 flex justify-center px-4 md:px-0">
      {/* Constrained centered window */}
      <div className="w-full max-w-lg flex flex-col items-center">
        <p className="text-neutral-400 font-ui mb-4 text-[14px] md:text-[18px] tracking-widest uppercase text-center shrink-0 whitespace-nowrap">
          Trusted By
        </p>

        <div className="relative overflow-hidden w-full">
          <div className="flex whitespace-nowrap w-max animate-marquee-right">
            {/* Group 1 */}
            <div className="flex shrink-0 items-center gap-12 pr-12">
              {clients.map((client, idx) => (
                <span
                  key={`client1-${idx}`}
                  className="inline-flex items-center gap-2.5 font-ui text-rayvok-offwhite/50 text-[14px] uppercase tracking-widest"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-[18px] w-auto rounded-full object-contain"
                    style={{ filter: "grayscale(100%) brightness(0.6)" }}
                  />
                  {client.name}
                </span>
              ))}
            </div>
            {/* Group 2 — clone for seamless loop */}
            <div className="flex shrink-0 items-center gap-12 pr-12">
              {clients.map((client, idx) => (
                <span
                  key={`client2-${idx}`}
                  className="inline-flex items-center gap-2.5 font-ui text-rayvok-offwhite/50 text-[14px] uppercase tracking-widest"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-[18px] w-auto rounded-full object-contain"
                    style={{ filter: "grayscale(100%) brightness(0.6)" }}
                  />
                  {client.name}
                </span>
              ))}
            </div>
          </div>

          {/* Left fade */}
          <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-rayvok-black to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-rayvok-black to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
