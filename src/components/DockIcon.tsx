import React, { useRef, Component } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import * as Icons from 'lucide-react';
import { AppConfig } from '../context/WindowsContext';
interface DockIconProps {
  app: AppConfig;
  mouseX: any;
  isOpen: boolean;
  isActive: boolean;
  onClick: () => void;
}
export const DockIcon: React.FC<DockIconProps> = ({
  app,
  mouseX,
  isOpen,
  isActive,
  onClick
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  // Calculate distance from mouse to the center of this icon
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0
    };
    return val - bounds.x - bounds.width / 2;
  });
  // Map distance to scale (closer = bigger)
  const scaleSync = useTransform(distance, [-150, 0, 150], [1, 1.4, 1]);
  // Add spring physics for smooth magnification
  const scale = useSpring(scaleSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  });
  // Map distance to Y translation (closer = higher)
  const ySync = useTransform(distance, [-150, 0, 150], [0, -10, 0]);
  const y = useSpring(ySync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  });
  // Dynamically get the Lucide icon
  const IconComponent = (Icons as any)[app.icon + 'Icon'] || Icons.CircleIcon;
  // Icon background colors based on app ID
  const getBgColor = (id: string) => {
    switch (id) {
      case 'finder':
        return 'bg-blue-500';
      case 'xcode':
        return 'bg-blue-600';
      case 'terminal':
        return 'bg-gray-800';
      case 'mail':
        return 'bg-blue-400';
      case 'safari-github':
        return 'bg-gray-900';
      case 'safari-linkedin':
        return 'bg-blue-700';
      default:
        return 'bg-gray-500';
    }
  };
  return (
    <div className="relative group flex flex-col items-center">
      {/* Tooltip */}
      <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
        <div className="bg-mac-glass backdrop-blur-md text-white text-xs px-3 py-1 rounded-md border border-mac-border shadow-lg whitespace-nowrap">
          {app.title}
        </div>
      </div>

      <motion.button
        ref={ref}
        style={{
          scale,
          y
        }}
        onClick={onClick}
        className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${getBgColor(app.id)} text-white relative overflow-hidden`}
        whileTap={{
          scale: 0.95
        }}>
        
        {/* Glossy overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
        <IconComponent size={24} className="relative z-10 drop-shadow-md" />
      </motion.button>

      {/* Active Dot */}
      <div
        className="h-1 w-1 mt-1.5 rounded-full bg-white/80 transition-opacity duration-300"
        style={{
          opacity: isOpen ? 1 : 0
        }} />
      
    </div>);

};