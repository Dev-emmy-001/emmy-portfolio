import React, { useState, createContext, useContext } from 'react';
export type AppId =
'finder' |
'xcode' |
'terminal' |
'mail' |
'safari-github' |
'safari-linkedin' |
'safari-portfolio' |
'resume';
export interface AppConfig {
  id: AppId;
  title: string;
  icon: string; // We'll map this to Lucide icons in the UI
  defaultWidth: number;
  defaultHeight: number;
  isLink?: boolean;
  url?: string;
}
export const APPS: Record<AppId, AppConfig> = {
  finder: {
    id: 'finder',
    title: 'About Me',
    icon: 'User',
    defaultWidth: 600,
    defaultHeight: 500
  },
  xcode: {
    id: 'xcode',
    title: 'Projects',
    icon: 'Code',
    defaultWidth: 800,
    defaultHeight: 600
  },
  terminal: {
    id: 'terminal',
    title: 'Terminal',
    icon: 'Terminal',
    defaultWidth: 650,
    defaultHeight: 450
  },
  mail: {
    id: 'mail',
    title: 'Contact',
    icon: 'Mail',
    defaultWidth: 500,
    defaultHeight: 550
  },
  'safari-github': {
    id: 'safari-github',
    title: 'GitHub',
    icon: 'Github',
    defaultWidth: 700,
    defaultHeight: 600
  },
  'safari-linkedin': {
    id: 'safari-linkedin',
    title: 'LinkedIn',
    icon: 'Linkedin',
    defaultWidth: 700,
    defaultHeight: 600
  },
  'safari-portfolio': {
    id: 'safari-portfolio',
    title: 'My Portfolio',
    icon: 'Globe',
    defaultWidth: 750,
    defaultHeight: 600
  },
  resume: {
    id: 'resume',
    title: 'Resume',
    icon: 'FileText',
    defaultWidth: 750,
    defaultHeight: 650
  }
};
export const DOCK_APPS: AppId[] = [
'finder',
'xcode',
'terminal',
'mail',
'safari-github',
'safari-linkedin'];

interface WindowsState {
  openApps: AppId[];
  minimizedApps: AppId[];
  focusedApp: AppId | null;
  zIndices: Record<AppId, number>;
  openApp: (id: AppId) => void;
  closeApp: (id: AppId) => void;
  minimizeApp: (id: AppId) => void;
  focusApp: (id: AppId) => void;
}
const WindowsContext = createContext<WindowsState | undefined>(undefined);
export const WindowsProvider = ({ children }: {children: ReactNode;}) => {
  const [openApps, setOpenApps] = useState<AppId[]>([]);
  const [minimizedApps, setMinimizedApps] = useState<AppId[]>([]);
  const [focusedApp, setFocusedApp] = useState<AppId | null>(null);
  const [zIndices, setZIndices] = useState<Record<AppId, number>>(
    {} as Record<AppId, number>
  );
  const [topZ, setTopZ] = useState(10);
  const focusApp = (id: AppId) => {
    setFocusedApp(id);
    setZIndices((prev) => ({
      ...prev,
      [id]: topZ + 1
    }));
    setTopZ((prev) => prev + 1);
    setMinimizedApps((prev) => prev.filter((appId) => appId !== id));
  };
  const openApp = (id: AppId) => {
    if (!openApps.includes(id)) {
      setOpenApps((prev) => [...prev, id]);
    }
    focusApp(id);
  };
  const closeApp = (id: AppId) => {
    setOpenApps((prev) => prev.filter((appId) => appId !== id));
    setMinimizedApps((prev) => prev.filter((appId) => appId !== id));
    if (focusedApp === id) {
      setFocusedApp(null);
    }
  };
  const minimizeApp = (id: AppId) => {
    if (!minimizedApps.includes(id)) {
      setMinimizedApps((prev) => [...prev, id]);
    }
    if (focusedApp === id) {
      setFocusedApp(null);
    }
  };
  return (
    <WindowsContext.Provider
      value={{
        openApps,
        minimizedApps,
        focusedApp,
        zIndices,
        openApp,
        closeApp,
        minimizeApp,
        focusApp
      }}>
      
      {children}
    </WindowsContext.Provider>);

};
export const useWindows = () => {
  const context = useContext(WindowsContext);
  if (!context)
  throw new Error('useWindows must be used within WindowsProvider');
  return context;
};