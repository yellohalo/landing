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
    extend: {},
  },
  variants: {},
  plugins: [],
}
