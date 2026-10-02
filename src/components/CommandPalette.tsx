import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchIcon, CommandIcon } from 'lucide-react';
import { useWindows, APPS, AppId } from '../context/WindowsContext';
interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}
export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose
}) => {
  const { openApp } = useWindows();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const allApps = Object.values(APPS);
  const filteredApps = allApps.filter((app) =>
  app.title.toLowerCase().includes(query.toLowerCase())
  );
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredApps.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(
          (prev) => (prev - 1 + filteredApps.length) % filteredApps.length
        );
      } else if (e.key === 'Enter' && filteredApps.length > 0) {
        e.preventDefault();
        openApp(filteredApps[selectedIndex].id as AppId);
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredApps, selectedIndex, onClose, openApp]);
  return (
    <AnimatePresence>
      {isOpen &&
      <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]">
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={onClose} />
        

          <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: -20
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: -20
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 300
          }}
          className="relative w-full max-w-2xl bg-mac-glass backdrop-blur-2xl border border-mac-border rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          
            <div className="flex items-center px-4 h-16 border-b border-white/10">
              <SearchIcon className="text-white/50 mr-3" size={24} />
              <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder="Spotlight Search"
              className="flex-1 bg-transparent border-none outline-none text-2xl text-white placeholder-white/30 font-light" />
            
              <div className="flex items-center gap-1 text-white/30 text-xs font-medium bg-white/5 px-2 py-1 rounded">
                <CommandIcon size={12} /> K
              </div>
            </div>

            {filteredApps.length > 0 &&
          <div className="max-h-[60vh] overflow-y-auto py-2 mac-scrollbar">
                {filteredApps.map((app, index) =>
            <div
              key={app.id}
              className={`px-4 py-3 flex items-center gap-3 cursor-pointer transition-colors ${index === selectedIndex ? 'bg-blue-500 text-white' : 'text-white/80 hover:bg-white/10'}`}
              onClick={() => {
                openApp(app.id as AppId);
                onClose();
              }}
              onMouseEnter={() => setSelectedIndex(index)}>
              
                    <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${index === selectedIndex ? 'bg-white/20' : 'bg-white/10'}`}>
                
                      {/* We'd normally render the specific icon here, using a placeholder for simplicity in the list */}
                      <span className="text-sm font-bold">
                        {app.title.charAt(0)}
                      </span>
                    </div>
                    <span className="font-medium">{app.title}</span>
                  </div>
            )}
              </div>
          }

            {filteredApps.length === 0 &&
          <div className="px-4 py-8 text-center text-white/50">
                No results found
              </div>
          }
          </motion.div>
        </div>
      }
    </AnimatePresence>);

};