import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { 
  ChevronLeft, 
  Download, 
  Eye, 
  EyeOff, 
  RotateCcw,
  Sparkles,
  User,
  Briefcase,
  GraduationCap,
  Wrench,
  FileText,
  CheckSquare,
  ChevronDown,
  Plus,
  Trash2,
  Image as ImageIcon,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { defaultCVData, templates, type CVData, type TemplateType } from '@/types/cv';
import { ModernTemplate } from '@/templates/ModernTemplate';
import { ClassicTemplate } from '@/templates/ClassicTemplate';
import { ATSTemplate } from '@/templates/ATSTemplate';
import { OnyxTemplate } from '@/templates/OnyxTemplate';
import { PikachuTemplate } from '@/templates/PikachuTemplate';
import { GlalieTemplate } from '@/templates/GlalieTemplate';
import { GengarTemplate } from '@/templates/GengarTemplate';
import { LeafishTemplate } from '@/templates/LeafishTemplate';

export function BuilderPage() {
  const [cvData, setCvData] = useState<CVData>(defaultCVData);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('modern');
  const [activeSection, setActiveSection] = useState<string>('personal');
  const [showPreview, setShowPreview] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: `${cvData.personal.firstName}_${cvData.personal.lastName}_CV`,
  });

  const updatePersonal = (field: keyof CVData['personal'], value: string) => {
    setCvData(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: value }
    }));
  };

  const addExperience = () => {
    setCvData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        id: Date.now().toString(),
        role: '',
        company: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
      }]
    }));
  };

  const updateExperience = (id: string, field: keyof CVData['experience'][0], value: string | boolean) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (id: string) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addEducation = () => {
    setCvData(prev => ({
      ...prev,
      education: [...prev.education, {
        id: Date.now().toString(),
        degree: '',
        field: '',
        institution: '',
        startDate: '',
        endDate: '',
        current: false,
      }]
    }));
  };

  const updateEducation = (id: string, field: keyof CVData['education'][0], value: string | boolean) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id: string) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addSkill = () => {
    setCvData(prev => ({
      ...prev,
      skills: [...prev.skills, '']
    }));
  };

  const updateSkill = (index: number, value: string) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) => i === index ? value : skill)
    }));
  };

  const removeSkill = (index: number) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatePersonal('photo', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'modern': return <ModernTemplate ref={cvRef} data={cvData} />;
      case 'classic': return <ClassicTemplate ref={cvRef} data={cvData} />;
      case 'ats': return <ATSTemplate ref={cvRef} data={cvData} />;
      case 'onyx': return <OnyxTemplate ref={cvRef} data={cvData} />;
      case 'pikachu': return <PikachuTemplate ref={cvRef} data={cvData} />;
      case 'glalie': return <GlalieTemplate ref={cvRef} data={cvData} />;
      case 'gengar': return <GengarTemplate ref={cvRef} data={cvData} />;
      case 'leafish': return <LeafishTemplate ref={cvRef} data={cvData} />;
      default: return <ModernTemplate ref={cvRef} data={cvData} />;
    }
  };

  const sections = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'declaration', label: 'Declaration', icon: CheckSquare },
  ];

  return (
    <div className="min-h-screen bg-[#F6F7F6]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                <ChevronLeft className="w-5 h-5" />
                <span className="font-medium">Back</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#4169E1] rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Europin
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCvData(defaultCVData)}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                title="Reset"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="lg:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {showPreview ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              <button
                onClick={handlePrint}
                className="bg-[#4169E1] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#3158d0] transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Editor Panel */}
          <div className={`space-y-6 ${showPreview ? 'hidden lg:block' : ''}`}>
            {/* Template Selector */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#4169E1]" />
                <span className="font-semibold text-gray-900">Template</span>
              </div>
              <div className="relative">
                <select
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value as TemplateType)}
                  className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 pr-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                >
                  {templates.map(template => (
                    <option key={template.id} value={template.id}>
                      {template.name} - {template.description}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Sections */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Section Tabs */}
              <div className="flex overflow-x-auto border-b border-gray-200">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                        activeSection === section.id
                          ? 'text-[#4169E1] border-b-2 border-[#4169E1] bg-[#4169E1]/5'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {section.label}
                    </button>
                  );
                })}
              </div>

              {/* Section Content */}
              <div className="p-6">
                {/* Personal Info */}
                {activeSection === 'personal' && (
                  <div className="space-y-4">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        {cvData.personal.photo ? (
                          <div className="relative">
                            <img
                              src={cvData.personal.photo}
                              alt="Profile"
                              className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                            />
                            <button
                              onClick={() => updatePersonal('photo', '')}
                              className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ) : (
                          <label className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-[#4169E1] hover:bg-[#4169E1]/5 transition-colors">
                            <ImageIcon className="w-8 h-8 text-gray-400" />
                            <span className="text-xs text-gray-500 mt-1">Add Photo</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handlePhotoUpload}
                              className="hidden"
                            />
                          </label>
                        )}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          value={cvData.personal.firstName}
                          onChange={(e) => updatePersonal('firstName', e.target.value)}
                          placeholder="John"
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          value={cvData.personal.lastName}
                          onChange={(e) => updatePersonal('lastName', e.target.value)}
                          placeholder="Doe"
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={cvData.personal.email}
                        onChange={(e) => updatePersonal('email', e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        value={cvData.personal.phone}
                        onChange={(e) => updatePersonal('phone', e.target.value)}
                        placeholder="+1 234 567 890"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input
                        type="text"
                        value={cvData.personal.location}
                        onChange={(e) => updatePersonal('location', e.target.value)}
                        placeholder="New York, NY"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                      <input
                        type="text"
                        value={cvData.personal.linkedin}
                        onChange={(e) => updatePersonal('linkedin', e.target.value)}
                        placeholder="linkedin.com/in/johndoe"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                      <input
                        type="text"
                        value={cvData.personal.website}
                        onChange={(e) => updatePersonal('website', e.target.value)}
                        placeholder="johndoe.com"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
                      <textarea
                        value={cvData.personal.summary}
                        onChange={(e) => updatePersonal('summary', e.target.value)}
                        placeholder="Brief overview of your professional background..."
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent resize-none"
                      />
                    </div>
                  </div>
                )}

                {/* Experience */}
                {activeSection === 'experience' && (
                  <div className="space-y-4">
                    {cvData.experience.map((exp, index) => (
                      <div key={exp.id} className="bg-gray-50 rounded-lg p-4 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">Experience {index + 1}</span>
                          <button
                            onClick={() => removeExperience(exp.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <input
                          type="text"
                          value={exp.role}
                          onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                          placeholder="Job Title"
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                        />
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                          placeholder="Company"
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="text"
                            value={exp.startDate}
                            onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                            placeholder="Start Date"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                          />
                          {!exp.current && (
                            <input
                              type="text"
                              value={exp.endDate}
                              onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                              placeholder="End Date"
                              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                            />
                          )}
                        </div>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={exp.current}
                            onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                            className="w-4 h-4 text-[#4169E1] rounded focus:ring-[#4169E1]"
                          />
                          <span className="text-sm text-gray-700">Current Position</span>
                        </label>
                        <textarea
                          value={exp.description}
                          onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                          placeholder="Job description..."
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1] resize-none"
                        />
                      </div>
                    ))}
                    <button
                      onClick={addExperience}
                      className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-[#4169E1] hover:text-[#4169E1] flex items-center justify-center gap-2 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Add Experience
                    </button>
                  </div>
                )}

                {/* Education */}
                {activeSection === 'education' && (
                  <div className="space-y-4">
                    {cvData.education.map((edu, index) => (
                      <div key={edu.id} className="bg-gray-50 rounded-lg p-4 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">Education {index + 1}</span>
                          <button
                            onClick={() => removeEducation(edu.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                          placeholder="Degree"
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                        />
                        <input
                          type="text"
                          value={edu.field}
                          onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                          placeholder="Field of Study"
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                        />
                        <input
                          type="text"
                          value={edu.institution}
                          onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                          placeholder="Institution"
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="text"
                            value={edu.startDate}
                            onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                            placeholder="Start Date"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                          />
                          {!edu.current && (
                            <input
                              type="text"
                              value={edu.endDate}
                              onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                              placeholder="End Date"
                              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                            />
                          )}
                        </div>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={edu.current}
                            onChange={(e) => updateEducation(edu.id, 'current', e.target.checked)}
                            className="w-4 h-4 text-[#4169E1] rounded focus:ring-[#4169E1]"
                          />
                          <span className="text-sm text-gray-700">Currently Studying</span>
                        </label>
                      </div>
                    ))}
                    <button
                      onClick={addEducation}
                      className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-[#4169E1] hover:text-[#4169E1] flex items-center justify-center gap-2 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Add Education
                    </button>
                  </div>
                )}

                {/* Skills */}
                {activeSection === 'skills' && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {cvData.skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-1 bg-[#4169E1]/10 text-[#4169E1] px-3 py-1.5 rounded-lg">
                          <input
                            type="text"
                            value={skill}
                            onChange={(e) => updateSkill(index, e.target.value)}
                            placeholder="Skill"
                            className="bg-transparent border-none outline-none w-24 text-sm"
                          />
                          <button
                            onClick={() => removeSkill(index)}
                            className="hover:text-red-500"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={addSkill}
                      className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-[#4169E1] hover:text-[#4169E1] flex items-center justify-center gap-2 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Add Skill
                    </button>
                  </div>
                )}

                {/* Declaration */}
                {activeSection === 'declaration' && (
                  <div className="space-y-4">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={cvData.declaration.enabled}
                        onChange={(e) => setCvData(prev => ({
                          ...prev,
                          declaration: { ...prev.declaration, enabled: e.target.checked }
                        }))}
                        className="w-5 h-5 text-[#4169E1] rounded focus:ring-[#4169E1]"
                      />
                      <span className="text-gray-700">Include Declaration</span>
                    </label>
                    {cvData.declaration.enabled && (
                      <textarea
                        value={cvData.declaration.text}
                        onChange={(e) => setCvData(prev => ({
                          ...prev,
                          declaration: { ...prev.declaration, text: e.target.value }
                        }))}
                        placeholder="Declaration text..."
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1] resize-none"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className={`${!showPreview ? 'hidden lg:block' : ''}`}>
            <div className="bg-gray-200 rounded-xl p-4 sm:p-8 overflow-auto" style={{ maxHeight: 'calc(100vh - 120px)' }}>
              <div className="flex justify-center">
                <div className="scale-[0.6] sm:scale-[0.7] md:scale-[0.8] origin-top">
                  {renderTemplate()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
