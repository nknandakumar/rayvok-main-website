import FinalCTASection from "@/components/sections/home/FinalCTASection";

export const metadata = {
  title: "About — Rayvok",
  description: "We exist to make great products impossible to ignore.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Outcomes over output",
      body: "We measure success by what the website does, not how it looks."
    },
    {
      title: "Honesty over comfort",
      body: "We tell you what you need to hear, not what you want to hear. Real partners do."
    },
    {
      title: "Craft without compromise",
      body: "Every detail is intentional. We don't rush to ship something we're not proud of."
    },
    {
      title: "Boldness by default",
      body: "Safe design is invisible design. We push for the version of your brand that stands out."
    }
  ];

  return (
    <>
      <section className="pt-32 pb-24 px-6 md:px-12 bg-rayvok-black border-b border-rayvok-surface">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <p className="label text-rayvok-mid mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
              About Rayvok
            </p>
            <h1 className="text-rayvok-offwhite mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
              We exist to make great products <span className="text-rayvok-volt">impossible to ignore.</span>
            </h1>
            
            <div className="space-y-6 text-rayvok-mid text-[20px] max-w-2xl mx-auto leading-relaxed animate-fade-in-up text-left" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
              <p>
                Most businesses have a website. Not all of them have a presence.
              </p>
              <p>
                There's a difference — and it shows in your enquiries, your conversion rate, and how seriously people take you when they land on your site for the first time.
              </p>
              <p className="text-rayvok-offwhite font-medium">
                Rayvok was built to close that gap.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-rayvok-deep border-b border-rayvok-surface">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-rayvok-offwhite text-[32px] sticky top-32">
                Who's behind Rayvok
              </h2>
            </div>
            
            <div className="lg:col-span-7 space-y-6 text-rayvok-mid text-body-lg">
              <p>
                I'm Nanda Kumar M — founder and the person who designs and builds every Rayvok project.
              </p>
              <p>
                I started Rayvok because I kept seeing the same problem: great businesses and great products being overlooked because their online presence didn't match the quality of what they actually offered.
              </p>
              <p>
                I'm based in Bangalore, and I work with businesses, SaaS products, and professionals across India who are serious about growing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-rayvok-black">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-rayvok-offwhite text-[32px]">How we work</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card bg-rayvok-deep">
                <div className="flex gap-4 mb-4">
                  <span className="text-rayvok-volt font-display text-xl">0{index + 1}</span>
                  <h3 className="text-rayvok-offwhite">{value.title}</h3>
                </div>
                <p className="text-rayvok-mid text-[16px] pl-9">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
