/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor :{
        'primary' :'#623B22',
        'secondary' : '#DFBAA5',
        'tb-btn' : '#D0CDCC'
      },
      borderColor:{
        'primary' :'#623B22',
      },
      colors : {
        'primary' :'#623B22',
        'secondary' : '#DFBAA5',
      }
    },
  },
  plugins: [],
}