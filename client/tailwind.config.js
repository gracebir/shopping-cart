module.exports = {
  mode:"jit",
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        shopping_blue:{
          light: "#232F3E",
          DEFAULT: "#131921"
        },
        shopping_dark:{
          dark: "#000917",
          focus: "#00112b"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
