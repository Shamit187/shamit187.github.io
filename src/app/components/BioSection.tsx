export function BioSection() {
  return (
    <div className="relative bg-white py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E60012]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-2 bg-[#E60012]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-black flex items-center justify-center -skew-x-6">
              <span className="text-[#E60012] font-black text-xl skew-x-6">01</span>
            </div>
            <h2 className="text-4xl font-black text-black uppercase">About</h2>
            <div className="flex-1 h-px bg-black/20" />
          </div>
          
          {/* Bio content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 space-y-6">
              <p className="text-xl text-black/80 leading-relaxed">
                Hi there! I'm Shamit Fatin, a first-year PhD student at the University of Utah, 
                working under Professor Anna Fariha. My research dives into the realm of databases 
                and machine learning.
              </p>
              
              <p className="text-lg text-black/70 leading-relaxed">
                I completed my undergrad in Computer Science and Engineering at BUET, where I also 
                worked as a research assistant.
              </p>
              
              <p className="text-lg text-black/70 leading-relaxed">
                Outside the academic grind, I'm into music, anime, games, and art.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-black text-white text-sm uppercase tracking-wide">Databases</span>
                <span className="px-4 py-2 bg-[#E60012] text-white text-sm uppercase tracking-wide">Machine Learning</span>
                <span className="px-4 py-2 border-2 border-black text-black text-sm uppercase tracking-wide">Software Engineering</span>
              </div>
            </div>
            
            {/* Stats sidebar */}
            <div className="md:col-span-4 space-y-6">
              <div className="bg-black p-6 -skew-y-2">
                <div className="skew-y-2">
                  <div className="text-5xl font-black text-[#E60012]">3</div>
                  <div className="text-white/70 text-sm uppercase tracking-wider mt-2">Publications</div>
                </div>
              </div>
              
              <div className="border-4 border-[#E60012] p-6 skew-y-2">
                <div className="-skew-y-2">
                  <div className="text-5xl font-black text-black">1st</div>
                  <div className="text-black/70 text-sm uppercase tracking-wider mt-2">Year PhD Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}