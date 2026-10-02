import React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ShieldIcon,
  RotateCwIcon,
  PlusIcon,
  GithubIcon,
  LinkedinIcon,
  GlobeIcon } from
'lucide-react';
interface SafariAppProps {
  type: 'github' | 'linkedin' | 'portfolio';
}
const CONFIG = {
  github: {
    url: 'https://github.com/Dev-emmy-001',
    displayUrl: 'github.com/Dev-emmy-001',
    title: 'GitHub – Dev-emmy-001',
    heading: 'Emmanuel Saka on GitHub',
    sub: 'Check out my repositories, contributions, and open-source projects.',
    btnLabel: 'View Profile',
    btnClass: 'bg-[#2da44e] hover:bg-[#2c974b]',
    iconBg: 'bg-gray-100 dark:bg-[#21262d]',
    Icon: GithubIcon,
    iconColor: 'text-gray-800 dark:text-white'
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/saka-emmanuel-01b43923b',
    displayUrl: 'linkedin.com/in/saka-emmanuel...',
    title: 'LinkedIn – Emmanuel Saka',
    heading: 'Emmanuel Saka on LinkedIn',
    sub: 'Connect with me professionally, view my experience and endorsements.',
    btnLabel: 'Open Profile',
    btnClass: 'bg-[#0a66c2] hover:bg-[#004182]',
    iconBg: 'bg-blue-50 dark:bg-[#21262d]',
    Icon: LinkedinIcon,
    iconColor: 'text-[#0a66c2]'
  },
  portfolio: {
    url: 'https://dev-emmy-001.github.io/dev-emmy-portfolio/',
    displayUrl: 'dev-emmy-001.github.io/dev-emmy-portfolio',
    title: 'Dev-Emmy Portfolio',
    heading: 'Dev-Emmy Portfolio',
    sub: 'My live developer portfolio — explore my work, skills, and how to get in touch.',
    btnLabel: 'Open Live Portfolio',
    btnClass: 'bg-[#1d1d1f] hover:bg-black',
    iconBg: 'bg-gray-100 dark:bg-[#21262d]',
    Icon: GlobeIcon,
    iconColor: 'text-blue-500'
  }
} as const;
export const SafariApp: React.FC<SafariAppProps> = ({ type }) => {
  const cfg = CONFIG[type];
  const { Icon } = cfg;
  return (
    <div className="h-full w-full bg-white dark:bg-[#1e1e1e] flex flex-col text-gray-900 dark:text-gray-100">
      {/* Safari Chrome */}
      <div className="bg-[#f5f5f7] dark:bg-[#2d2d2d] border-b border-gray-300 dark:border-black/50">
        {/* Tabs */}
        <div className="flex items-end px-2 pt-2 gap-1">
          <div className="ml-20" />
          <div className="bg-white dark:bg-[#404040] px-4 py-1.5 rounded-t-lg text-xs font-medium flex items-center gap-2 min-w-[200px] border-x border-t border-gray-300 dark:border-black/20 relative z-10">
            <Icon size={14} />
            <span className="truncate flex-1">{cfg.title}</span>
          </div>
          <button className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded-md mb-1 transition-colors">
            <PlusIcon size={14} />
          </button>
        </div>

        {/* Toolbar */}
        <div className="h-12 flex items-center px-4 gap-4 bg-white dark:bg-[#404040] border-b border-gray-300 dark:border-black/50">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <button className="p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded transition-colors">
              <ChevronLeftIcon size={20} />
            </button>
            <button className="p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded transition-colors opacity-50">
              <ChevronRightIcon size={20} />
            </button>
            <button className="p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded transition-colors">
              <RotateCwIcon size={16} />
            </button>
          </div>

          <div className="flex-1 max-w-2xl mx-auto bg-black/5 dark:bg-black/20 rounded-md h-8 flex items-center px-3 gap-2 text-sm">
            <ShieldIcon size={14} className="text-gray-400" />
            <span className="text-gray-800 dark:text-gray-200 truncate">
              {cfg.displayUrl}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-[#f0f2f5] dark:bg-[#0d1117] flex items-center justify-center p-8 overflow-y-auto mac-scrollbar">
        <div className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-[#30363d] rounded-xl p-8 max-w-md w-full text-center shadow-sm hover:shadow-md transition-shadow">
          <div
            className={`w-20 h-20 mx-auto ${cfg.iconBg} rounded-full flex items-center justify-center mb-6`}>
            
            <Icon size={40} className={cfg.iconColor} />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            {cfg.heading}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">{cfg.sub}</p>
          <a
            href={cfg.url}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-all hover:-translate-y-0.5 ${cfg.btnClass}`}>
            
            {cfg.btnLabel} <ExternalLinkIcon size={16} />
          </a>
        </div>
      </div>
    </div>);

};
const ExternalLinkIcon = ({ size }: {size: number;}) =>
<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round">
  
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>;