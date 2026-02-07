import React from 'react';
import type { CVData } from '@/types/cv';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface ModernTemplateProps {
  data: CVData;
}

// Europin Logo Component
const EuropinLogo = () => (
  <div className="flex items-center gap-1">
    <span className="text-[8px] font-bold text-black/40" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Europin</span>
  </div>
);

export const ModernTemplate = React.forwardRef<HTMLDivElement, ModernTemplateProps>(
  ({ data }, ref) => {
    const { personal, experience, education, skills, declaration } = data;
    const fullName = `${personal.firstName} ${personal.lastName}`.trim() || 'Your Name';
    
    // Calculate image size based on summary length
    const summaryLength = personal.summary?.length || 0;
    const imageSize = summaryLength > 200 ? 80 : summaryLength > 100 ? 96 : 112;

    return (
      <div
        ref={ref}
        className="a4-paper bg-white text-black relative"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Header with sidebar accent */}
        <div className="flex">
          {/* Left sidebar - white background */}
          <div className="w-[70mm] bg-gray-50 text-black min-h-[297mm]">
            <div className="p-6">
              {/* Photo - Circular */}
              {personal.photo && (
                <div className="mb-6 flex justify-center">
                  <img
                    src={personal.photo}
                    alt={fullName}
                    className="rounded-full object-cover border-4 border-black"
                    style={{ width: imageSize, height: imageSize }}
                  />
                </div>
              )}

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <h3 className="text-black text-xs font-bold uppercase tracking-wider mb-4 border-b border-black pb-1">
                  Contact
                </h3>
                {personal.email && (
                  <div className="flex items-center gap-2 text-sm text-black">
                    <Mail className="w-4 h-4 text-black" />
                    <span className="break-all">{personal.email}</span>
                  </div>
                )}
                {personal.phone && (
                  <div className="flex items-center gap-2 text-sm text-black">
                    <Phone className="w-4 h-4 text-black" />
                    <span>{personal.phone}</span>
                  </div>
                )}
                {personal.location && (
                  <div className="flex items-center gap-2 text-sm text-black">
                    <MapPin className="w-4 h-4 text-black" />
                    <span>{personal.location}</span>
                  </div>
                )}
                {personal.linkedin && (
                  <div className="flex items-center gap-2 text-sm text-black">
                    <Linkedin className="w-4 h-4 text-black" />
                    <span className="break-all">{personal.linkedin}</span>
                  </div>
                )}
                {personal.website && (
                  <div className="flex items-center gap-2 text-sm text-black">
                    <Globe className="w-4 h-4 text-black" />
                    <span className="break-all">{personal.website}</span>
                  </div>
                )}
              </div>

              {/* Skills */}
              {skills.length > 0 && (
                <div>
                  <h3 className="text-black text-xs font-bold uppercase tracking-wider mb-4 border-b border-black pb-1">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-white text-black text-xs px-2 py-1 rounded border border-black"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main content - white background */}
          <div className="flex-1 p-8 bg-white pb-16">
            {/* Name & Title */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-black mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {fullName}
              </h1>
              {personal.summary && (
                <p className="text-black text-sm leading-relaxed">{personal.summary}</p>
              )}
            </div>

            {/* Experience */}
            {experience.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-bold text-black mb-4 pb-2 border-b-2 border-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Experience
                </h2>
                <div className="space-y-4">
                  {experience.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-black">{exp.role}</h3>
                        <span className="text-xs text-black font-mono">
                          {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                        </span>
                      </div>
                      <p className="text-sm text-black mb-1 font-medium">{exp.company}</p>
                      <p className="text-sm text-black whitespace-pre-wrap">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {education.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-bold text-black mb-4 pb-2 border-b-2 border-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Education
                </h2>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.id}>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-black">
                          {edu.degree} {edu.field && `in ${edu.field}`}
                        </h3>
                        <span className="text-xs text-black font-mono">
                          {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                        </span>
                      </div>
                      <p className="text-sm text-black">{edu.institution}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Declaration */}
            {declaration.enabled && (
              <div className="mb-8">
                <h2 className="text-lg font-bold text-black mb-4 pb-2 border-b-2 border-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
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

ModernTemplate.displayName = 'ModernTemplate';
