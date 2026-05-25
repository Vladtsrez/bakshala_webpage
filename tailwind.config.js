/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bakshala: {
          deep:  '#1C2E38',
          dark:  '#2E4A5A',
          lake:  '#5B8FA8',
          mist:  '#A8C5D6',
          fog:   '#EEF3F6',
          shore: '#F5F2EC',
          sand:  '#A89060',
          text:  '#1A2530',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

