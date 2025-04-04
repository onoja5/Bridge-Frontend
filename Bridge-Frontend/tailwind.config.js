/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        white: '#fff',
        black: '#000000',
        alternative: '#ddeaff',
        Grey1: '#F3F3F3',
        Line: '#d1d5db',
        positive: '#17813C',
        negative: '#ff3b2d',
      },
    },
  },
  plugins: [],
};
