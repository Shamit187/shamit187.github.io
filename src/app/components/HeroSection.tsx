import { ImageWithFallback } from './figma/ImageWithFallback';
import heroPhoto from '../../../photos/me.png';

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Red diagonal accent */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-[#E60012] -skew-x-12 transform translate-x-1/4 z-0" />
      
      {/* Black overlay with cut */}
      <div className="absolute top-0 left-0 w-[70%] h-full bg-black z-10 clip-diagonal" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text content */}
          <div className="space-y-6" data-animate="fade-up">
            <div className="inline-block px-6 py-2 bg-[#E60012] -skew-x-6 transform">
              <span className="text-white text-sm tracking-wider skew-x-6 inline-block uppercase">PhD Researcher</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none">
              SHAMIT
              <span className="block text-[#E60012] -ml-2">FATIN</span>
            </h1>
            
            <div className="border-l-4 border-[#E60012] pl-6 py-4">
              <p className="text-white/90 text-lg">
                Databases × Machine Learning × Innovation
              </p>
            </div>
            
            {/* Decorative element */}
            <div className="flex gap-3 items-center">
              <div className="w-16 h-1 bg-[#E60012]" />
              <div className="w-8 h-1 bg-white/50" />
              <div className="w-4 h-1 bg-white/30" />
            </div>
          </div>
          
          {/* Photo */}
          <div className="relative lg:justify-self-end" data-animate="fade-left">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#E60012] -skew-y-3 z-0" />
            <div className="relative z-10 w-80 h-96 overflow-hidden -skew-y-3 border-4 border-white">
              <ImageWithFallback
                src={heroPhoto}
                alt="Shamit Fatin"
                className="w-full h-full object-cover skew-y-3 scale-110"
              />
            </div>
            
            {/* Photo label */}
            <div className="absolute -bottom-6 -right-6 bg-white px-6 py-3 -skew-x-6 z-20">
              <span className="text-black font-black skew-x-6 inline-block text-sm">PROFILE_2026</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-[#E60012]" />
        <div className="w-2 h-2 bg-[#E60012] animate-bounce" />
      </div>
    </div>
  );
}
