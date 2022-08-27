/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgreen: "#008060",
        green: "#004c3f",
        darkgreen: "#002e25",
        herobg: "#FBF7ED",
      },
    },
  },
  plugins: [],
};
