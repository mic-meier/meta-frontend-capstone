/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      leading: ["Markazi Text"],
      paragraph: ["Karla Regular"],
    },
    extend: {
      colors: {
        yellow: "#F4CE14",
        green: "#495E57",
        salmon: "#EE9972",
        orange: "#FBDABB",
        grey: "#EDEFEE",
        black: "#333333",
      },
    },
  },
  plugins: [],
};
