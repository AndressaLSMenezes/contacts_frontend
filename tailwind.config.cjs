/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 0 1em #3A37FF",
      },
      screens: {
        'tablet': '660px',  
      },
    },
  },
};
