import React from 'react';
import { motion } from 'framer-motion';
import {
  FileTextIcon,
  FolderIcon,
  StickyNoteIcon,
  GlobeIcon } from
'lucide-react';
import { useWindows } from '../context/WindowsContext';
interface DesktopFile {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  onOpen: () => void;
}
export const DesktopIcons: React.FC = () => {
  const { openApp } = useWindows();
  const files: DesktopFile[] = [
  {
    id: 'resume',
    name: 'Resume.pdf',
    icon: <FileTextIcon size={26} className="text-red-100" />,
    color: 'bg-red-500',
    onOpen: () => openApp('resume')
  },
  {
    id: 'projects-folder',
    name: 'Projects',
    icon: <FolderIcon size={26} className="text-white fill-white/30" />,
    color: 'bg-blue-500',
    onOpen: () => openApp('xcode')
  },
  {
    id: 'readme',
    name: 'README.md',
    icon: <FileTextIcon size={26} className="text-white" />,
    color: 'bg-gray-700',
    onOpen: () => openApp('finder')
  },
  {
    id: 'notes',
    name: 'Notes.txt',
    icon: <StickyNoteIcon size={26} className="text-yellow-100" />,
    color: 'bg-yellow-500',
    onOpen: () => openApp('terminal')
  },
  {
    id: 'my-portfolio',
    name: 'My Portfolio',
    icon: <GlobeIcon size={26} className="text-white" />,
    color: 'bg-indigo-600',
    onOpen: () => openApp('safari-portfolio')
  }];

  return (
    <div className="absolute top-4 right-4 flex flex-col gap-4 z-10">
      {files.map((file, index) =>
      <motion.button
        key={file.id}
        initial={{
          opacity: 0,
          x: 20
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        transition={{
          delay: 0.6 + index * 0.08
        }}
        onDoubleClick={file.onOpen}
        onClick={file.onOpen}
        className="group flex flex-col items-center gap-1 w-20 p-2 rounded-lg hover:bg-white/10 focus:bg-blue-500/30 outline-none transition-all hover:-translate-y-0.5"
        aria-label={`Open ${file.name}`}>
        
          <div
          className={`w-14 h-14 ${file.color} rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden`}>
          
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            {file.icon}
          </div>
          <span className="text-xs text-white font-medium px-1.5 py-0.5 rounded bg-black/30 backdrop-blur-sm text-center leading-tight max-w-full truncate">
            {file.name}
          </span>
        </motion.button>
      )}
    </div>);

};