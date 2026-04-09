import { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { BioSection } from './components/BioSection';
import { PublicationsSection } from './components/PublicationsSection';
import { TimelineSection } from './components/TimelineSection';
import personalLinksData from '../data/personalLinks.json';
import { initScrollAnimations } from './scrollAnimations';

interface PersonalLink {
  label: string;
  href: string;
}

const personalLinks: PersonalLink[] = personalLinksData;

export default function App() {
  useEffect(() => {
    return initScrollAnimations();
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <BioSection />
      <PublicationsSection />
      <TimelineSection />
      
      {/* Footer */}
      <footer className="bg-black py-12 border-t-4 border-[#E60012]" data-animate="fade-up">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/60 text-sm">
              © 2026 Shamit Fatin. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center">
              {personalLinks.map((link) => {
                const isExternal = link.href.startsWith('http');
                const isFile = link.href.toLowerCase().endsWith('.pdf');
                const target = isExternal || isFile ? '_blank' : undefined;
                const rel = isExternal || isFile ? 'noopener noreferrer' : undefined;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={target}
                    rel={rel}
                    className="text-white hover:text-[#E60012] transition-colors uppercase tracking-wider text-sm font-black"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
