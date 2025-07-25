const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

module.exports = {
  mode: "jit",
  content: [
    "./**/*.html.twig",
    "./templates/**/*.html.twig",
    "./src/components/**/*.twig",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  // extend tailwind theme as needed
  theme: {
    extend: {},
  },
  // Add plugins
  plugins: [typography, forms],
};
