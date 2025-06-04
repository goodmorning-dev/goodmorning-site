module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#12d5ca',
        secondary: '#5959ff',
        black: '#000000',
        white: '#ffffff',
        gray: '#131313',
        lightGray: '#1e1e1e',
        textGray: '#919191',
      },
      fontFamily: {
        sans: ['RedHatDisplay', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '86rem',
      },
    },
  },
  plugins: [],
}
