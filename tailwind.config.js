/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/home/hero-pattern.png')",
        "gradient-text": "linear-gradient(to right, #9795FF, white, #BE9FFF)",
        testimonial: "url(/icons/big-quote.svg)",
      },
      fontSize: {
        "custom-105": "105px",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".gradient-text": {
          backgroundImage: "linear-gradient(to right, #9795FF, white, #BE9FFF)",
          backgroundClip: "text",
          color: "transparent",
        },
      });
    },
  ],
};
