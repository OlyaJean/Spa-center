/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'xl':'0 0 15px 5px'
      },
      backgroundImage:{
        'hero':'url(./assets/background.jpg)',
        'heroTitle':'url(./assets/bg2.jpg)'
      },
      borderWidth:{
        '2':'1px'
      },
      fontFamily:{
        'title':' "Playwrite BE VLG", cursive;',
        'title1':'"Playwrite DE Grund", cursive;'
      },
    
    },
  },
  plugins: [],
}

