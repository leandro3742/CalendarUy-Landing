/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      primary: '#2899CC'
    },
    listStyleType: {
      disc: 'disc',
      decimal: 'decimal'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: false, // or 'media' or 'class'
}
