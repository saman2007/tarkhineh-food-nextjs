import NextLink, { LinkProps } from "next/link";

interface Props
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  variant?: keyof typeof variants;
  radiusVariant?: keyof typeof radiusVariants;
  fontVariant?: keyof typeof fontVariants;
  colorVariant?: keyof typeof colorVariants;
  height?: string | number;
  width?: string | number;
}

const variants = {
  normal: "",
  fill: "py-8 px-8 sd:px-16 flex justify-center items-center gap-[8px]",
  outline: "py-8 px-16 sd:px-16 flex justify-center items-center",
};

const radiusVariants = {
  0: "",
  4: "rounded-4",
  8: "rounded-8",
};

const fontVariants = {
  captionMd: "font-caption-md",
  captionSmAndBtnLg: "font-caption-sm sd:font-button-lg",
  captionMdAndBtnLg: "font-caption-md sd:font-button-lg",
};

const colorVariants = {
  default: "",
  primary: "hover:bg-shade-1 bg-primary text-white",
  secondary:
    "bg-transparent border border-solid border-white text-white hover:bg-white hover:text-primary",
  tertiary:
    "bg-transparent border border-solid border-shade-2 text-shade-2 hover:bg-shade-2 hover:text-white",
};

const Link = ({
  prefetch = false,
  children,
  variant = "normal",
  height = 40,
  width = "auto",
  radiusVariant = 0,
  fontVariant = "captionSmAndBtnLg",
  colorVariant = "default",
  className,
  ...props
}: Props) => {
  return (
    <NextLink
      prefetch={prefetch}
      className={`transition duration-300 ${variants[variant]} ${
        radiusVariants[radiusVariant]
      } ${fontVariants[fontVariant]} ${className || ""} ${
        colorVariants[colorVariant]
      }`}
      style={{
        height: typeof height === "number" ? height + "px" : height,
        width: typeof width === "number" ? width + "px" : width,
        ...(props?.style || {}),
      }}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
