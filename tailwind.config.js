/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor :{
        'primary' :'#623B22',
        'tb-btn' : '#D0CDCC'
      }
    },
  },
  plugins: [],
}