
import React from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { TrashIcon } from 'lucide-react';
import { APPS, DOCK_APPS, useWindows } from '../context/WindowsContext';
import { DockIcon } from './DockIcon';

export const Dock: React.FC = () => {
  const { openApps, focusedApp, openApp } = useWindows();
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-3 md:bottom-4 left-0 right-0 flex justify-center z-50 pointer-events-none px-2">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.5 }}
        className="pointer-events-auto max-w-full overflow-x-auto no-scrollbar bg-mac-glass backdrop-blur-xl border border-mac-border px-2 md:px-3 py-2 rounded-3xl shadow-mac-dock flex items-end gap-1.5 md:gap-2"
        onMouseMove={(event) => mouseX.set(event.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        aria-label="Application dock">
        
        {DOCK_APPS.map((appId) =>
        <DockIcon
          key={appId}
          app={APPS[appId]}
          mouseX={mouseX}
          isOpen={openApps.includes(appId)}
          isActive={focusedApp === appId}
          onClick={() => openApp(appId)} />

        )}

        <div className="w-px h-9 md:h-10 bg-white/20 mx-0.5 md:mx-1 self-center" />

        <motion.button
          type="button"
          className="w-11 h-11 md:w-12 md:h-12 flex-shrink-0 rounded-2xl flex items-center justify-center shadow-lg bg-white/10 text-white/80 backdrop-blur-md border border-white/10"
          whileHover={{ y: -5, scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.alert('Trash is empty!')}
          aria-label="Trash is empty">
          
          <TrashIcon size={22} />
        </motion.button>
      </motion.nav>
    </div>);

};