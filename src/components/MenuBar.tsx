import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  WifiIcon,
  BatteryFullIcon,
  SearchIcon,
  SlidersHorizontalIcon } from
'lucide-react';
import { useWindows, APPS, AppId } from '../context/WindowsContext';
// Clean SVG Apple Logo
const AppleLogo = ({ className }: {className?: string;}) =>
<svg viewBox="0 0 384 512" className={className} fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>;

interface MenuItem {
  label: string;
  action?: () => void;
  shortcut?: string;
  separator?: boolean;
  disabled?: boolean;
}
interface MenuBarProps {
  onOpenCommandPalette: () => void;
  onToggleControlCenter: () => void;
  wifi: boolean;
}
export const MenuBar: React.FC<MenuBarProps> = ({
  onOpenCommandPalette,
  onToggleControlCenter,
  wifi
}) => {
  const { focusedApp, openApp, closeApp, minimizeApp, openApps } = useWindows();
  const [time, setTime] = useState(new Date());
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  // Close menus on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);
  const activeAppName = focusedApp ? APPS[focusedApp].title : 'Finder';
  const formatTime = (date: Date) =>
  date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
  const copyEmail = () => {
    navigator.clipboard.writeText('emmanuelsaka333@gmail.com');
    setOpenMenu(null);
  };
  const closeFocused = () => {
    if (focusedApp) closeApp(focusedApp);
    setOpenMenu(null);
  };
  const minimizeFocused = () => {
    if (focusedApp) minimizeApp(focusedApp);
    setOpenMenu(null);
  };
  const open = (id: AppId) => {
    openApp(id);
    setOpenMenu(null);
  };
  // Menu definitions
  const appleMenu: MenuItem[] = [
  {
    label: 'About Emmanuel Saka',
    action: () => open('finder')
  },
  {
    label: 'View Resume',
    action: () => open('resume')
  },
  {
    separator: true,
    label: ''
  },
  {
    label: 'System Settings…',
    action: () => {
      onToggleControlCenter();
      setOpenMenu(null);
    },
    shortcut: '⌘,'
  },
  {
    separator: true,
    label: ''
  },
  {
    label: 'Restart…',
    action: () => {
      window.location.reload();
    },
    shortcut: '⌃⌘Q'
  }];

  const fileMenu: MenuItem[] = [
  {
    label: 'New Window…',
    action: () => open('finder'),
    shortcut: '⌘N'
  },
  {
    label: 'Open Resume',
    action: () => open('resume'),
    shortcut: '⌘O'
  },
  {
    separator: true,
    label: ''
  },
  {
    label: 'Close Window',
    action: closeFocused,
    shortcut: '⌘W',
    disabled: !focusedApp
  }];

  const editMenu: MenuItem[] = [
  {
    label: 'Copy Email Address',
    action: copyEmail,
    shortcut: '⌘C'
  },
  {
    label: 'Copy GitHub URL',
    action: () => {
      navigator.clipboard.writeText('https://github.com/Dev-emmy-001');
      setOpenMenu(null);
    }
  },
  {
    label: 'Copy LinkedIn URL',
    action: () => {
      navigator.clipboard.writeText(
        'https://www.linkedin.com/in/saka-emmanuel-01b43923b'
      );
      setOpenMenu(null);
    }
  },
  {
    separator: true,
    label: ''
  },
  {
    label: 'Find…',
    action: onOpenCommandPalette,
    shortcut: '⌘K'
  }];

  const viewMenu: MenuItem[] = [
  {
    label: 'Show Projects',
    action: () => open('xcode')
  },
  {
    label: 'Show Skills (Terminal)',
    action: () => open('terminal')
  },
  {
    label: 'Show Contact',
    action: () => open('mail')
  },
  {
    separator: true,
    label: ''
  },
  {
    label: 'Toggle Control Center',
    action: () => {
      onToggleControlCenter();
      setOpenMenu(null);
    }
  }];

  const goMenu: MenuItem[] = [
  {
    label: 'GitHub Profile',
    action: () => open('safari-github')
  },
  {
    label: 'LinkedIn Profile',
    action: () => open('safari-linkedin')
  },
  {
    label: 'Portfolio Repo',
    action: () => open('safari-portfolio')
  },
  {
    separator: true,
    label: ''
  },
  {
    label: 'Send an Email',
    action: () => open('mail')
  }];

  const windowMenu: MenuItem[] = [
  {
    label: 'Minimize',
    action: minimizeFocused,
    shortcut: '⌘M',
    disabled: !focusedApp
  },
  {
    label: 'Close Window',
    action: closeFocused,
    shortcut: '⌘W',
    disabled: !focusedApp
  },
  {
    separator: true,
    label: ''
  },
  ...openApps.map((id) => ({
    label: APPS[id].title,
    action: () => open(id)
  }))];

  const helpMenu: MenuItem[] = [
  {
    label: 'Press ⌘K for Spotlight',
    disabled: true,
    label_: ''
  } as any,
  {
    separator: true,
    label: ''
  },
  {
    label: 'Open Spotlight',
    action: () => {
      onOpenCommandPalette();
      setOpenMenu(null);
    },
    shortcut: '⌘K'
  },
  {
    label: 'Contact Developer',
    action: () => open('mail')
  }];

  const menus: Record<string, MenuItem[]> = {
    apple: appleMenu,
    File: fileMenu,
    Edit: editMenu,
    View: viewMenu,
    Go: goMenu,
    Window: windowMenu,
    Help: helpMenu
  };
  const renderDropdown = (key: string) => {
    if (openMenu !== key) return null;
    const items = menus[key];
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: -4
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.12
        }}
        className="absolute top-full mt-1 left-0 min-w-[220px] bg-white/10 backdrop-blur-2xl border border-white/15 rounded-md shadow-2xl py-1 z-[60] overflow-hidden"
        style={{
          backgroundColor: 'rgba(30,30,32,0.85)'
        }}>
        
        {items.map((item, i) =>
        item.separator ?
        <div key={i} className="my-1 h-px bg-white/10" /> :

        <button
          key={i}
          onClick={item.action}
          disabled={item.disabled}
          className={`w-full text-left px-3 py-1 text-[13px] flex items-center justify-between gap-6 ${item.disabled ? 'text-white/30 cursor-default' : 'text-white hover:bg-blue-500'}`}>
          
              <span>{item.label}</span>
              {item.shortcut &&
          <span
            className={item.disabled ? 'text-white/20' : 'text-white/50'}>
            
                  {item.shortcut}
                </span>
          }
            </button>

        )}
      </motion.div>);

  };
  const menuButtonClass = (key: string) =>
  `relative cursor-default px-2 py-0.5 rounded transition-colors ${openMenu === key ? 'bg-white/30' : 'hover:bg-white/20'}`;
  const onMenuClick = (key: string) =>
  setOpenMenu((prev) => prev === key ? null : key);
  const onMenuHover = (key: string) => {
    if (openMenu !== null) setOpenMenu(key);
  };
  return (
    <header
      ref={menuRef}
      className="h-7 w-full bg-mac-glass backdrop-blur-md border-b border-mac-border flex items-center justify-between px-4 text-[13px] font-medium text-white z-50 select-none relative">
      
      <div className="flex items-center gap-1">
        <div className="relative">
          <button
            onClick={() => onMenuClick('apple')}
            onMouseEnter={() => onMenuHover('apple')}
            className={
            menuButtonClass('apple') + ' flex items-center justify-center'
            }
            aria-label="Apple Menu">
            
            <AppleLogo className="w-3.5 h-3.5" />
          </button>
          {renderDropdown('apple')}
        </div>

        <span className="font-bold cursor-default px-2">{activeAppName}</span>

        <div className="hidden md:flex items-center gap-1 text-white/90">
          {['File', 'Edit', 'View', 'Go', 'Window', 'Help'].map((label) =>
          <div key={label} className="relative">
              <button
              onClick={() => onMenuClick(label)}
              onMouseEnter={() => onMenuHover(label)}
              className={menuButtonClass(label)}>
              
                {label}
              </button>
              {renderDropdown(label)}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <BatteryFullIcon size={16} className="opacity-90" />
          <WifiIcon size={16} className={wifi ? 'opacity-90' : 'opacity-30'} />
          <button
            onClick={onOpenCommandPalette}
            className="hover:bg-white/20 p-1 rounded transition-colors"
            aria-label="Spotlight Search">
            
            <SearchIcon size={14} className="opacity-90" />
          </button>
          <button
            onClick={onToggleControlCenter}
            className="hover:bg-white/20 p-1 rounded transition-colors"
            aria-label="Control Center">
            
            <SlidersHorizontalIcon size={14} className="opacity-90" />
          </button>
        </div>
        <div className="flex items-center gap-2 cursor-default">
          <span>{formatDate(time)}</span>
          <span>{formatTime(time)}</span>
        </div>
      </div>
    </header>);

};