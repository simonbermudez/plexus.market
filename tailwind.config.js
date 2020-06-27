module.exports = {
  purge: [
    './public/**/*.html',
    './src/App.vue',
    './src/views/**/*.vue',
    './src/components/**/*.vue',
  ],
  theme: {
    extend: {
      aspectRatio: {
        none: 0,
        square: [1, 1],
        '16/9': [16, 9],
        '4/3': [4, 3],
        '21/9': [21, 9],
      },
      container: {
        center: true,
      },
    },
  },
  variants: {
    aspectRatio: ['responsive'],
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss-responsive-embed'),
    require('tailwindcss-aspect-ratio'),
  ],
}
