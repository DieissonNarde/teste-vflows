/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#edf3e2',
        principal: '#a9fa00',
        green: '#00b64c',
        yellow: '#ffc800',
        blue: '#345ebc',
        pink: '#ff9ea3',
        gray: '#aaaaaa',
        'gray-200': '#e2e8f0',
      },
    },
  },
  plugins: [],
};
