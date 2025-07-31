/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            'primary-orange': '#FF8000',
            'dark-background': '#0B0F17',
            'secondary-orange': '#FF6B00',
            'accent-orange': '#E55100',
            'glass-white': 'rgba(255, 255, 255, 0.1)',
            'glass-orange': 'rgba(255, 128, 0, 0.1)',
          },
          backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            'hero-gradient': 'linear-gradient(135deg, #0B0F17 0%, #1A1A2E 50%, #16213E 100%)',
            'card-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            'orange-gradient': 'linear-gradient(135deg, #FF8000 0%, #FF6B00 50%, #E55100 100%)',
            'orange-glow': 'linear-gradient(135deg, rgba(255, 128, 0, 0.2) 0%, rgba(255, 107, 0, 0.1) 50%, rgba(229, 81, 0, 0.05) 100%)',
          },
          backdropBlur: {
            xs: '2px',
          },
          boxShadow: {
            'glow-orange': '0 0 20px rgba(255, 128, 0, 0.3)',
            'glow-orange-lg': '0 0 40px rgba(255, 128, 0, 0.4)',
            'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          },
        },
      },
      plugins: [],
    }
