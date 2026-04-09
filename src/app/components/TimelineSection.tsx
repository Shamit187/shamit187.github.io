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
    <div className="relative bg-white py-24 overflow-hidden">
      {/* Diagonal background accent */}
      <div className="absolute top-1/4 right-0 w-[50%] h-96 bg-black -skew-y-6 transform translate-x-1/4" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-20">
          <div className="w-16 h-16 bg-[#E60012] -skew-x-6 flex items-center justify-center">
            <span className="text-white font-black text-2xl skew-x-6">03</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-black uppercase">Life Stages</h2>
        </div>
        
        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-black/20 transform md:-translate-x-1/2" />
          
          <div className="space-y-16">
            {timeline.map((event, index) => {
              const Icon = iconMap[event.type];
              const isLeft = index % 2 === 0;
              const isCurrent = index === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    isLeft ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                    <div className={`inline-block ${isLeft ? 'md:float-right' : ''}`}>
                      {/* Year badge */}
                      <div className={`inline-block px-6 py-2 ${colorMap[event.type]} -skew-x-6 mb-4 ${isCurrent ? 'ring-4 ring-[#E60012] ring-offset-2 ring-offset-white' : ''}`}>
                        <span className={`${event.type === 'work' ? 'text-black' : 'text-white'} font-black text-sm skew-x-6 inline-block uppercase tracking-wider`}>
                          {isCurrent ? '⚡ CURRENT' : event.period}
                        </span>
                      </div>
                      
                      <div className={`bg-white border-4 ${isCurrent ? 'border-[#E60012] shadow-2xl' : 'border-black'} p-6 max-w-md ${isLeft ? 'md:ml-auto' : ''}`}>
                        <div className="flex items-start gap-3 mb-3">
                          <Icon className="w-6 h-6 text-[#E60012] flex-shrink-0" />
                          <h3 className="font-black text-xl text-black">{event.title}</h3>
                        </div>
                        
                        <p className="font-black text-sm text-[#E60012] mb-3 uppercase tracking-wide">
                          {event.organization}
                        </p>
                        
                        <p className="text-black/70 leading-relaxed">
                          {event.description}
                        </p>
                        
                        {isCurrent && (
                          <div className="mt-4 pt-4 border-t-2 border-[#E60012]">
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