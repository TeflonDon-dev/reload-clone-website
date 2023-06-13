/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio:3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio:13/20)' },
        
      },
     keyframes: {
        'open-menu': {
          '0%':{transform:'scaleY(0)'},
          '80%':{transform:'scaleY(1.2)'},
          '100%':{transform:'scaleY(1)'},
       },
  'slide-in-bck-center': {
    '0% ': {
      transform: 'translateZ(600px)',
      opacity: 0},
  '100%': {
      transform: 'translateZ(0)',
      opacity: 1
  }
}


        
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'slide-in-bck-center': ' 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
      }
    },
  },
  plugins: [],
}