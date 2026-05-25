import Image from "next/image";
import Link from "next/link";
import FinalCTASection from "@/components/sections/home/FinalCTASection";

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Simulated data based on the PRD template
  const project = {
    name: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    category: "Web design & development",
    year: "2024",
    client: "Acme Corp",
    services: "Website Design & Development",
    timeline: "4 weeks",
    challenge: "The client had a great product but their website looked like a template. It wasn't converting visitors, and their bounce rate was over 70%. They needed a presence that matched the quality of their service and could act as their best salesperson 24/7.",
    approach: "We started by tearing down their existing structure. We rebuilt the architecture around a single primary conversion goal. The design moved away from generic corporate blue to a bold, confident palette. Every headline was rewritten to focus on the outcome rather than the feature.",
    stats: [
      "3× more inbound leads",
      "Launched in 4 weeks",
      "95 Lighthouse score"
    ],
    testimonial: {
      quote: "Before Rayvok, our website looked like we were a side project. Within two weeks of the new site going live, we had three qualified leads reach out — more than the entire previous quarter.",
      author: "Sarah",
      role: "Founder"
    },
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2670&auto=format&fit=crop"
    ]
  };

  return (
    <>
      <article className="pt-32 pb-24 px-6 md:px-12 bg-rayvok-black">
        <div className="container mx-auto">
          {/* Header */}
          <div className="max-w-4xl mb-16">
            <p className="label text-rayvok-mid mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
              {project.category} &middot; {project.year}
            </p>
            <h1 className="text-rayvok-offwhite mb-12 text-[40px] md:text-[64px] animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
              {project.name}
            </h1>
            
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
              <div className="border-t border-rayvok-surface pt-4">
                <p className="caption text-rayvok-mid mb-1">Client</p>
                <p className="text-rayvok-offwhite font-medium">{project.client}</p>
              </div>
              <div className="border-t border-rayvok-surface pt-4">
                <p className="caption text-rayvok-mid mb-1">Services</p>
                <p className="text-rayvok-offwhite font-medium">{project.services}</p>
              </div>
              <div className="border-t border-rayvok-surface pt-4">
                <p className="caption text-rayvok-mid mb-1">Timeline</p>
                <p className="text-rayvok-offwhite font-medium">{project.timeline}</p>
              </div>
            </div>
          </div>
          
          {/* Main Image */}
          <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden mb-24 animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            <Image 
              src={project.images[0]} 
              alt={`${project.name} main showcase`}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="max-w-3xl mx-auto space-y-24">
            {/* Challenge */}
            <section>
              <h4 className="label text-rayvok-mid mb-4">The challenge</h4>
              <h2 className="text-rayvok-offwhite text-[32px] mb-6">What we were solving</h2>
              <div className="text-rayvok-mid text-body-lg leading-relaxed">
                <p>{project.challenge}</p>
              </div>
            </section>

            {/* Approach */}
            <section>
              <h4 className="label text-rayvok-mid mb-4">Our approach</h4>
              <h2 className="text-rayvok-offwhite text-[32px] mb-6">How we thought about it</h2>
              <div className="text-rayvok-mid text-body-lg leading-relaxed">
                <p>{project.approach}</p>
              </div>
            </section>

            {/* Middle Image */}
            <div className="relative aspect-[4/3] md:aspect-[16/9] w-full rounded-lg overflow-hidden my-16">
              <Image 
                src={project.images[1]} 
                alt={`${project.name} detail view`}
                fill
                className="object-cover"
              />
            </div>

            {/* Result */}
            <section>
              <h4 className="label text-rayvok-mid mb-4">The result</h4>
              <h2 className="text-rayvok-offwhite text-[32px] mb-8">What changed</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {project.stats.map((stat, i) => (
                  <div key={i} className="card bg-rayvok-deep text-center py-10">
                    <p className="text-rayvok-volt font-display text-[24px] md:text-[32px] leading-tight mb-2">
                      {stat.split(' ')[0]} {stat.split(' ')[1]}
                    </p>
                    <p className="text-rayvok-mid text-[14px]">
                      {stat.split(' ').slice(2).join(' ')}
                    </p>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-rayvok-deep border border-rayvok-surface p-8 md:p-12 rounded-lg">
                <p className="font-ui text-rayvok-volt text-3xl mb-4">"</p>
                <p className="text-rayvok-offwhite text-[20px] md:text-[24px] leading-relaxed mb-8">
                  {project.testimonial.quote}
                </p>
                <div>
                  <p className="text-rayvok-offwhite font-medium">{project.testimonial.author}</p>
                  <p className="text-rayvok-mid text-[14px]">{project.testimonial.role}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center border-t border-rayvok-surface bg-rayvok-deep">
        <div className="container mx-auto">
          <h2 className="text-rayvok-offwhite mb-8 text-[32px]">Have a similar project?</h2>
          <Link href="/start" className="btn-primary">
            Let's talk
          </Link>
        </div>
      </section>
    </>
  );
}
