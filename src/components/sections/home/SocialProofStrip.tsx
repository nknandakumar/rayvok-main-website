"use client";

const clients = [
  {
    name: "Paddock Passion",
    logo: "https://i.pinimg.com/736x/de/6e/62/de6e62fbbd367872a8a949f490a3d68e.jpg",
  },
  {
    name: "Cluvion",
    logo: "https://i.pinimg.com/736x/fa/92/99/fa929980ef0e2dc14748ff14920bbbdf.jpg",
  },
  {
    name: "Hidden Ants Media",
    logo: "https://i.pinimg.com/736x/9d/8e/96/9d8e960f8b8fff00027918eed8dd36b9.jpg",
  },
  {
    name: "Fblcok 14",
    logo: "https://i.pinimg.com/736x/56/4c/71/564c71f990e1ffa66b20ae0b38fda428.jpg",
}
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
