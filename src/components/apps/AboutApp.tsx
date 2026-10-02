import React from 'react';
import { motion } from 'framer-motion';
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  CodeIcon,
  TerminalIcon,
  CoffeeIcon } from
'lucide-react';
const PROFILE_IMG = "/IMG_8071.jpg";

export const AboutApp: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#1e1e1e] text-white overflow-y-auto mac-scrollbar flex flex-col">
      {/* Hero banner */}
      <div className="relative h-48 bg-[#1d1d4f] flex-shrink-0 overflow-hidden">
        {/* Soft layered wallpaper-ish backdrop (no UI gradients per guidelines, this is decorative) */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
            'radial-gradient(circle at 20% 30%, #4f46e5 0%, transparent 50%), radial-gradient(circle at 80% 70%, #a855f7 0%, transparent 50%), #0f172a'
          }} />
        
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute -bottom-16 left-8 flex items-end gap-6">
          <motion.div
            initial={{
              y: 20,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            className="w-32 h-32 rounded-full border-4 border-[#1e1e1e] bg-gradient-to-br from-gray-800 to-black shadow-xl overflow-hidden relative">
            
            <img
              src={PROFILE_IMG}
              alt="Emmanuel Saka"
              className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 ring-2 ring-inset ring-white/10 rounded-full pointer-events-none" />
          </motion.div>
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-white drop-shadow-md">
              Emmanuel Saka
            </h1>
            <p className="text-blue-200 font-medium drop-shadow-md flex items-center gap-2">
              Full Stack Developer
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] backdrop-blur-sm border border-white/10">
                M5 Powered
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-8 pt-24 pb-8 space-y-8">
        <motion.div
          initial={{
            y: 20,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            delay: 0.1
          }}
          className="max-w-2xl text-gray-300 leading-relaxed">
          
          <p>
            Hello! I'm a passionate developer focused on crafting beautiful,
            high-performance web applications. I love bridging the gap between
            design and engineering, creating experiences that feel native and
            polished.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{
            y: 20,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            delay: 0.2
          }}
          className="grid grid-cols-3 gap-4 max-w-2xl">
          
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col items-center justify-center gap-2 hover:-translate-y-1 transition-transform duration-200">
            <CodeIcon className="text-blue-400" size={24} />
            <span className="text-2xl font-bold">3+</span>
            <span className="text-xs text-gray-400 uppercase tracking-wider">
              Years Coding
            </span>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col items-center justify-center gap-2 hover:-translate-y-1 transition-transform duration-200">
            <TerminalIcon className="text-purple-400" size={24} />
            <span className="text-2xl font-bold">20+</span>
            <span className="text-xs text-gray-400 uppercase tracking-wider">
              Projects Shipped
            </span>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col items-center justify-center gap-2 hover:-translate-y-1 transition-transform duration-200">
            <CoffeeIcon className="text-amber-400" size={24} />
            <span className="text-2xl font-bold">∞</span>
            <span className="text-xs text-gray-400 uppercase tracking-wider">
              Coffee Cups
            </span>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{
            y: 20,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            delay: 0.3
          }}
          className="flex flex-wrap gap-4">
          
          <a
            href="https://github.com/Dev-emmy-001"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#24292e] hover:bg-[#2f363d] rounded-lg transition-all hover:-translate-y-0.5 border border-white/10">
            
            <GithubIcon size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/saka-emmanuel-01b43923b"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] hover:bg-[#0088cc] rounded-lg transition-all hover:-translate-y-0.5 border border-white/10">
            
            <LinkedinIcon size={18} /> LinkedIn
          </a>
          <a
            href="mailto:emmanuelsaka333@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all hover:-translate-y-0.5 border border-white/10">
            
            <MailIcon size={18} /> Email Me
          </a>
        </motion.div>
      </div>
    </div>);

};