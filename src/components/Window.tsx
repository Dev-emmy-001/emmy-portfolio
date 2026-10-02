
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { APPS, AppId, useWindows } from '../context/WindowsContext';

interface WindowProps {
  id: AppId;
  children: React.ReactNode;
  className?: string;
}

interface ViewportSize {
  width: number;
  height: number;
}

const getViewportSize = (): ViewportSize => ({
  width: window.innerWidth,
  height: window.innerHeight
});

export const Window: React.FC<WindowProps> = ({
  id,
  children,
  className = ''
}) => {
  const {
    openApps,
    minimizedApps,
    focusedApp,
    zIndices,
    closeApp,
    minimizeApp,
    focusApp
  } = useWindows();
  const app = APPS[id];
  const [isMaximized, setIsMaximized] = useState(false);
  const [viewport, setViewport] = useState<ViewportSize>(getViewportSize);

  const isOpen = openApps.includes(id);
  const isMinimized = minimizedApps.includes(id);
  const isFocused = focusedApp === id;
  const isMobile = viewport.width < 768;
  const zIndex = zIndices[id] || 10;

  useEffect(() => {
    const updateViewport = () => setViewport(getViewportSize());
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const isFullWindow = isMaximized;
  const mobileHorizontalInset = viewport.width <= 360 ? 12 : 16;
  const mobileVerticalInset = viewport.height <= 560 ? 54 : 68;
  const mobileAvailableHeight = Math.max(
    viewport.height - 28 - mobileVerticalInset * 2,
    220
  );

  const windowWidth = isMobile ?
  Math.max(viewport.width - mobileHorizontalInset * 2, 0) :
  isFullWindow ?
  viewport.width :
  Math.min(app.defaultWidth, Math.max(viewport.width - 48, 360));
  const windowHeight = isMobile ?
  Math.min(app.defaultHeight, mobileAvailableHeight) :
  isFullWindow ?
  Math.max(viewport.height - 28, 0) :
  Math.min(app.defaultHeight, Math.max(viewport.height - 100, 300));
  const windowTop = isMobile ?
  Math.max(12, Math.round((viewport.height - 28 - windowHeight) / 2)) :
  isFullWindow ?
  0 :
  Math.max(48, Math.round((viewport.height - windowHeight) / 2));
  const windowLeft = isMobile ?
  Math.max(0, Math.round((viewport.width - windowWidth) / 2)) :
  isFullWindow ?
  0 :
  Math.max(24, Math.round((viewport.width - windowWidth) / 2));

  const toggleMaximize = () => {
    if (!isMobile) {
      setIsMaximized((current) => !current);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {!isMinimized &&
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          width: windowWidth,
          height: windowHeight,
          top: windowTop,
          left: windowLeft
        }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        style={{ zIndex }}
        className={`absolute overflow-hidden bg-mac-dark border border-mac-border shadow-mac-window flex flex-col ${
        isMobile ? 'rounded-2xl' : 'rounded-xl'} ${
        className}`}
        drag={!isFullWindow}
        dragMomentum={false}
        dragHandle=".window-drag-handle"
        onPointerDown={() => focusApp(id)}
        aria-label={`${app.title} window`}>
        
          <div
          className={`window-drag-handle h-12 flex items-center px-4 bg-mac-dark/90 backdrop-blur-md border-b border-white/5 select-none ${
          !isFullWindow ? 'cursor-grab active:cursor-grabbing' : ''}`
          }
          onDoubleClick={toggleMaximize}>
          
            <div className="flex items-center gap-2 group w-20">
              <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                closeApp(id);
              }}
              className="w-4 h-4 md:w-3 md:h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label={`Close ${app.title}`}>
              
                <span className="opacity-100 md:opacity-0 md:group-hover:opacity-100 text-[#990000] text-[8px] leading-none font-bold">
                  ✕
                </span>
              </button>
              <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                minimizeApp(id);
              }}
              className="w-4 h-4 md:w-3 md:h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label={`Minimize ${app.title}`}>
              
                <span className="opacity-100 md:opacity-0 md:group-hover:opacity-100 text-[#995700] text-[8px] leading-none font-bold">
                  −
                </span>
              </button>
              <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                toggleMaximize();
              }}
              disabled={isMobile}
              className="w-4 h-4 md:w-3 md:h-3 rounded-full bg-[#27c93f] border border-[#1aab29] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/70 disabled:opacity-50"
              aria-label={isMobile ? 'Window fits screen' : `Maximize ${app.title}`}>
              
                <span className="opacity-100 md:opacity-0 md:group-hover:opacity-100 text-[#006500] text-[8px] leading-none font-bold">
                  ＋
                </span>
              </button>
            </div>

            <div className="flex-1 text-center text-sm font-medium text-white/90 pr-20 truncate">
              {app.title}
            </div>
          </div>

          <div className="flex-1 min-h-0 overflow-hidden relative bg-mac-dark">
            {!isFocused && <div className="absolute inset-0 z-50 bg-transparent" />}
            {children}
          </div>
        </motion.div>
      }
    </AnimatePresence>);

};