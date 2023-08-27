import type { Preview } from "@storybook/react";

import { withThemeByClassName } from "@storybook/addon-styling";

import "../src/app/globals.css";

const AVAILABLE_VIEWPORTS = {
  sm: {
    name: "sm",
    styles: {
      width: "360px",
      height: "900px",
    },
  },
  sd: {
    name: "sd",
    styles: {
      width: "456px",
      height: "900px",
    },
  },
  md: {
    name: "md",
    styles: {
      width: "1024px",
      height: "900px",
    },
  },
  lg: {
    name: "lg",
    styles: {
      width: "1440px",
      height: "900px",
    },
  },
};

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Intro", "*"],
      },
    },
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
    viewport: {
      viewports: AVAILABLE_VIEWPORTS,
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
