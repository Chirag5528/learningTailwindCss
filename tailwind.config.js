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
        fontSize:{
          'text-mammoth':['10rem',{ lineHeight: '1' }]
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
