import React from 'react';
import type { CVData } from '@/types/cv';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface PikachuTemplateProps {
  data: CVData;
}

// Europin Logo Component
const EuropinLogo = () => (
  <div className="flex items-center gap-1">
    <span className="text-[8px] font-bold text-black/40" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Europin</span>
  </div>
);

export const PikachuTemplate = React.forwardRef<HTMLDivElement, PikachuTemplateProps>(
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
        {/* Header with yellow accent */}
        <div className="bg-yellow-400 p-8">
          <div className="flex items-center gap-6">
            {personal.photo && (
              <img
                src={personal.photo}
                alt={fullName}
                className="rounded-full object-cover border-4 border-white shadow-lg"
                style={{ width: imageSize, height: imageSize }}
              />
            )}
            <div>
              <h1 className="text-4xl font-bold text-black mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {fullName}
              </h1>
              {personal.summary && (
                <p className="text-black text-sm max-w-md">{personal.summary}</p>
              )}
            </div>
          </div>
        </div>

        {/* Contact bar - black */}
        <div className="bg-black text-white px-8 py-3">
          <div className="flex flex-wrap gap-4 text-xs">
            {personal.email && (
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-yellow-400" />
                {personal.email}
              </span>
            )}
            {personal.phone && (
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-yellow-400" />
                {personal.phone}
              </span>
            )}
            {personal.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-yellow-400" />
                {personal.location}
              </span>
            )}
            {personal.linkedin && (
              <span className="flex items-center gap-1">
                <Linkedin className="w-3 h-3 text-yellow-400" />
                {personal.linkedin}
              </span>
            )}
            {personal.website && (
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3 text-yellow-400" />
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
              <h2 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black text-sm font-bold">E</span>
                Experience
              </h2>
              <div className="space-y-4 ml-10">
                {experience.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-yellow-400 pl-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-black">{exp.role}</h3>
                      <span className="text-xs text-black font-mono bg-yellow-100 px-2 py-1 rounded">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <p className="text-sm text-black font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-black whitespace-pre-wrap">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white text-sm font-bold">Ed</span>
                Education
              </h2>
              <div className="space-y-3 ml-10">
                {education.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-orange-400 pl-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-black">
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </h3>
                      <span className="text-xs text-black font-mono bg-orange-100 px-2 py-1 rounded">
                        {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                      </span>
                    </div>
                    <p className="text-sm text-black font-medium">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black text-sm font-bold">S</span>
                Skills
              </h2>
              <div className="flex flex-wrap gap-2 ml-10">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-yellow-400 text-black text-sm px-4 py-2 rounded-full font-medium"
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
              <h2 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-sm font-bold">D</span>
                Declaration
              </h2>
              <p className="text-sm text-black ml-10">{declaration.text}</p>
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

PikachuTemplate.displayName = 'PikachuTemplate';
