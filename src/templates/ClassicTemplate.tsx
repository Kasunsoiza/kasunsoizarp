import React from 'react';
import type { CVData } from '@/types/cv';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface ClassicTemplateProps {
  data: CVData;
}

// Europin Logo Component
const EuropinLogo = () => (
  <div className="flex items-center gap-1">
    <span className="text-[8px] font-bold text-black/40" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Europin</span>
  </div>
);

export const ClassicTemplate = React.forwardRef<HTMLDivElement, ClassicTemplateProps>(
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
        style={{ fontFamily: "'Merriweather', serif" }}
      >
        {/* Header */}
        <div className="text-center mb-8 border-b-2 border-black pb-6 p-8 pb-6">
          <h1 className="text-4xl font-bold text-black mb-4 tracking-tight">
            {fullName}
          </h1>
          
          {/* Contact row */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-black">
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

        {/* Photo (if provided) - centered, circular */}
        {personal.photo && (
          <div className="flex justify-center mb-6 px-8">
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
            <h2 className="text-lg font-bold text-black mb-3 uppercase tracking-wide border-b border-black pb-1">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-black">{personal.summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="mb-6 px-8">
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wide border-b border-black pb-1">
              Work Experience
            </h2>
            <div className="space-y-5">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-black">{exp.role}</h3>
                    <span className="text-xs text-black italic">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-black font-semibold mb-1">{exp.company}</p>
                  <p className="text-sm text-black whitespace-pre-wrap leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-6 px-8">
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wide border-b border-black pb-1">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-black">
                      {edu.degree}{edu.field && `, ${edu.field}`}
                    </h3>
                    <span className="text-xs text-black italic">
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
          <div className="mb-6 px-8">
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wide border-b border-black pb-1">
              Skills
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {skills.map((skill, index) => (
                <span key={index} className="text-sm text-black">
                  {skill}{index < skills.length - 1 ? ' •' : ''}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Declaration */}
        {declaration.enabled && (
          <div className="mb-6 px-8">
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wide border-b border-black pb-1">
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

ClassicTemplate.displayName = 'ClassicTemplate';
