// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "410px" // Define the xs breakpoint
      },
      backgroundImage: theme => ({
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "gradient-light-back":
          "linear-gradient(80deg, #2196f3 20%, transparent 20%), linear-gradient(-100deg, #FFFFFF 100%, transparent 100%)", // Example gradient
        "gradient-dark-back":
          "linear-gradient(80deg, #2ba4fa 20%, transparent 20%), linear-gradient(-100deg, #020617 100%, transparent 100%)"
      }),
      animation: {
        "spin-slow": "spin 3s linear infinite"
      },
      screens: {
        "between-md-lg": { min: "768px", max: "1023px" },
        "between-md-sm": { min: "768px", max: "1243.33px" },
        "between-md-xs": { min: "640px", max: "760px" },
        "half-md-less": { max: "700px" },
        "half-nav": { min: "640px", max: "1130px" },
        "half-nav-bt-sm": { min: "700px", max: "1130px" },
        "show-nav": { min: "1130px" },
        "show-info": { min: "1160px" }
      },
      scale: {
        project: "1.15"
      },
      keyframes: {
        fromRightToCenter: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 }
        },
        fromLeftToCenter: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 }
        },
        zoomIn: {
          "0%": { transform: "scale(0)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 }
        },
        skillEffect: {
          "0%": { transform: "scale(0)", opacity: 0 },
          "75%": { transform: "scale(1.3)", opacity: 0.6 },
          "100%": { transform: "scale(1)", opacity: 1 }
        },
      },
      animation: {
        fromRightToCenter: "fromRightToCenter 1s ease-out forwards",
        fromLeftToCenter: "fromLeftToCenter 1s ease-out forwards",
        zoomIn: "zoomIn 1s ease-in-out forwards",
        skillEffect: "skillEffect 1.5s ease-in-out forwards"
      },
      
    }
  },
  plugins: []
};
