module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  fontFamily: {
    sans: ['Roboto', 'sans-serif'],
    serif: ['Lora', 'serif']
  },
  theme: {
    extend: {
      colors: {
        abu: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121'
        },
        hijau: {
          50: '#E6F6EC',
          200: '#A1D5AB',
          700: '#069550',
          800: '#267C39'
        },
        biruabu: {
          50: '#E3E7ED'
        },
        kuning: {
          900: '#FF7500'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
