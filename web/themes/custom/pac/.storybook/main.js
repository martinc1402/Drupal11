/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ["../components/**/*.@(mdx|stories.@(js|jsx|ts|tsx|html))"],

  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],

  framework: {
    name: "@storybook/html-vite",
    options: {},
  },

  docs: {},
};

export default config;
