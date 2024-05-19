/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        heading : ['Poppins','san-serif'] ,
        secondary_heading : ['Schibsted Grotesk','san-serif'] ,
        paragraph : ['Quicksand','san-serif'],
        pro_font : ['Kanit','san-serif'],
        pro2_font : ['Dancing Script','san-serif']
      } ,
    },
    screens : {
      'md': '625px',
    }
  },
  plugins: [],
}