import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// Clean SVG Apple Logo since it's not in Lucide
const AppleLogo = ({ className }: {className?: string;}) =>
<svg viewBox="0 0 384 512" className={className} fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>;

interface BootScreenProps {
  onComplete: () => void;
}
export const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const duration = 2500;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setProgress(currentStep / steps * 100);
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500); // Brief pause at 100%
      }
    }, interval);
    return () => clearInterval(timer);
  }, [onComplete]);
  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
      exit={{
        opacity: 0,
        transition: {
          duration: 0.8,
          ease: 'easeInOut'
        }
      }}>
      
      <div className="flex flex-col items-center gap-12">
        <AppleLogo className="w-24 h-24 text-white" />

        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white rounded-full"
            style={{
              width: `${progress}%`
            }} />
          
        </div>
      </div>

      <motion.div
        className="absolute bottom-12 text-white/40 text-sm font-medium tracking-widest uppercase"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 0.5,
          duration: 1
        }}>
        
        Powered by M5 Chip
      </motion.div>
    </motion.div>);

};