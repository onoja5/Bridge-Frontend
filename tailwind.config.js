/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xxs: '320px', // Extra small screens (e.g., older phones)
        xs: '460px', // Custom breakpoint for screens less than 460px
        sm: '640px', // Default small breakpoint
        md: '768px', // Medium screens (e.g., tablets)
        lg: '1024px', // Large screens (e.g., laptops)
        xl: '1280px', // Extra large screens (e.g., desktops)
        '2xl': '1536px', // 2X large screens
      },
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
      fontSize: {
        xs: ['0.75rem', '1rem'], // Small text
        sm: ['0.875rem', '1.25rem'], // Default small
        base: ['1rem', '1.5rem'], // Default base
        lg: ['1.125rem', '1.75rem'], // Large text
        xl: ['1.25rem', '1.75rem'], // Extra large
        '2xl': ['1.5rem', '2rem'], // Larger
      },
      spacing: {
        icon: '1.5rem', // Default icon size
        'icon-lg': '2rem', // Large icon size
      },
      width: {
        'img-sm': '50px', // Small image width
        'img-md': '100px', // Medium image width
        'img-lg': '150px', // Large image width
      },
      height: {
        'img-sm': '50px', // Small image height
        'img-md': '100px', // Medium image height
        'img-lg': '150px', // Large image height
      },
    },
  },
  plugins: [],
};
