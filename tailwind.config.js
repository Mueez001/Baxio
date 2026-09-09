/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // Screens are Tailwind defaults (sm 640, md 768, lg 1024, xl 1280, 2xl 1536). Not changed.
    // Radii are restricted, not extended: only these four exist.
    borderRadius: {
      none: '0',
      DEFAULT: '0',
      lg: '12px',
      full: '9999px',
    },
    extend: {
      colors: {
        // Neutral ramp. Named aliases below are the only names used in components.
        neutral: {
          0:   '#FFFFFF', // paper
          50:  '#F5F5F7', // paper-2
          100: '#E8E8ED', // white-pill hover
          200: '#D2D2D7', // rule
          300: '#A1A1A6', // secondary text on black (8.2:1)
          400: '#86868B', // disabled text on white (3.4:1, non-text use only)
          500: '#5F5F64', // ink-2 (6.3:1 on white, 5.8:1 on paper-2)
          600: '#424245',
          700: '#3A3A3C', // black-pill hover
          800: '#1D1D1F', // ink
          900: '#000000', // black
        },
        paper:   '#FFFFFF',
        'paper-2': '#F5F5F7',
        ink:     '#1D1D1F',
        'ink-2': '#5F5F64',
        rule:    '#D2D2D7',
        black:   '#000000',
        'on-black-2': '#A1A1A6',
        // Crimson ramp. Only the named aliases are used in the build.
        crimson: {
          50:  '#FBF4F4',
          100: '#F7E7E7', // tint: selection, focus halo, the flagged row wash
          200: '#EEC6C7',
          300: '#E09A9C',
          400: '#E8474B', // on-black only (5.4:1 on #000). Never on white.
          500: '#B8151A',
          600: '#920B0E', // brand, text-safe: 9.2:1 on white (AAA)
          700: '#7A090C', // press / hover
          800: '#5E0709',
          900: '#420506',
          DEFAULT: '#920B0E',
          press: '#7A090C',
          'on-black': '#E8474B',
          tint: '#F7E7E7',
        },
      },
      fontFamily: {
        sans: [
          '"Mona Sans"',
          '-apple-system',
          '"SF Pro Display"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      // [size, { lineHeight, letterSpacing, fontWeight }]. Width (font-stretch) is applied
      // with the stretch-* utilities below because Tailwind 3 has no width utility.
      fontSize: {
        'display-xl': ['96px', { lineHeight: '1',    letterSpacing: '-0.035em', fontWeight: '600' }],
        'display-xl-md': ['80px', { lineHeight: '1', letterSpacing: '-0.035em', fontWeight: '600' }],
        'display-xl-sm': ['56px', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-xl-xs': ['44px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-l':  ['64px', { lineHeight: '1.04', letterSpacing: '-0.03em',  fontWeight: '600' }],
        'display-l-xs': ['38px', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '600' }],
        'h2':         ['48px', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '600' }],
        'h2-xs':      ['32px', { lineHeight: '1.12', letterSpacing: '-0.02em',  fontWeight: '600' }],
        'h3':         ['28px', { lineHeight: '1.2',  letterSpacing: '-0.015em', fontWeight: '600' }],
        'h3-xs':      ['24px', { lineHeight: '1.2',  letterSpacing: '-0.015em', fontWeight: '600' }],
        'numeral':    ['48px', { lineHeight: '1',    letterSpacing: '-0.02em',  fontWeight: '600' }],
        'numeral-sm': ['32px', { lineHeight: '1',    letterSpacing: '-0.02em',  fontWeight: '600' }],
        'numeral-xs': ['24px', { lineHeight: '1',    letterSpacing: '-0.015em', fontWeight: '600' }],
        'ladder':     ['64px', { lineHeight: '1',    letterSpacing: '-0.03em',  fontWeight: '600' }],
        'ladder-xs':  ['40px', { lineHeight: '1',    letterSpacing: '-0.025em', fontWeight: '600' }],
        'lead':       ['24px', { lineHeight: '1.35', letterSpacing: '-0.01em',  fontWeight: '400' }],
        'lead-xs':    ['19px', { lineHeight: '1.4',  letterSpacing: '-0.005em', fontWeight: '400' }],
        'question':   ['20px', { lineHeight: '1.3',  letterSpacing: '-0.01em',  fontWeight: '500' }],
        'body':       ['17px', { lineHeight: '1.55', letterSpacing: '0',        fontWeight: '400' }],
        'body-sm':    ['15px', { lineHeight: '1.5',  letterSpacing: '0',        fontWeight: '400' }],
        'caption':    ['14px', { lineHeight: '1.45', letterSpacing: '0',        fontWeight: '400' }],
        'meta':       ['13px', { lineHeight: '1.4',  letterSpacing: '0',        fontWeight: '500' }],
        'legal':      ['12px', { lineHeight: '1.4',  letterSpacing: '0',        fontWeight: '400' }],
        'button':     ['17px', { lineHeight: '1',    letterSpacing: '-0.005em', fontWeight: '500' }],
        'button-sm':  ['14px', { lineHeight: '1',    letterSpacing: '0',        fontWeight: '500' }],
        'nav':        ['14px', { lineHeight: '1',    letterSpacing: '0',        fontWeight: '400' }],
        'menu':       ['28px', { lineHeight: '1.2',  letterSpacing: '-0.015em', fontWeight: '500' }],
      },
      spacing: {
        // 4px base. Existing Tailwind steps cover 4..64 (1..16); these add the section scale.
        '18': '72px',
        '24': '96px',
        '32': '128px',
        '40': '160px',
        'nav': '48px',
      },
      maxWidth: {
        page: '1280px',   // grid, tables, logo strip, footer
        statement: '900px', // centred statements
        prose: '720px',   // leads under left-aligned H2s, FAQ, body prose, the sheet
        hero: '640px',    // centred lead under Display XL / L
        sheet: '720px',
        'sheet-sm': '560px',
        panel: '360px',   // chat panel
      },
      boxShadow: {
        sheet: '0 40px 80px -24px rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.04)',
        pill:  '0 8px 24px rgba(0,0,0,.16)',
        none: 'none',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '240': '240ms',
        '320': '320ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        rise: 'cubic-bezier(.2,.8,.2,1)',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fade: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        draw: {
          from: { transform: 'scaleX(0)' },
          to:   { transform: 'scaleX(1)' },
        },
      },
      animation: {
        rise: 'rise 500ms cubic-bezier(.2,.8,.2,1) 120ms both',
        fade: 'fade 300ms ease-out both',
        draw: 'draw 320ms cubic-bezier(.2,.8,.2,1) 640ms both',
      },
    },
  },
  plugins: [
    // Width axis and figures. Tailwind 3 has no font-stretch or font-variant-numeric=tabular utility.
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.stretch-92':  { fontStretch: '92%' },
        '.stretch-95':  { fontStretch: '95%' },
        '.stretch-100': { fontStretch: '100%' },
        '.stretch-110': { fontStretch: '110%' },
        '.tnum':        { fontVariantNumeric: 'tabular-nums lining-nums' },
        '.balance':     { textWrap: 'balance' },
      })
    }),
  ],
}
