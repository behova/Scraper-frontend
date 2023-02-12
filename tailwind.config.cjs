/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(10rem, 1fr))",
      },
      // backgroundImage: {
      //   'header': "url('/img/hero-pattern.svg')",
      // }
      colors: {
        "para-pink": "#d26d79",
      },
    },
  },
  plugins: [],
};
