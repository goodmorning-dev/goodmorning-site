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
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
