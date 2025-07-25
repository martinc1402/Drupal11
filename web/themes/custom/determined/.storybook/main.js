/** @type { import('@storybook/html-vite').StorybookConfig } */
import { join } from "node:path"; // 1. Add dependencies.
import { cwd } from "node:process";

const config = {
  stories: ["../components/**/*.component.yml"], // 2. Set components glob.
  addons: [
    {
      name: "storybook-addon-sdc", // 3. Configure addon.
      options: {
        sdcStorybookOptions: {
          namespace: "determined", // Your namespace.
        },
        vitePluginTwigDrupalOptions: {
          // vite-plugin-twig-drupal options.
          namespaces: {
            umami: join(cwd(), "./components"), // Your namespace and path to components.
          },
        },
        jsonSchemaFakerOptions: {}, // json-schema-faker options.
      },
    },
    // Any other addons.
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
};
export default config;
