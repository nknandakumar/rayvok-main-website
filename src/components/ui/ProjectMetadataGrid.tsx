import React from 'react';

interface ProjectMetadataProps {
  client: string;
  industry: string;
  country: string;
  platform: string;
}

export default function ProjectMetadataGrid({ client, industry, country, platform }: ProjectMetadataProps) {
  return (
    <div className="w-full bg-[#ECEAE4] border border-[#E1DDD5] px-6 md:px-12 mb-16 shadow-[0_4px_30px_rgba(0,0,0,0.01)]">
      {/* Mobile Layout: Vertical rows with labels on the left and values on the right */}
      <div className="block md:hidden py-2">
        <div className="flex justify-between items-center py-5 border-b border-[#E1DDD5]/60 last:border-b-0">
          <span className="font-mono text-gray-900 font-semibold text-[16px] tracking-wider uppercase">Client</span>
          <span className="text-rayvok-black font-display font-medium text-[16px]">{client}</span>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-[#E1DDD5]/60 last:border-b-0">
          <span className="font-mono text-[#8C8C85] text-[16px] tracking-wider uppercase">Industry</span>
          <span className="text-rayvok-black font-display font-medium text-[16px]">{industry}</span>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-[#E1DDD5]/60 last:border-b-0">
          <span className="font-mono text-[#8C8C85] text-[16px] tracking-wider uppercase">Country</span>
          <span className="text-rayvok-black font-display font-medium text-[16px]">{country}</span>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-[#E1DDD5]/60 last:border-b-0">
          <span className="font-mono text-[#8C8C85] text-[16px] tracking-wider uppercase">Platform</span>
          <span className="text-rayvok-black font-display font-medium text-[16px]">{platform}</span>
        </div>
      </div>

      {/* Desktop Layout: Horizontal grid columns separated by centered vertical dividers */}
      <div className="hidden md:grid grid-cols-4 items-center w-full">
        {/* Client Column */}
        <div className="relative py-10 pr-8 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-12 after:w-[1px] after:bg-[#E1DDD5] last:after:hidden">
          <p className="font-mono text-[#8C8C85] text-[16px] tracking-wider uppercase mb-2">Client</p>
          <p className="text-rayvok-black font-display font-medium text-[16px] md:text-[32px]">{client}</p>
        </div>

        {/* Industry Column */}
        <div className="relative py-10 pl-8 pr-8 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-12 after:w-[1px] after:bg-[#E1DDD5] last:after:hidden">
          <p className="font-mono text-[#8C8C85] text-[16px] tracking-wider uppercase mb-2">Industry</p>
          <p className="text-rayvok-black font-display font-medium text-[16px] md:text-[32px]">{industry}</p>
        </div>

        {/* Country Column */}
        <div className="relative py-10 pl-8 pr-8 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-12 after:w-[1px] after:bg-[#E1DDD5] last:after:hidden">
          <p className="font-mono text-[#8C8C85] text-[16px] tracking-wider uppercase mb-2">Country</p>
          <p className="text-rayvok-black font-display font-medium text-[16px] md:text-[32px]">{country}</p>
        </div>

        {/* Platform Column */}
        <div className="relative py-10 pl-8">
          <p className="font-mono text-[#8C8C85] text-[16px] tracking-wider uppercase mb-2">Platform</p>
          <p className="text-rayvok-black font-display font-medium text-[16px] md:text-[32px]">{platform}</p>
        </div>
      </div>
    </div>
  );
}

