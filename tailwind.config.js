/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#606C5D',
        secondary:'#F1C376',
        hov:'#F7E6C4'
      },
    },
  },
  plugins: [],
}

