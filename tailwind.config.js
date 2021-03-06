module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'brand-yellow': '#F8F4E1',
        'brand-brown': '#603814',
        'brand-primary': '#FFDF91',
      },
      width: {
        '3/10': '30%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
