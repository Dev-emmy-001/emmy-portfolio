
import React from 'react';
import { motion } from 'framer-motion';
import {
  CodeIcon,
  ExternalLinkIcon,
  FolderIcon,
  GithubIcon,
  PlayIcon } from
'lucide-react';
import { projects } from '../../data/projects';

export const ProjectsApp: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#1e1e1e] flex text-white">
      {/* Desktop explorer – hidden on a phone so cards get the full viewport. */}
      <aside className="hidden md:flex w-56 lg:w-64 bg-[#252526] border-r border-white/10 flex-col">
        <div className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Explorer
        </div>
        <div className="flex-1 overflow-y-auto mac-scrollbar">
          <div className="px-2 space-y-1">
            <div className="flex items-center gap-2 px-2 py-1.5 bg-blue-500/20 text-blue-400 rounded">
              <FolderIcon size={16} className="fill-blue-500/20" />
              <span className="text-sm">Projects</span>
            </div>
            {projects.map((project) =>
            <div
              key={project.id}
              className="flex items-center gap-2 px-2 py-1.5 pl-6 text-gray-400 rounded">
              
                <CodeIcon size={14} />
                <span className="text-sm truncate">{project.id}.ts</span>
              </div>
            )}
          </div>
        </div>
      </aside>

      <div className="flex-1 min-w-0 bg-[#1e1e1e] overflow-y-auto mac-scrollbar p-4 sm:p-5 md:p-8 pb-24 md:pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-5 md:mb-8">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-2 md:hidden">
              <FolderIcon size={14} /> Projects
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">My Projects</h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Tap <span className="text-emerald-400 font-medium">Live Demo</span>{' '}
              to try each project, or{' '}
              <span className="text-gray-200 font-medium">View Code</span> to
              explore its source.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
            {projects.map((project, index) =>
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.05, 0.35) }}
              className="bg-[#252526] border border-white/10 rounded-xl p-4 md:p-6 flex flex-col hover:-translate-y-1 hover:border-blue-500/50 transition-all duration-200 group">
              
                <div className="flex justify-between items-start gap-3 mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <FolderIcon size={22} />
                  </div>
                  {project.liveUrl &&
                <span className="px-2 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      LIVE
                    </span>
                }
                </div>

                <h2 className="text-lg md:text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm mb-5 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) =>
                <span
                  key={tech}
                  className="text-[11px] font-mono px-2 py-1 bg-black/30 text-gray-300 rounded border border-white/5">
                  
                      {tech}
                    </span>
                )}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-3 border-t border-white/5">
                  {project.liveUrl ?
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-300">
                  
                      <PlayIcon size={14} fill="currentColor" />
                      Live Demo
                      <ExternalLinkIcon size={12} className="opacity-70" />
                    </a> :

                <div className="flex-1 inline-flex items-center justify-center px-3 py-2.5 bg-white/5 text-white/40 rounded-lg text-sm font-medium">
                      Demo Unavailable
                    </div>
                }
                  {project.githubUrl &&
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/50">
                  
                      <GithubIcon size={14} />
                      View Code
                    </a>
                }
                </div>
              </motion.article>
            )}
          </div>
        </div>
      </div>
    </div>);

};