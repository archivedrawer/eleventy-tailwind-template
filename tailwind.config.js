/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,njk}"],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        "bg-color": "background-color",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
