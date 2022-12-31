/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      green: '#1b2911',
      tan: '#eaddcf',
      darktan: '#716040',

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