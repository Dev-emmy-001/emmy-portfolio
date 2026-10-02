import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BootScreen } from './components/BootScreen';
import { Desktop } from './components/Desktop';
import { WindowsProvider } from './context/WindowsContext';

export function App() {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <WindowsProvider>
      <AnimatePresence mode="wait">
        {isBooting &&
        <BootScreen key="boot" onComplete={() => setIsBooting(false)} />
        }
      </AnimatePresence>
      {!isBooting && <Desktop />}
    </WindowsProvider>);

}