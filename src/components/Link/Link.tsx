import NextLink, { LinkProps } from "next/link";

interface Props
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  variant?: keyof typeof variants;
  radiusVariant?: keyof typeof radiusVariants;
  height?: string | number;
  width?: string | number;
}

const variants = {
  normal: "",
  fill: "py-8 px-8 sd:px-16 hover:bg-shade-1 bg-primary text-white flex justify-center items-center gap-[8px] font-caption-sm sd:font-button-lg",
};

const radiusVariants = {
  0: "",
  4: "rounded-4",
  8: "rounded-8",
};

const Link = ({
  prefetch = false,
  children,
  variant = "normal",
  height = 40,
  width = "auto",
  radiusVariant = 0,
  className,
  ...props
}: Props) => {
  return (
    <NextLink
      prefetch={prefetch}
      className={`transition duration-300 ${variants[variant]} ${
        radiusVariants[radiusVariant]
      } ${className || ""}`}
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
