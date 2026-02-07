import React from 'react';
import type { CVData } from '@/types/cv';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface GlalieTemplateProps {
  data: CVData;
}

// Europin Logo Component
const EuropinLogo = () => (
  <div className="flex items-center gap-1">
    <span className="text-[8px] font-bold text-black/40" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Europin</span>
  </div>
);

export const GlalieTemplate = React.forwardRef<HTMLDivElement, GlalieTemplateProps>(
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
        {/* Clean header */}
        <div className="p-8 border-b-2 border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-black mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {fullName}
              </h1>
              {personal.summary && (
                <p className="text-black text-sm max-w-md">{personal.summary}</p>
              )}
            </div>
            {personal.photo && (
              <img
                src={personal.photo}
                alt={fullName}
                className="rounded-full object-cover border-2 border-blue-300"
                style={{ width: imageSize, height: imageSize }}
              />
            )}
          </div>
        </div>

        {/* Two column layout */}
        <div className="flex">
          {/* Left column - 35% */}
          <div className="w-[35%] bg-gray-50 p-6">
            {/* Contact */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-black uppercase tracking-wider mb-3 border-b border-black pb-1">
                Contact
              </h3>
              <div className="space-y-2 text-sm">
                {personal.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-black" />
                    <span className="text-black break-all">{personal.email}</span>
                  </div>
                )}
                {personal.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-black" />
                    <span className="text-black">{personal.phone}</span>
                  </div>
                )}
                {personal.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-black" />
                    <span className="text-black">{personal.location}</span>
                  </div>
                )}
                {personal.linkedin && (
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-black" />
                    <span className="text-black break-all">{personal.linkedin}</span>
                  </div>
                )}
                {personal.website && (
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-black" />
                    <span className="text-black break-all">{personal.website}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Skills */}
            {skills.length > 0 && (
              <div>
                <h3 className="text-xs font-bold text-black uppercase tracking-wider mb-3 border-b border-black pb-1">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-white text-black text-xs px-3 py-1.5 rounded-lg border border-black"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column - 65% */}
          <div className="w-[65%] p-6 pb-16">
            {/* Experience */}
            {experience.length > 0 && (
              <div className="mb-6">
                <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-4 pb-2 border-b border-black">
                  Experience
                </h2>
                <div className="space-y-4">
                  {experience.map((exp) => (
                    <div key={exp.id}>
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
                <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-4 pb-2 border-b border-black">
                  Education
                </h2>
                <div className="space-y-3">
                  {education.map((edu) => (
                    <div key={edu.id}>
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
                <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-4 pb-2 border-b border-black">
                  Declaration
                </h2>
                <p className="text-sm text-black">{declaration.text}</p>
              </div>
            )}
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

GlalieTemplate.displayName = 'GlalieTemplate';
