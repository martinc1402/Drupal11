/* eslint-disable */
module.exports = {
  plugins: [
    require("postcss-import"),
    require("@tailwindcss/postcss"),
    require("postcss-nested")(),
    require("autoprefixer")(),
    require("postcss-preset-env")({
      stage: 4,
    }),
  ],
};
