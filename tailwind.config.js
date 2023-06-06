/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.js",
  "./templates/**/*.html.twig",],
  theme: {
    extend: {
      animation:{
        blob:"blob 10s infinite",
      },
      keyframes:{
        blob:{
          "0%":{ transform:"translate(0px,0px) scale(1)"},
          "33%":{transform:"translate(30px,50px) scale(1.1)"},
          "66%":{transform:"translate(-20px,20px) scale(.8)"},
          "100%":{transform:"translate(0px,0px) scale(1)"},
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

