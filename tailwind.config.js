/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./style.css",
  ],
  theme: {
    extend: {
      padding: {
        '20': '500px',
        '14': '400px',
        '16': '200px',
        '17': '250px',
        '13': '300px',
        '15': '350px',
        '18': '150px',
        '22': '1000px',
      },
      margin: {
        '20': '500px',
        '14': '400px',
        '16': '200px',
        '15': '700px',
        '17': '250px',
        '13': '300px',
        '18': '150px',
        '19': '600px',
        '22': '1000px',
      },
      colors: {
        'custom-blue': '#1E4380',
        'custom-red:': '#FF0000',
      },
    },
  },
  plugins: [],
}

