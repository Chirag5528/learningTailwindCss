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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
