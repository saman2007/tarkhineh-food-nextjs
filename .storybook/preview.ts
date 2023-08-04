import type { Preview } from "@storybook/react";

import { withThemeByClassName } from "@storybook/addon-styling";

import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "night", value: "#000" },
        { name: "dawn", value: "#a6a6a6" },
        { name: "morning", value: "#fff" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
