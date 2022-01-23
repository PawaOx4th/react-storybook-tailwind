const path = require("path")

module.exports = {
  content: [
    path.join(__dirname, "./index.html"),
    path.join(__dirname, "./src/**/*.{vue,js,ts,jsx,tsx}")
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
