/* eslint-disable */

import { defineConfig } from "vite";
import path from "path";
import { glob } from "glob";
import twig from "vite-plugin-twig-drupal";
import yml from "@modyfi/vite-plugin-yaml";
import { join } from "node:path";
import { viteStaticCopy } from "vite-plugin-static-copy";
import checker from "vite-plugin-checker";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    checker({
      // eslint: {
      //   lintCommand: 'eslint "./components/**/*.{js,jsx}"',
      // },
      stylelint: {
        lintCommand: 'stylelint "./components/**/*.css"',
      },
    }),
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: path.resolve(
    //         "node_modules/@fortawesome/fontawesome-free/css/all.min.css"
    //       ),
    //       dest: "css", // this will copy to dist/css/all.min.css
    //       rename: "fontawesome.min.css",
    //     },
    //     {
    //       src: path.resolve(
    //         "node_modules/@fortawesome/fontawesome-free/webfonts/*"
    //       ),
    //       dest: "fonts", // This copies font files to dist/fonts/
    //     },
    //   ],
    // }),
    twig({
      namespaces: {
        base: join(__dirname, "components/00-base"),
        atoms: join(__dirname, "components/01-atoms"),
        molecules: join(__dirname, "components/02-molecules"),
        organisms: join(__dirname, "components/03-organisms"),
        layouts: join(__dirname, "components/04-layouts"),
        pages: join(__dirname, "components/05-pages"),
        components: join(__dirname, "components"),
        macros: join(__dirname, "templates/macros"),
      },
    }),
    yml(),
    tailwindcss(),
  ],
  build: {
    emptyOutDir: true,
    outDir: "dist",
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, "./components/**/*.{css,js}")),
      output: {
        assetFileNames: "css/[name].css",
        entryFileNames: "js/[name].js",
      },
    },
  },
});
