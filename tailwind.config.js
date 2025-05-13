const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-playfair)', ...fontFamily.sans],
        handwritten: [
          'var(--font-dancing-script)',
          ...fontFamily.sans,
        ],
      },
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary-color)',
          foreground: 'var(--secondary-color-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: { height: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        float: 'float 3s ease-in-out infinite',
        scale: 'scale 0.3s ease-out forwards',
      },
      typography: ({ theme }) => ({
        cmsContent: {
          // Renamed from 'secondary' to 'cmsContent'
          css: {
            // Using your CSS variables. These are intended to work well with prose-invert.
            '--tw-prose-body': 'var(--primary-foreground)', // Light text for body
            '--tw-prose-headings':
              'var(--primary-foreground)', // Light text for headings
            '--tw-prose-lead': 'var(--primary-foreground)', // Light text for lead paragraphs
            '--tw-prose-links': 'var(--primary)', // Using your primary color for links
            '--tw-prose-bold': 'var(--primary-foreground)', // Light text for bold
            '--tw-prose-counters':
              'var(--secondary-color-foreground)', // Light color for ordered list numbers
            '--tw-prose-bullets':
              'var(--secondary-color-foreground)', // Light color for bullet points
            '--tw-prose-hr': 'var(--border)', // Horizontal rule color
            '--tw-prose-quotes':
              'var(--primary-foreground)', // Quote text color
            '--tw-prose-quote-borders': 'var(--primary)', // Quote border color
            '--tw-prose-captions':
              'var(--muted-foreground)', // Caption text color
            '--tw-prose-code': 'var(--primary-foreground)', // Inline code text
            '--tw-prose-pre-code':
              'var(--primary-foreground)', // Code block text
            '--tw-prose-pre-bg': 'var(--muted)', // Code block background
          },
        },
      }),
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
}
