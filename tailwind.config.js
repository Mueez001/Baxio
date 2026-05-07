/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#070B14',
          900: '#0B1220',
          800: '#101828',
          700: '#1D2939',
          600: '#344054',
          500: '#475467',
          400: '#667085',
          300: '#98A2B3',
          200: '#D0D5DD',
          100: '#EAECF0',
          50: '#F2F4F7',
        },
        brand: {
          50: '#EEF4FF',
          100: '#D9E5FF',
          200: '#B6CCFF',
          300: '#85A8FF',
          400: '#5C84F5',
          500: '#3B62E0',
          600: '#2A48BF',
          700: '#223A99',
          800: '#1B2E78',
          900: '#152459',
        },
        accent: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16,24,40,.04), 0 1px 3px rgba(16,24,40,.06)',
        card: '0 4px 24px -8px rgba(16,24,40,.08), 0 2px 6px -2px rgba(16,24,40,.04)',
        ring: '0 0 0 6px rgba(59,98,224,.10)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(16,24,40,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,24,40,.05) 1px, transparent 1px)',
        'hero-radial':
          'radial-gradient(1200px 600px at 80% -10%, rgba(59,98,224,.15), transparent 60%), radial-gradient(800px 400px at -10% 10%, rgba(16,185,129,.10), transparent 60%)',
      },
    },
  },
  plugins: [],
}
