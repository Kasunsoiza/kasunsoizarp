import React from 'react';
import type { CVData } from '@/types/cv';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface LeafishTemplateProps {
  data: CVData;
}

// Europin Logo Component
const EuropinLogo = () => (
  <div className="flex items-center gap-1">
    <span className="text-[8px] font-bold text-black/40" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Europin</span>
  </div>
);

export const LeafishTemplate = React.forwardRef<HTMLDivElement, LeafishTemplateProps>(
  ({ data }, ref) => {
    const { personal, experience, education, skills, declaration } = data;
    const fullName = `${personal.firstName} ${personal.lastName}`.trim() || 'Your Name';
    
    // Calculate image size based on summary length
    const summaryLength = personal.summary?.length || 0;
    const imageSize = summaryLength > 200 ? 80 : summaryLength > 100 ? 96 : 112;

    return (
      <div
        ref={ref}
        className="a4-paper bg-white text-black relative pb-16"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Nature-inspired header */}
        <div className="relative">
          <div className="bg-emerald-500 p-8">
            <div className="flex items-center gap-6">
              {personal.photo && (
                <img
                  src={personal.photo}
                  alt={fullName}
                  className="rounded-full object-cover border-4 border-white"
                  style={{ width: imageSize, height: imageSize }}
                />
              )}
              <div>
                <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {fullName}
                </h1>
                {personal.summary && (
                  <p className="text-white text-sm max-w-md">{personal.summary}</p>
                )}
              </div>
            </div>
          </div>
          {/* Decorative wave */}
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path fill="white" d="M0,60 L0,30 Q360,60 720,30 T1440,30 L1440,60 Z"/>
          </svg>
        </div>

        {/* Content */}
        <div className="px-8 pb-8">
          {/* Contact pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {personal.email && (
              <span className="flex items-center gap-1 bg-emerald-50 text-black text-xs px-3 py-1.5 rounded-full border border-emerald-200">
                <Mail className="w-3 h-3" />
                {personal.email}
              </span>
            )}
            {personal.phone && (
              <span className="flex items-center gap-1 bg-emerald-50 text-black text-xs px-3 py-1.5 rounded-full border border-emerald-200">
                <Phone className="w-3 h-3" />
                {personal.phone}
              </span>
            )}
            {personal.location && (
              <span className="flex items-center gap-1 bg-emerald-50 text-black text-xs px-3 py-1.5 rounded-full border border-emerald-200">
                <MapPin className="w-3 h-3" />
                {personal.location}
              </span>
            )}
            {personal.linkedin && (
              <span className="flex items-center gap-1 bg-emerald-50 text-black text-xs px-3 py-1.5 rounded-full border border-emerald-200">
                <Linkedin className="w-3 h-3" />
                LinkedIn
              </span>
            )}
            {personal.website && (
              <span className="flex items-center gap-1 bg-emerald-50 text-black text-xs px-3 py-1.5 rounded-full border border-emerald-200">
                <Globe className="w-3 h-3" />
                Website
              </span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Left column - 2/3 */}
            <div className="col-span-2">
              {/* Experience */}
              {experience.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-black pb-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Experience
                  </h2>
                  <div className="space-y-4">
                    {experience.map((exp) => (
                      <div key={exp.id} className="border-l-2 border-emerald-300 pl-4">
                        <h3 className="font-semibold text-black">{exp.role}</h3>
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-sm text-black">{exp.company}</p>
                          <span className="text-xs text-black font-mono">
                            {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                          </span>
                        </div>
                        <p className="text-sm text-black whitespace-pre-wrap">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education */}
              {education.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-black pb-2">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    Education
                  </h2>
                  <div className="space-y-3">
                    {education.map((edu) => (
                      <div key={edu.id} className="border-l-2 border-teal-300 pl-4">
                        <h3 className="font-semibold text-black">
                          {edu.degree} {edu.field && `in ${edu.field}`}
                        </h3>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-black">{edu.institution}</p>
                          <span className="text-xs text-black font-mono">
                            {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Declaration */}
              {declaration.enabled && (
                <div className="mb-6">
                  <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-black pb-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    Declaration
                  </h2>
                  <p className="text-sm text-black">{declaration.text}</p>
                </div>
              )}
            </div>

            {/* Right column - 1/3 */}
            <div className="relative">
              {skills.length > 0 && (
                <div>
                  <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-black pb-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-emerald-50 text-black text-xs px-3 py-1.5 rounded-lg border border-emerald-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Europin Logo - Bottom Right Corner */}
        <div className="absolute bottom-4 right-4">
          <EuropinLogo />
        </div>
      </div>
    );
  }
);

LeafishTemplate.displayName = 'LeafishTemplate';
