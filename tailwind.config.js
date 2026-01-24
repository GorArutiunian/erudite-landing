/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Logo colors - Professional muted versions
        primary: {
          DEFAULT: '#0066FF', // Original ERUDITE logo blue
          50: '#E6F0FF',
          100: '#CCE1FF',
          200: '#99C3FF',
          300: '#66A5FF',
          400: '#3387FF',
          500: '#0066FF', // Original blue
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
          950: '#0F2B50', // Very deep blue for dark mode backgrounds
        },
        green: {
          DEFAULT: '#22B14C', // Green
          50: '#E8F8ED',
          100: '#D1F1DB',
          200: '#A3E3B7',
          300: '#75D593',
          400: '#47C76F',
          500: '#22B14C',
          600: '#1B8E3D',
          700: '#146B2E',
          800: '#0E471F',
          900: '#072410',
        },
        yellow: {
          DEFAULT: '#FFF200', // Yellow
          50: '#FFFCE6',
          100: '#FFF9CC',
          200: '#FFF399',
          300: '#FFED66',
          400: '#FFE733',
          500: '#FFF200',
          600: '#CCC200',
          700: '#999100',
          800: '#666100',
          900: '#333000',
        },
        red: {
          DEFAULT: '#ED1C24', // Red
          50: '#FDE8E9',
          100: '#FBD1D3',
          200: '#F7A3A7',
          300: '#F3757B',
          400: '#EF474F',
          500: '#ED1C24',
          600: '#BE161D',
          700: '#8F1116',
          800: '#5F0B0E',
          900: '#300607',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
        // Aliases for backward compatibility
        accent: {
          DEFAULT: '#FFF200',
          50: '#FFFCE6',
          100: '#FFF9CC',
          200: '#FFF399',
          300: '#FFED66',
          400: '#FFE733',
          500: '#FFF200',
          600: '#CCC200',
          700: '#999100',
          800: '#666100',
          900: '#333000',
        },
        secondary: {
          DEFAULT: '#22B14C',
          50: '#E8F8ED',
          100: '#D1F1DB',
          200: '#A3E3B7',
          300: '#75D593',
          400: '#47C76F',
          500: '#22B14C',
          600: '#1B8E3D',
          700: '#146B2E',
          800: '#0E471F',
          900: '#072410',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
