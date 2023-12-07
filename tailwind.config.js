/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'simplify': "url('/images/bg-simplify-section-desktop.svg')",
      },
      colors: {
        'brightred': 'hsl(12, 88%, 59%)',
        'darkblue': 'hsl(228, 39%, 23%)',
        'darkgrayishblue': 'hsl(227, 12%, 61%)',
        'verydarkblue': 'hsl(233, 12%, 13%)',
        'verypalered': 'hsl(13, 100%, 96%)',
        'verylightgray': 'hsl(0, 0%, 98%)',
        'hoverwhite': '#fb9072'
      },
    },
  },
  plugins: [],
}
