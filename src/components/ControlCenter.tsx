import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  WifiIcon,
  BluetoothIcon,
  SunIcon,
  Volume2Icon,
  MoonIcon,
  PlaneIcon,
  KeyboardIcon } from
'lucide-react';
interface ControlCenterProps {
  isOpen: boolean;
  onClose: () => void;
  brightness: number;
  setBrightness: (v: number) => void;
  volume: number;
  setVolume: (v: number) => void;
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
  wifi: boolean;
  setWifi: (v: boolean) => void;
  bluetooth: boolean;
  setBluetooth: (v: boolean) => void;
  airplane: boolean;
  setAirplane: (v: boolean) => void;
}
export const ControlCenter: React.FC<ControlCenterProps> = ({
  isOpen,
  onClose,
  brightness,
  setBrightness,
  volume,
  setVolume,
  darkMode,
  setDarkMode,
  wifi,
  setWifi,
  bluetooth,
  setBluetooth,
  airplane,
  setAirplane
}) => {
  return (
    <AnimatePresence>
      {isOpen &&
      <>
          {/* Click outside catcher */}
          <div className="fixed inset-0 z-[60]" onClick={onClose} />

          <motion.div
          initial={{
            opacity: 0,
            y: -10,
            scale: 0.97
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: -10,
            scale: 0.97
          }}
          transition={{
            type: 'spring',
            damping: 22,
            stiffness: 280
          }}
          className="fixed top-9 right-4 z-[70] w-80 bg-white/10 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl p-4 text-white"
          style={{
            backgroundColor: 'rgba(30, 30, 32, 0.7)'
          }}>
          
            {/* Top row: Wi-Fi / Bluetooth / Airplane */}
            <div className="bg-white/5 rounded-xl p-3 mb-3 grid grid-cols-3 gap-2">
              <ToggleTile
              icon={<WifiIcon size={18} />}
              label="Wi-Fi"
              sub="Home"
              active={wifi}
              onClick={() => setWifi(!wifi)} />
            
              <ToggleTile
              icon={<BluetoothIcon size={18} />}
              label="Bluetooth"
              sub={bluetooth ? 'On' : 'Off'}
              active={bluetooth}
              onClick={() => setBluetooth(!bluetooth)} />
            
              <ToggleTile
              icon={<PlaneIcon size={18} />}
              label="AirDrop"
              sub={airplane ? 'On' : 'Off'}
              active={airplane}
              onClick={() => setAirplane(!airplane)} />
            
            </div>

            {/* Dark mode + Keyboard row */}
            <div className="bg-white/5 rounded-xl p-3 mb-3 grid grid-cols-2 gap-2">
              <ToggleTile
              icon={darkMode ? <MoonIcon size={18} /> : <SunIcon size={18} />}
              label={darkMode ? 'Dark Mode' : 'Light Mode'}
              sub={darkMode ? 'On' : 'Off'}
              active={darkMode}
              onClick={() => setDarkMode(!darkMode)} />
            
              <ToggleTile
              icon={<KeyboardIcon size={18} />}
              label="Keyboard"
              sub="Brightness"
              active={false}
              onClick={() => {}} />
            
            </div>

            {/* Display brightness */}
            <div className="bg-white/5 rounded-xl p-3 mb-3">
              <div className="text-xs font-semibold text-white/70 mb-2 flex items-center gap-2">
                <SunIcon size={12} /> Display
              </div>
              <Slider
              value={brightness}
              onChange={setBrightness}
              icon={<SunIcon size={14} />} />
            
            </div>

            {/* Sound */}
            <div className="bg-white/5 rounded-xl p-3">
              <div className="text-xs font-semibold text-white/70 mb-2 flex items-center gap-2">
                <Volume2Icon size={12} /> Sound
              </div>
              <Slider
              value={volume}
              onChange={setVolume}
              icon={<Volume2Icon size={14} />} />
            
            </div>
          </motion.div>
        </>
      }
    </AnimatePresence>);

};
const ToggleTile: React.FC<{
  icon: React.ReactNode;
  label: string;
  sub: string;
  active: boolean;
  onClick: () => void;
}> = ({ icon, label, sub, active, onClick }) =>
<button
  onClick={onClick}
  className={`flex items-center gap-2 p-2 rounded-lg transition-all hover:-translate-y-0.5 ${active ? 'bg-blue-500 text-white' : 'bg-white/5 text-white/80 hover:bg-white/10'}`}>
  
    <div
    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${active ? 'bg-white/20' : 'bg-white/10'}`}>
    
      {icon}
    </div>
    <div className="text-left min-w-0">
      <div className="text-[11px] font-semibold truncate">{label}</div>
      <div className="text-[10px] opacity-70 truncate">{sub}</div>
    </div>
  </button>;

const Slider: React.FC<{
  value: number;
  onChange: (v: number) => void;
  icon: React.ReactNode;
}> = ({ value, onChange, icon }) =>
<div className="relative h-6 bg-white/10 rounded-full overflow-hidden flex items-center">
    <div
    className="absolute left-0 top-0 bottom-0 bg-white/80 transition-all"
    style={{
      width: `${value}%`
    }} />
  
    <div className="relative z-10 flex items-center w-full px-2 text-mac-dark">
      <div className="opacity-80">{icon}</div>
    </div>
    <input
    type="range"
    min={20}
    max={100}
    value={value}
    onChange={(e) => onChange(Number(e.target.value))}
    className="absolute inset-0 opacity-0 cursor-pointer" />
  
  </div>;