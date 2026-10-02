/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        mac: {
          dark: '#1d1d1f',
          light: '#f5f5f7',
          border: 'rgba(255, 255, 255, 0.1)',
          glass: 'rgba(30, 30, 32, 0.65)',
          active: 'rgba(255, 255, 255, 0.15)',
        }
      },
      backgroundImage: {
        'mac-wallpaper': "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=2400&q=80')",
      },
      boxShadow: {
        'mac-window': '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.1)',
        'mac-dock': '0 0 0 1px rgba(255,255,255,0.1), 0 10px 20px rgba(0,0,0,0.3)',
      }
    },
  },
  plugins: [],
}