import React from 'react';
import type { CVData } from '@/types/cv';

interface ATSTemplateProps {
  data: CVData;
}

// Europin Logo Component
const EuropinLogo = () => (
  <div className="flex items-center gap-1">
    <span className="text-[8px] font-bold text-black/40" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Europin</span>
  </div>
);

export const ATSTemplate = React.forwardRef<HTMLDivElement, ATSTemplateProps>(
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
        {/* Header - Simple and clean */}
        <div className="mb-6 p-8 pb-0">
          <h1 className="text-3xl font-bold text-black mb-3">
            {fullName}
          </h1>
          
          {/* Contact info in a single line */}
          <div className="text-sm text-black flex flex-wrap gap-x-4">
            {personal.email && <span>{personal.email}</span>}
            {personal.phone && <span>{personal.phone}</span>}
            {personal.location && <span>{personal.location}</span>}
            {personal.linkedin && <span>{personal.linkedin}</span>}
            {personal.website && <span>{personal.website}</span>}
          </div>
        </div>

        {/* Photo (if provided) - circular */}
        {personal.photo && (
          <div className="flex justify-start mb-6 px-8">
            <img
              src={personal.photo}
              alt={fullName}
              className="rounded-full object-cover border-2 border-black"
              style={{ width: imageSize, height: imageSize }}
            />
          </div>
        )}

        {/* Summary */}
        {personal.summary && (
          <div className="mb-6 px-8">
            <h2 className="text-base font-bold text-black mb-2 uppercase border-b border-black pb-1">
              Summary
            </h2>
            <p className="text-sm leading-relaxed text-black">{personal.summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="mb-6 px-8">
            <h2 className="text-base font-bold text-black mb-3 uppercase border-b border-black pb-1">
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm text-black">{exp.role}</h3>
                    <span className="text-xs text-black">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-black mb-1">{exp.company}</p>
                  <p className="text-sm text-black whitespace-pre-wrap">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-6 px-8">
            <h2 className="text-base font-bold text-black mb-3 uppercase border-b border-black pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm text-black">
                      {edu.degree}{edu.field && ` in ${edu.field}`}
                    </h3>
                    <span className="text-xs text-black">
                      {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-black">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills - comma separated for ATS */}
        {skills.length > 0 && (
          <div className="mb-6 px-8">
            <h2 className="text-base font-bold text-black mb-2 uppercase border-b border-black pb-1">
              Skills
            </h2>
            <p className="text-sm text-black">
              {skills.join(', ')}
            </p>
          </div>
        )}

        {/* Declaration */}
        {declaration.enabled && (
          <div className="mb-6 px-8">
            <h2 className="text-base font-bold text-black mb-2 uppercase border-b border-black pb-1">
              Declaration
            </h2>
            <p className="text-sm text-black">{declaration.text}</p>
          </div>
        )}

        {/* Europin Logo - Bottom Right Corner */}
        <div className="absolute bottom-4 right-4">
          <EuropinLogo />
        </div>
      </div>
    );
  }
);

ATSTemplate.displayName = 'ATSTemplate';
