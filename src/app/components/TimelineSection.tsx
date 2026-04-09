import { GraduationCap, Briefcase, Star } from 'lucide-react';
import timelineData from '../../data/timeline.json';

interface TimelineEvent {
  period: string;
  type: 'education' | 'work' | 'achievement';
  title: string;
  organization: string;
  description: string;
}

const timeline: TimelineEvent[] = timelineData;

const iconMap = {
  education: GraduationCap,
  work: Briefcase,
  achievement: Star
};

const colorMap = {
  education: 'bg-[#E60012]',
  work: 'bg-white',
  achievement: 'bg-[#FFD700]'
};

export function TimelineSection() {
  return (
    <div className="relative bg-white py-12 md:py-16 overflow-hidden" data-animate="fade-up">
      {/* Diagonal background accent */}
      <div className="absolute top-1/4 right-0 w-[50%] h-96 bg-black -skew-y-6 transform translate-x-1/4" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#E60012] -skew-x-6 flex items-center justify-center">
            <span className="text-white font-black text-2xl skew-x-6">03</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-black uppercase">Life Stages</h2>
        </div>
        
        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-black/20 transform md:-translate-x-1/2" />
          
          <div className="space-y-8 md:space-y-12">
            {timeline.map((event, index) => {
              const Icon = iconMap[event.type];
              const isLeft = index % 2 === 0;
              const isCurrent = index === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-6 ${
                    isLeft ? 'md:flex-row-reverse' : ''
                  }`}
                  data-animate={isLeft ? 'fade-right' : 'fade-left'}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} pl-8 sm:pl-9 md:pl-0`}>
                    <div className={`flex flex-col gap-2 ${isLeft ? 'md:items-end' : 'md:items-start'} items-start`}>
                      {/* Year badge */}
                      <div className={`inline-block px-4 py-1 ${colorMap[event.type]} -skew-x-6 mb-2 ${isCurrent ? 'ring-4 ring-[#E60012] ring-offset-2 ring-offset-white' : ''}`}>
                        <span className={`${event.type === 'work' ? 'text-black' : 'text-white'} font-black text-xs md:text-sm skew-x-6 inline-block uppercase tracking-wider`}>
                          {isCurrent ? '⚡ CURRENT' : event.period}
                        </span>
                      </div>
                      
                      <div className={`bg-white border-4 ${isCurrent ? 'border-[#E60012] shadow-2xl' : 'border-black'} p-4 md:p-5 w-full md:max-w-md ${isLeft ? 'md:ml-auto' : ''}`}>
                        <div className="flex items-start gap-3 mb-2">
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#E60012] flex-shrink-0" />
                          <h3 className="font-black text-base md:text-lg text-black">{event.title}</h3>
                        </div>
                        
                        <p className="font-black text-xs md:text-sm text-[#E60012] mb-2 uppercase tracking-wide">
                          {event.organization}
                        </p>
                        
                        <p className="text-black/70 leading-relaxed text-sm md:text-base">
                          {event.description}
                        </p>
                        
                        {isCurrent && (
                          <div className="mt-3 pt-3 border-t-2 border-[#E60012]">
                            <span className="text-xs font-black text-[#E60012] uppercase tracking-wider">
                              {event.period}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 transform md:-translate-x-1/2 -translate-y-1">
                    <div className={`w-6 h-6 ${isCurrent ? 'bg-[#FFD700] animate-pulse' : 'bg-[#E60012]'} rotate-45`} />
                  </div>
                  
                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
