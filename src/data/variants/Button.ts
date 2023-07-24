export const variants = {
  normal: "",
  fill: "py-8 px-8 sd:px-16 flex justify-center items-center gap-[8px]",
  outline: "py-8 px-16 sd:px-16 flex justify-center items-center",
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
  default: "",
  primary: "hover:bg-shade-1 bg-primary text-white",
  secondary:
    "bg-transparent border border-solid border-white text-white hover:bg-white hover:text-primary",
  tertiary:
    "bg-transparent border border-solid border-shade-2 text-shade-2 hover:bg-shade-2 hover:text-white",
  fourth:
    "bg-transparent border border-solid border-gray-7 text-gray-1 hover:bg-gray-7",
};
