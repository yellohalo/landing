module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './views/**/*.html'
    ]
  },
  theme: {
    extend: {
      boxShadow: {
        outline: '0 0 0 3px rgba(246, 224, 94, 0.5)',
      },
      colors: {
        'cyber-yellow': {
          50: '#FFFDF2',
          100: '#FFFBE6',
          200: '#FFF4C0',
          300: '#FEED9B',
          400: '#FEE04F',
          500: '#FDD204',
          600: '#E4BD04',
          700: '#987E02',
          800: '#725F02',
          900: '#4C3F01',
        },
      },
      fontFamily: {
        effra: [
          'effra',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ]
      }
    },
  },
  variants: {},
  plugins: [],
}
