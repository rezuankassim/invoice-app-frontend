const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '4.5': '1.125rem',
        '8.5': '2.125rem',
        '18': '4.5rem',
        '26': '6.5rem',
      },
      colors: {
        theme: {
          primary: '#7C5DFA',
          secondary: '#9277FF',
          'navy-blue': '#1E2139',
          'light-navy-blue': '#252945',
          'light-blue': '#DFE3FA',
          'gray': '#888EB0',
          'indigo': '#7E88C3',
          'black': '#0C0E16',
          'red': '#EC5757',
          'light-red': '#FF9797',
          'light-gray': '#F8F8FB',
          'dark-navy-blue': '#141625',
          'green': '#33D69F',
        }
      },
      fontFamily: {
        'sans': ['Spartan', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        '2xs': ['11px', {
          letterSpacing: '-0.23px',
          lineHeight: '18px',
        }],
        'xs': ['12px', {
          letterSpacing: '-0.25px',
          lineHeight: '15px',
        }],
        'base': ['16px', {
          letterSpacing: '-0.8px',
          lineHeight: '24px',
        }],
        'xl': ['20px', {
          letterSpacing: '-0.63px',
          lineHeight: '22px',
        }],
        '3xl': ['32px', {
          letterSpacing: '-1px',
          lineHeight: '36px',
        }],
      },
      maxWidth: {
        '2.5xl': '45.625rem',
      },
      boxShadow: {
        'theme': '0px 10px 10px -10px rgba(72, 84, 159, 0.100397)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
