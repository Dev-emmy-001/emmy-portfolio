import React from 'react';
import {
  DownloadIcon,
  PrinterIcon,
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  MapPinIcon,
  PhoneIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  CodeIcon,
  AwardIcon } from
'lucide-react';
import { skills } from '../../data/skills';
import { projects } from '../../data/projects';
export const ResumeApp: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="h-full w-full bg-[#2d2d2d] flex flex-col">
      {/* Toolbar */}
      <div className="h-12 flex-shrink-0 bg-[#3a3a3a] border-b border-black/30 flex items-center justify-between px-4 text-white text-sm">
        <div className="font-semibold">Resume — Emmanuel_Saka.pdf</div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md text-xs font-medium transition-all hover:-translate-y-0.5">
            
            <PrinterIcon size={12} /> Print
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-xs font-medium transition-all hover:-translate-y-0.5">
            
            <DownloadIcon size={12} /> Download PDF
          </button>
        </div>
      </div>

      {/* Resume Document */}
      <div className="flex-1 overflow-y-auto mac-scrollbar bg-[#1e1e1e] py-8 px-4">
        <div
          className="max-w-3xl mx-auto bg-white text-gray-900 shadow-2xl rounded-sm"
          style={{
            minHeight: '1000px'
          }}>
          
          {/* Header */}
          <div className="bg-[#1d1d1f] text-white px-10 py-8">
            <h1 className="text-4xl font-bold tracking-tight">Emmanuel Saka</h1>
            <p className="text-blue-300 font-medium text-lg mt-1">
              Full Stack Developer
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 text-xs text-white/80">
              <span className="flex items-center gap-1.5">
                <MailIcon size={12} /> emmanuelsaka333@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <GithubIcon size={12} /> github.com/Dev-emmy-001
              </span>
              <span className="flex items-center gap-1.5">
                <LinkedinIcon size={12} /> linkedin.com/in/saka-emmanuel
              </span>
              <span className="flex items-center gap-1.5">
                <MapPinIcon size={12} /> Available Remote
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="px-10 py-8 space-y-7 text-sm leading-relaxed">
            {/* Summary */}
            <Section
              title="Professional Summary"
              icon={<AwardIcon size={14} />}>
              
              <p className="text-gray-700">
                Passionate full-stack developer with hands-on experience
                building modern web applications using React, Node.js, and
                MongoDB. Strong focus on clean architecture, performance, and
                crafting delightful user experiences. Comfortable across the
                entire stack — from designing intuitive interfaces to
                architecting scalable backend APIs.
              </p>
            </Section>

            {/* Skills */}
            <Section title="Technical Skills" icon={<CodeIcon size={14} />}>
              <div className="grid grid-cols-1 gap-2">
                {skills.map((cat) =>
                <div key={cat.category} className="flex gap-3">
                    <div className="w-28 font-semibold text-gray-900 flex-shrink-0">
                      {cat.category}
                    </div>
                    <div className="text-gray-700">{cat.items.join(' · ')}</div>
                  </div>
                )}
              </div>
            </Section>

            {/* Experience */}
            <Section title="Experience" icon={<BriefcaseIcon size={14} />}>
              <div className="space-y-5">
                <ExperienceItem
                  role="Freelance Web Developer"
                  org="Freelance / Open Source"
                  period="2023 — Present"
                  bullets={[
                  'Designed and shipped multiple React + Node.js applications serving end users worldwide.',
                  'Built RESTful APIs with Express and MongoDB, including authentication, rate limiting, and comprehensive error handling.',
                  'Contributed to open-source projects with focus on developer tooling and UI components.']
                  } />
                
                <ExperienceItem
                  role="Frontend Developer"
                  org="Personal Projects"
                  bullets={[
                  'Built responsive single-page applications with React, TypeScript, Tailwind CSS, and Bootstrap CSS.',
                  'Implemented advanced animations using Framer Motion to create polished, native-feeling UIs.',
                  'Collaborated with peers via Git and code reviews to ship features on tight timelines.']
                  } />
                
              </div>
            </Section>

            {/* Projects */}
            <Section title="Featured Projects" icon={<CodeIcon size={14} />}>
              <div className="space-y-4">
                {projects.map((p) =>
                <div key={p.id}>
                    <div className="flex justify-between items-baseline">
                      <div className="font-semibold text-gray-900">
                        {p.title}
                      </div>
                      <div className="text-xs text-gray-500 font-mono">
                        {p.tech.slice(0, 3).join(' · ')}
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs mt-1">
                      {p.description}
                    </p>
                  </div>
                )}
              </div>
            </Section>

            {/* Education */}
            <Section title="Education" icon={<GraduationCapIcon size={14} />}>
              <div className="space-y-4">
                <ul className="ml-4 list-disc space-y-1 text-gray-900">
                  <li className="font-semibold">
                    Bachelor of Technology in Mathematics (B.Tech)
                  </li>
                  <li className="text-gray-700">
                    Ladoke Akintola University of Technology (LAUTECH)
                  </li>
                </ul>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">
                    Professional Certificate
                  </div>
                  <div className="text-gray-600 text-xs mt-1">
                    SQI College of ICT
                  </div>
                </div>
              </div>
            </Section>

            {/* Footer */}
            <div className="pt-4 mt-6 border-t border-gray-200 text-center text-[10px] text-gray-400 uppercase tracking-widest">
              References available upon request
            </div>
          </div>
        </div>
      </div>
    </div>);

};
const Section: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) =>
<div>
    <div className="flex items-center gap-2 text-[#1d1d1f] uppercase text-xs font-bold tracking-widest mb-3 pb-1 border-b border-gray-200">
      {icon} {title}
    </div>
    {children}
  </div>;

const ExperienceItem: React.FC<{
  role: string;
  org: string;
  period?: string;
  bullets: string[];
}> = ({ role, org, period, bullets }) =>
<div>
    <div className="flex justify-between items-baseline">
      <div>
        <div className="font-semibold text-gray-900">{role}</div>
        <div className="text-gray-600 text-xs italic">{org}</div>
      </div>
      {period &&
    <div className="text-xs text-gray-500 flex-shrink-0">{period}</div>
    }
    </div>
    <ul className="mt-2 ml-4 space-y-1 list-disc text-gray-700 text-xs">
      {bullets.map((b, i) =>
    <li key={i}>{b}</li>
    )}
    </ul>
  </div>;