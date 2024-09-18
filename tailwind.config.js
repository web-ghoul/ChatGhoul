/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,tsx,ts,jsx}",
    "./forms/**/*.{js,tsx,ts,jsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./modals/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#162832",
        message: "#284859",
        sender_message: "#0a636b",
        light: "#12b0be",
        divider: "#e5e5e5",
      },
    },
  },
  plugins: [],
};
