/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#2a4747',
        secondary:'#FFF4F4',
        footer:'#172727'
      },
    },
  },
  plugins: [],
}

