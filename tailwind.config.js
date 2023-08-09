/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        text1:'#e0e7f4',
        primary:'#10111b',
        secondary:'#323e8d',
        secondary2:'#3344af',
        buttons:'#384287',
        footer:'#191a1e'
      },
    },
  },
  plugins: [],
}

