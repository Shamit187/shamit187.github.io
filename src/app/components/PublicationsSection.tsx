import { ExternalLink, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import publicationsData from '../../data/publications.json';

interface Publication {
  name: string;
  abstract: string;
  year: number;
  authors?: string[];
  coAuthors: string[];
  venue: string;
  type: 'journal' | 'conference' | 'workshop';
  link: string;
}

const publications: Publication[] = publicationsData;

export function PublicationsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <div className="relative bg-black py-24 overflow-hidden" data-animate="fade-up">
      {/* Subtle accent background */}
      <div className="absolute top-0 left-0 w-[40%] h-full bg-[#E60012]/5 skew-x-12 transform -translate-x-1/3" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E60012]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-6xl md:text-8xl font-black text-white uppercase leading-none">
            Publications
          </h2>
          <div className="mb-2 flex items-center gap-2">
            <div className="w-8 h-8 bg-[#E60012] -skew-x-6 flex items-center justify-center">
              <span className="text-white font-black text-sm skew-x-6">02</span>
            </div>
          </div>
        </div>
        
        {/* Publications list */}
        <div className="max-w-6xl space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group relative bg-white/5 hover:bg-white/10 transition-all duration-300 border-l-4 border-[#E60012]"
              data-animate="fade-up"
            >
              <div className="p-8 flex flex-col md:flex-row gap-6">
                {/* Year badge */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[#E60012] -skew-y-3 flex items-center justify-center">
                    <span className="text-white font-black text-2xl skew-y-3">{pub.year}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#E60012] flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-black text-white group-hover:text-[#E60012] transition-colors">
                      {pub.name}
                    </h3>
                  </div>
                  
                  <p className="text-white/60 text-sm">
                    {(pub.authors && pub.authors.length > 0
                      ? pub.authors
                      : ['Shamit Fatin', ...pub.coAuthors]
                    ).map((author, authorIndex, authorList) => (
                      <span
                        key={`${author}-${authorIndex}`}
                        className={author === 'Shamit Fatin' ? 'font-black text-white' : undefined}
                      >
                        {author}
                        {authorIndex < authorList.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-white/80">{pub.venue}</span>
                    <span className="px-3 py-1 bg-white/10 text-white/70 text-xs uppercase tracking-wider">
                      {pub.type}
                    </span>
                  </div>
                  
                  {/* Expandable Abstract */}
                  {expandedId === index && (
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <p className="text-white/70 leading-relaxed">
                        {pub.abstract}
                      </p>
                    </div>
                  )}
                  
                  {/* Toggle Abstract Button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-2 text-[#E60012] hover:text-white transition-colors text-sm font-bold uppercase tracking-wider"
                  >
                    {expandedId === index ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Hide Abstract
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        Show Abstract
                      </>
                    )}
                  </button>
                </div>
                
                {/* Link indicator */}
                <div className="flex-shrink-0 self-start">
                  {pub.link ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-white/5 hover:bg-[#E60012] transition-all group/link"
                    >
                      <ExternalLink className="w-6 h-6 text-white/40 group-hover/link:text-white transition-colors" />
                    </a>
                  ) : (
                    <div className="block p-3 bg-white/5 opacity-30">
                      <ExternalLink className="w-6 h-6 text-white/40" />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-[#E60012] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
