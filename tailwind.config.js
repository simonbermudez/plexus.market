module.exports = {
  purge: ['./src/views/**/*.vue', './src/components/**/*.vue'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
