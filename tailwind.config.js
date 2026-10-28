/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // Screens are Tailwind defaults (sm 640, md 768, lg 1024, xl 1280, 2xl 1536). Not changed.
    // Radii are restricted, not extended: only these four exist. Documents have square corners;
    // lg stays small for form fields, sheets and the chat panel.
    borderRadius: {
      none: '0',
      DEFAULT: '0',
      lg: '4px',
      full: '9999px',
    },
    extend: {
      colors: {
        // Brand v2 "The Ledger" tokens: Marketing_Assets/01_Brand/tokens/baxio-tokens.css.
        // Neutral ramp. Named aliases below are the only names used in components.
        neutral: {
          0:   '#FFFFFF', // white: forms, sheets
          50:  '#F6F3EC', // paper
          100: '#ECE6D9', // paper-deep: pill hover, shaded bands
          200: '#D6CEBD', // rule
          300: '#A1A1A6', // secondary text on ink
          400: '#8E8E93', // ink-3: captions, disabled (non-text use only)
          500: '#5F5F64', // ink-2
          600: '#3A3A3C', // rule-dark: hairlines on ink
          700: '#3A3A3C', // ink pill hover
          800: '#1D1D1F', // ink
          900: '#1D1D1F', // ink (no pure black in the system)
        },
        white:   '#FFFFFF',
        paper:   '#F6F3EC',
        'paper-2': '#ECE6D9', // paper-deep
        'paper-deep': '#ECE6D9',
        ink:     '#1D1D1F',
        'ink-2': '#5F5F64',
        'ink-3': '#8E8E93',
        rule:    '#D6CEBD',
        'rule-dark': '#3A3A3C',
        black:   '#1D1D1F', // dark surfaces are ink
        'on-black-2': '#A1A1A6',
        // Ledger green: functional only ("reconciled", done, ticked). Never decorative.
        ledger: {
          DEFAULT: '#1E4D3A',
          tint: '#DCE6DF',
        },
        // Crimson: the red pen. About 5% of any screen, never a section fill or body text.
        crimson: {
          100: '#F3E1DF',
          400: '#E8474B', // on ink only
          600: '#920B0E',
          700: '#7A090C', // press / hover
          DEFAULT: '#920B0E',
          press: '#7A090C',
          'on-black': '#E8474B',
          tint: '#F3E1DF',
        },
      },
      fontFamily: {
        sans:  ['"IBM Plex Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', '"Times New Roman"', 'serif'],
        mono:  ['"IBM Plex Mono"', 'Consolas', '"Courier New"', 'monospace'],
      },
      // [size, { lineHeight, letterSpacing, fontWeight }]. Headings and display numbers are
      // Newsreader 500 at -0.015em; labels are Plex Mono uppercase at +0.08em.
      fontSize: {
        'display-xl': ['92px', { lineHeight: '1',    letterSpacing: '-0.015em', fontWeight: '500' }],
        'display-xl-md': ['76px', { lineHeight: '1.02', letterSpacing: '-0.015em', fontWeight: '500' }],
        'display-xl-sm': ['56px', { lineHeight: '1.04', letterSpacing: '-0.015em', fontWeight: '500' }],
        'display-xl-xs': ['44px', { lineHeight: '1.06', letterSpacing: '-0.015em', fontWeight: '500' }],
        'display-l':  ['64px', { lineHeight: '1.05', letterSpacing: '-0.015em', fontWeight: '500' }],
        'display-l-xs': ['38px', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '500' }],
        'h2':         ['48px', { lineHeight: '1.1',  letterSpacing: '-0.015em', fontWeight: '500' }],
        'h2-xs':      ['32px', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '500' }],
        'h3':         ['28px', { lineHeight: '1.2',  letterSpacing: '-0.015em', fontWeight: '500' }],
        'h3-xs':      ['24px', { lineHeight: '1.2',  letterSpacing: '-0.015em', fontWeight: '500' }],
        'numeral':    ['48px', { lineHeight: '1',    letterSpacing: '-0.015em', fontWeight: '500' }],
        'numeral-sm': ['32px', { lineHeight: '1',    letterSpacing: '-0.015em', fontWeight: '500' }],
        'numeral-xs': ['24px', { lineHeight: '1',    letterSpacing: '-0.015em', fontWeight: '500' }],
        'ladder':     ['64px', { lineHeight: '1',    letterSpacing: '-0.015em', fontWeight: '500' }],
        'ladder-xs':  ['40px', { lineHeight: '1',    letterSpacing: '-0.015em', fontWeight: '500' }],
        'lead':       ['22px', { lineHeight: '1.4',  letterSpacing: '0',        fontWeight: '400' }],
        'lead-xs':    ['18px', { lineHeight: '1.45', letterSpacing: '0',        fontWeight: '400' }],
        'question':   ['20px', { lineHeight: '1.3',  letterSpacing: '0',        fontWeight: '500' }],
        'body':       ['17px', { lineHeight: '1.6',  letterSpacing: '0',        fontWeight: '400' }],
        'body-sm':    ['15px', { lineHeight: '1.55', letterSpacing: '0',        fontWeight: '400' }],
        'caption':    ['14px', { lineHeight: '1.45', letterSpacing: '0',        fontWeight: '400' }],
        'meta':       ['12px', { lineHeight: '1.4',  letterSpacing: '0.08em',   fontWeight: '500' }],
        'legal':      ['12px', { lineHeight: '1.4',  letterSpacing: '0',        fontWeight: '400' }],
        'button':     ['16px', { lineHeight: '1',    letterSpacing: '0',        fontWeight: '500' }],
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
        'sheet-sm': '560px',
        panel: '360px',   // chat panel
      },
      boxShadow: {
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
    // Figures and wrapping. Tailwind 3 has no font-variant-numeric=tabular or text-wrap utility.
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.tnum':        { fontVariantNumeric: 'tabular-nums lining-nums' },
        '.balance':     { textWrap: 'balance' },
      })
    }),
  ],
}
