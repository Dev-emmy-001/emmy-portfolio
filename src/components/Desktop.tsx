import React, { useEffect, useState } from 'react';
import { MenuBar } from './MenuBar';
import { Dock } from './Dock';
import { Window } from './Window';
import { CommandPalette } from './CommandPalette';
import { ControlCenter } from './ControlCenter';
import { DesktopIcons } from './DesktopIcons';
import { AboutApp } from './apps/AboutApp';
import { ProjectsApp } from './apps/ProjectsApp';
import { TerminalApp } from './apps/TerminalApp';
import { MailApp } from './apps/MailApp';
import { SafariApp } from './apps/SafariApp';
import { ResumeApp } from './apps/ResumeApp';
export const Desktop: React.FC = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isControlCenterOpen, setIsControlCenterOpen] = useState(false);
  const [brightness, setBrightness] = useState(100);
  const [volume, setVolume] = useState(70);
  const [darkMode, setDarkMode] = useState(true);
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(true);
  const [airplane, setAirplane] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  const brightnessOverlay = 1 - brightness / 100;
  return (
    <div
      className={`relative w-screen h-screen overflow-hidden bg-mac-wallpaper bg-cover bg-center flex flex-col ${darkMode ? '' : 'brightness-110'}`}>
      
      {!darkMode &&
      <div className="absolute inset-0 bg-white/30 pointer-events-none z-[1]" />
      }

      <div
        className="absolute inset-0 bg-black pointer-events-none z-[2] transition-opacity duration-300"
        style={{
          opacity: brightnessOverlay * 0.7
        }} />
      

      <MenuBar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onToggleControlCenter={() => setIsControlCenterOpen((p) => !p)}
        wifi={wifi} />
      

      <main className="flex-1 relative overflow-hidden">
        <DesktopIcons />

        <Window id="finder">
          <AboutApp />
        </Window>
        <Window id="xcode">
          <ProjectsApp />
        </Window>
        <Window id="terminal">
          <TerminalApp />
        </Window>
        <Window id="mail">
          <MailApp />
        </Window>
        <Window id="safari-github">
          <SafariApp type="github" />
        </Window>
        <Window id="safari-linkedin">
          <SafariApp type="linkedin" />
        </Window>
        <Window id="safari-portfolio">
          <SafariApp type="portfolio" />
        </Window>
        <Window id="resume">
          <ResumeApp />
        </Window>
      </main>

      <Dock />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)} />
      

      <ControlCenter
        isOpen={isControlCenterOpen}
        onClose={() => setIsControlCenterOpen(false)}
        brightness={brightness}
        setBrightness={setBrightness}
        volume={volume}
        setVolume={setVolume}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        wifi={wifi}
        setWifi={setWifi}
        bluetooth={bluetooth}
        setBluetooth={setBluetooth}
        airplane={airplane}
        setAirplane={setAirplane} />
      
    </div>);

};