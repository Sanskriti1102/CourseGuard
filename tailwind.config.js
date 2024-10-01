// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Add this line to ensure Tailwind scans the components for class names
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f97316', // Adding custom colors if necessary
      },
    },
  },
  plugins: [],
};
