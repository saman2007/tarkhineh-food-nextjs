export const variants = {
  normal: "",
  fill: "py-8 px-8 sd:px-16 flex justify-center items-center gap-[8px]",
  outline:
    "py-8 px-16 sd:px-16 flex justify-center items-center bg-transparent border border-solid ",
};

export const radiusVariants = {
  0: "",
  4: "rounded-4",
  8: "rounded-8",
};

export const fontVariants = {
  captionMd: "font-caption-md",
  captionSmAndBtnLg: "font-caption-sm sd:font-button-lg",
  captionMdAndBtnLg: "font-caption-md sd:font-button-lg",
  captionLgAndCaptionSm: "font-caption-sm sd:font-caption-lg",
};

export const colorVariants = {
  normal: {
    primary: "",
  },
  fill: {
    primary: "hover:bg-shade-1 bg-primary text-white",
  },
  outline: {
    primary: "border-white text-white hover:bg-white hover:text-primary",
    secondary: "border-shade-2 text-shade-2 hover:bg-shade-2 hover:text-white",
    tertiary: "border-gray-7 text-gray-1 hover:bg-gray-7",
  },
};

export type VariantsType = keyof typeof variants;
