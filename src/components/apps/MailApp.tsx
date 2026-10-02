import React, { useState, Component } from 'react';
import { SendIcon, PaperclipIcon, Image as ImageIcon } from 'lucide-react';
export const MailApp: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const handleSend = () => {
    const mailtoLink = `mailto:emmanuelsaka333@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };
  return (
    <div className="h-full w-full bg-[#f5f5f7] dark:bg-[#1e1e1e] flex flex-col text-gray-900 dark:text-gray-100">
      {/* Toolbar */}
      <div className="h-14 border-b border-gray-300 dark:border-white/10 flex items-center px-4 justify-between bg-white/50 dark:bg-white/5 backdrop-blur-md">
        <button
          onClick={handleSend}
          className="flex items-center gap-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm font-medium transition-colors">
          
          <SendIcon size={16} /> Send
        </button>
        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
          <button className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            <PaperclipIcon size={18} />
          </button>
          <button className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            <ImageIcon size={18} />
          </button>
        </div>
      </div>

      {/* Headers */}
      <div className="px-6 py-2 border-b border-gray-300 dark:border-white/10 space-y-2 bg-white dark:bg-[#1e1e1e]">
        <div className="flex items-center text-sm">
          <span className="w-16 text-gray-500 dark:text-gray-400">To:</span>
          <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 rounded-md">
            Emmanuel Saka &lt;emmanuelsaka333@gmail.com&gt;
          </span>
        </div>
        <div className="flex items-center text-sm border-t border-gray-100 dark:border-white/5 pt-2">
          <span className="w-16 text-gray-500 dark:text-gray-400">
            Subject:
          </span>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What's this about?"
            className="flex-1 bg-transparent outline-none border-none placeholder-gray-400" />
          
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 p-6 bg-white dark:bg-[#1e1e1e]">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your message here..."
          className="w-full h-full bg-transparent outline-none border-none resize-none font-sans text-sm leading-relaxed placeholder-gray-400" />
        
      </div>
    </div>);

};