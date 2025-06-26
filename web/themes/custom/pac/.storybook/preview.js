/** @type { import('@storybook/html').Preview } */

// Import Twig and Drupal Twig filters
import Twig from "twig";
import drupalFilters from "twig-drupal-filters";

// Import global styles
// import "../components/styles.css";
// import "../components/03-organisms/main-nav/main-nav.css";
// Avoid importing scripts that depend on Drupal runtime
// import "../components/03-organisms/main-nav/main-nav.js";

// Setup Twig filters
function setupFilters(twig) {
  twig.cache();
  drupalFilters(twig);
  return twig;
}
setupFilters(Twig);

// Define global parameters
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
