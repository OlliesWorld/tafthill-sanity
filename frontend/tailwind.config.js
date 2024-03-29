/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: 'rgba(45,42,42,1);',
      white: 'rgba(255,255,255,1)',
      green: '#1b2911',
      tan: 'rgba(236,235,232,1)',
      darktan: 'rgba(145,96,51,1)',

      // ...
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',

      'lg': '5.5rem',
    }
  },
  plugins: [],
}