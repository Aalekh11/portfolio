/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        updown: "infiniteupdown 3s infinite transition-all",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        infiniteupdown: {
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-40px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
    },
    backgroundImage:{
      circularLight:'repeating-radial-gradient(rgba(0,0,0,0.4) 6px,#000000 98px, #fff 100px);'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
