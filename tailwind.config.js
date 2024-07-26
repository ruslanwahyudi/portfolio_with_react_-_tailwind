/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true, 
    },
    
    fontFamily: {
      sans: ['General Sans', 'sans-serif'],
    },
    extend: {
      colors : {
        'btnPrimary' : "#007BFF",
        'btnSecondary' : "#F45D22",
        'titleColor' : "#101010",
        'textColor' : "#969696",
        'borderColor' : "#E0E0E0",
      },
    },
  },
  plugins: [],
}

