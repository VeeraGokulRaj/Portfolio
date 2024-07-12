// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      screens: {
        xs: '410px', // Define the xs breakpoint
      },
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-light-back': 'linear-gradient(75deg, #2ba4fa 20%, transparent 20%), linear-gradient(-100deg, #FFFFFF 100%, transparent 100%)', // Example gradient
        'gradient-dark-back': 'linear-gradient(75deg, #2ba4fa 20%, transparent 20%), linear-gradient(-100deg, #111111 100%, transparent 100%)',
      }),
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
};
