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
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@shrutibalasa/tailwind-grid-auto-fit"),
  ],
};
