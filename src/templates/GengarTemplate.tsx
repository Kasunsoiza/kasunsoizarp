import React from 'react';
import type { CVData } from '@/types/cv';

interface GengarTemplateProps {
  data: CVData;
}

// Europin Logo Component
const EuropinLogo = () => (
  <div className="flex items-center gap-1">
    <span className="text-[8px] font-bold text-black/40" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Europin</span>
  </div>
);

export const GengarTemplate = React.forwardRef<HTMLDivElement, GengarTemplateProps>(
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
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {/* Bold header with purple accent */}
        <div className="border-b-4 border-purple-600 p-10">
          <div className="flex items-start gap-8">
            {personal.photo && (
              <img
                src={personal.photo}
                alt={fullName}
                className="rounded-full object-cover border-4 border-purple-600"
                style={{ width: imageSize, height: imageSize }}
              />
            )}
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-black mb-3">
                {fullName}
              </h1>
              {personal.summary && (
                <p className="text-black text-base leading-relaxed max-w-lg">{personal.summary}</p>
              )}
            </div>
          </div>
        </div>

        {/* Contact strip */}
        <div className="border-b-2 border-purple-200 text-black px-10 py-3">
          <div className="flex flex-wrap gap-6 text-sm">
            {personal.email && <span>{personal.email}</span>}
            {personal.phone && <span>{personal.phone}</span>}
            {personal.location && <span>{personal.location}</span>}
            {personal.linkedin && <span>{personal.linkedin}</span>}
            {personal.website && <span>{personal.website}</span>}
          </div>
        </div>

        {/* Content */}
        <div className="p-10">
          {/* Experience */}
          {experience.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-5 pb-2 border-b-4 border-purple-600">
                Experience
              </h2>
              <div className="space-y-5">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <h3 className="text-xl font-bold text-black">{exp.role}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-black font-semibold">{exp.company}</p>
                      <span className="text-sm text-black font-mono bg-purple-100 px-3 py-1 rounded">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <p className="text-black whitespace-pre-wrap leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-5 pb-2 border-b-4 border-purple-600">
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="text-xl font-bold text-black">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-black font-semibold">{edu.institution}</p>
                      <span className="text-sm text-black font-mono bg-purple-100 px-3 py-1 rounded">
                        {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-5 pb-2 border-b-4 border-purple-600">
                Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-600 text-white text-base px-5 py-2 rounded-lg font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Declaration */}
          {declaration.enabled && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-5 pb-2 border-b-4 border-purple-600">
                Declaration
              </h2>
              <p className="text-black">{declaration.text}</p>
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

GengarTemplate.displayName = 'GengarTemplate';
