// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          "mblue": "#C2D7F6",
          "mred": "#F46A6A",
          "mgray": "#EEEEEE",
          "mdarkblue": "#1F285D"
        }
      }
    },
    plugins: [],
  }