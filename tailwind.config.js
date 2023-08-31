/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/variants/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "360px",
        sd: "456px",
        md: "1024px",
        lg: "1440px",
      },
    },
    fontFamily: {
      estedad: ["var(--font-estedad)"],
    },
    colors: {
      primary: "#417F56",
      "tint-1": "#E5F2E9",
      "tint-2": "#CAE4D3",
      "tint-3": "#B0D7BD",
      "tint-4": "#96C9A7",
      "tint-5": "#7CBC91",
      "tint-6": "#61AE7B",
      "tint-7": "#4E9968",
      "shade-1": "#396F4B",
      "shade-2": "#315F41",
      "shade-3": "#294F36",
      "shade-4": "#21402B",
      "shade-5": "#183020",
      "shade-6": "#102016",
      "shade-7": "#08100B",
      white: "#FFFFFF",
      "gray-1": "#F9F9F9",
      "gray-2": "#E1E1E1",
      "gray-3": "#EDEDED",
      "gray-4": "#CBCBCB",
      "gray-5": "#ADADAD",
      "gray-6": "#757575",
      "gray-7": "#717171",
      "gray-8": "#353535",
      black: "#0C0C0C",
      error: "#C30000",
      "error-light": "#ED2E2E",
      "error-extra-light": "#FFF2F2",
      success: "#00966D",
      "success-light": "#00BA88",
      "success-extra-light": "#F3FDFA",
      warning: "#A9791C",
      "warning-light": "#F4B740",
      "warning-extra-light": "#FFF8E1",
      transparent: "transparent",
    },
    padding: {
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      32: "32px",
      48: "48px",
    },
    boxShadow: {
      2: "0px 2px 2px rgba(0, 0, 0, 0.25)",
      4: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      6: "0px 6px 6px rgba(0, 0, 0, 0.25)",
      8: "0px 8px 8px rgba(0, 0, 0, 0.25)",
      12: "0px 12px 12px rgba(0, 0, 0, 0.25)",
      16: "0px 16px 16px rgba(0, 0, 0, 0.25)",
      "card-shadow":
        "0px 16px 6px rgba(0, 0, 0, 0.01),0px 9px 5px rgba(0, 0, 0, 0.05),0px 4px 4px rgba(0, 0, 0, 0.09),0px 1px 2px rgba(0, 0, 0, 0.1),0px 0px 0px rgba(0, 0, 0, 0.1)",
    },
    borderRadius: {
      4: "4px",
      6: "6px",
      8: "8px",
      12: "12px",
      16: "16px",
      24: "24px",
      32: "32px",
      64: "64px",
    },
  },
  plugins: [],
};
