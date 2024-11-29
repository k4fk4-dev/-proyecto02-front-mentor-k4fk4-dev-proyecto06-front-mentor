/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Outfit':['Outfit','sans-serif']
      },
      colors:{
        'Soft blue': 'hsl(215, 51%, 70%)',
        'Cyan': 'hsl(178, 100%, 50%)',
        'Verydarkbluemain': 'hsl(217, 54%, 11%)',
        'Verydarkbluecard': 'hsl(216, 50%, 16%)',
        'Verydarkblueline': 'hsl(215, 32%, 27%)'
      },
      backgroundImage:{
        'imgoriginal':"url('../images/image-equilibrium.jpg')",
        'imgsecundario':"url('../images/icon-view.svg')"
      }
    },
  },
  plugins: [],
}

