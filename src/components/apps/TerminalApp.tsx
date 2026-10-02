import React, { useEffect, useState, useRef } from 'react';
import { skills } from '../../data/skills';
interface Command {
  cmd: string;
  output: React.ReactNode;
}
export const TerminalApp: React.FC = () => {
  const [history, setHistory] = useState<Command[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [history, input]);
  // Initial boot sequence
  useEffect(() => {
    const bootSequence = async () => {
      const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
      await delay(500);
      setHistory([
      {
        cmd: 'whoami',
        output: 'emmanuel_saka'
      }]
      );
      await delay(800);
      setHistory((prev) => [
      ...prev,
      {
        cmd: 'cat about.txt',
        output: 'Full Stack Developer. M5 Chip Powered. Ready to build.'
      }]
      );
      await delay(800);
      setHistory((prev) => [
      ...prev,
      {
        cmd: 'ls skills/',
        output:
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              {skills.map((s) =>
          <div key={s.category}>
                  <div className="text-blue-400 font-bold mb-1">
                    {s.category}/
                  </div>
                  <ul className="text-gray-300 space-y-1">
                    {s.items.map((item) =>
              <li key={item}> ├── {item}</li>
              )}
                  </ul>
                </div>
          )}
            </div>

      }]
      );
      setIsTyping(false);
    };
    bootSequence();
  }, []);
  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let output: React.ReactNode = '';
      if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      } else if (cmd === 'help') {
        output =
        <div className="text-gray-300">
            Available commands:
            <br />
            <span className="text-green-400">whoami</span> - Display current
            user
            <br />
            <span className="text-green-400">skills</span> - List technical
            skills
            <br />
            <span className="text-green-400">clear</span> - Clear terminal
            output
            <br />
            <span className="text-green-400">help</span> - Show this message
          </div>;

      } else if (cmd === 'skills') {
        output =
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            {skills.map((s) =>
          <div key={s.category}>
                <div className="text-blue-400 font-bold mb-1">
                  {s.category}/
                </div>
                <ul className="text-gray-300 space-y-1">
                  {s.items.map((item) =>
              <li key={item}> ├── {item}</li>
              )}
                </ul>
              </div>
          )}
          </div>;

      } else if (cmd === 'whoami') {
        output = 'emmanuel_saka';
      } else if (cmd !== '') {
        output = <span className="text-red-400">command not found: {cmd}</span>;
      }
      if (cmd !== '') {
        setHistory((prev) => [
        ...prev,
        {
          cmd: input,
          output
        }]
        );
      }
      setInput('');
    }
  };
  return (
    <div
      className="h-full w-full bg-[#1c1c1e] text-gray-200 font-mono p-4 overflow-y-auto mac-scrollbar text-sm"
      onClick={() => document.getElementById('terminal-input')?.focus()}>
      
      <div className="text-gray-400 mb-4">
        Last login: {new Date().toString().split(' ').slice(0, 4).join(' ')} on
        ttys000
        <br />
        Type 'help' to see available commands.
      </div>

      {history.map((item, i) =>
      <div key={i} className="mb-4">
          <div className="flex items-center gap-2">
            <span className="text-green-400">emmanuel@macbook-pro</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-400">$</span>
            <span>{item.cmd}</span>
          </div>
          <div className="mt-1">{item.output}</div>
        </div>
      )}

      {!isTyping &&
      <div className="flex items-center gap-2">
          <span className="text-green-400">emmanuel@macbook-pro</span>
          <span className="text-blue-400">~</span>
          <span className="text-gray-400">$</span>
          <input
          id="terminal-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="flex-1 bg-transparent outline-none border-none text-gray-200"
          autoFocus
          autoComplete="off"
          spellCheck="false" />
        
        </div>
      }
      <div ref={bottomRef} />
    </div>);

};