module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}", "./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        body: ['Open Sans'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
