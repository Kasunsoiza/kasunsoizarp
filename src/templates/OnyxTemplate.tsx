import React from 'react';
import type { CVData } from '@/types/cv';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface OnyxTemplateProps {
  data: CVData;
}

// Europin Logo Component
const EuropinLogo = () => (
  <div className="flex items-center gap-1">
    <span className="text-[8px] font-bold text-black/40" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Europin</span>
  </div>
);

export const OnyxTemplate = React.forwardRef<HTMLDivElement, OnyxTemplateProps>(
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
        {/* Header - white with black border */}
        <div className="border-b-4 border-black p-8">
          <div className="flex items-start gap-6">
            {personal.photo && (
              <img
                src={personal.photo}
                alt={fullName}
                className="rounded-full object-cover border-4 border-black"
                style={{ width: imageSize, height: imageSize }}
              />
            )}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-black mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {fullName}
              </h1>
              {personal.summary && (
                <p className="text-black text-sm leading-relaxed">{personal.summary}</p>
              )}
            </div>
          </div>

          {/* Contact row */}
          <div className="flex flex-wrap gap-4 mt-4 text-xs text-black">
            {personal.email && (
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {personal.email}
              </span>
            )}
            {personal.phone && (
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {personal.phone}
              </span>
            )}
            {personal.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {personal.location}
              </span>
            )}
            {personal.linkedin && (
              <span className="flex items-center gap-1">
                <Linkedin className="w-3 h-3" />
                {personal.linkedin}
              </span>
            )}
            {personal.website && (
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3" />
                {personal.website}
              </span>
            )}
          </div>
        </div>

        {/* Content - white background */}
        <div className="p-8">
          {/* Experience */}
          {experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-4 pb-2 border-b-2 border-black">
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
            <div className="mb-6">
              <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-4 pb-2 border-b-2 border-black">
                Education
              </h2>
              <div className="space-y-3">
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

          {/* Skills */}
          {skills.length > 0 && (
            <div className="mb-6">
              <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-4 pb-2 border-b-2 border-black">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-white text-black text-xs px-3 py-1 rounded border border-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Declaration */}
          {declaration.enabled && (
            <div className="mb-6">
              <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-4 pb-2 border-b-2 border-black">
                Declaration
              </h2>
              <p className="text-sm text-black">{declaration.text}</p>
            </div>
          )}
        </div>

        {/* Europin Logo - Bottom Right Corner */}
        <div className="absolute bottom-4 right-4">
          <EuropinLogo />
        </div>
      </div>
    );
  }
);

OnyxTemplate.displayName = 'OnyxTemplate';
