module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:{
          100:'#aaa',
          200:'#bbb',
          300:'#ff6363',
          400:'#ccc',
        },
      },
      fontSize:{
        'mammoth': ['8rem', { lineHeight: '1' }],
      },
      fontFamily:{
        'nunito': ['Nunito']
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
