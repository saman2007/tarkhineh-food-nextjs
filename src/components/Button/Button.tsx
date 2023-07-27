import {
  colorVariants,
  fontVariants,
  radiusVariants,
  variants,
} from "@/data/variants/Button";
import { ButtonProps } from "@/global/interfaces/interfaces";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import LoadingIcon from "../Icons/LoadingIcon";

interface Props
  extends ButtonProps,
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {}

const Button = ({
  children,
  variant = "normal",
  height = "auto",
  width = "auto",
  radiusVariant = 0,
  fontVariant = "captionSmAndBtnLg",
  colorVariant = "default",
  className,
  style,
  isLoading = false,
  ...props
}: Props) => {
  return (
    <button
      className={`transition duration-300 flex justify-center items-center ${
        variants[variant]
      } ${radiusVariants[radiusVariant]} ${fontVariants[fontVariant]} ${
        className || ""
      } ${colorVariants[colorVariant]}`}
      style={{
        height: typeof height === "number" ? height + "px" : height,
        width: typeof width === "number" ? width + "px" : width,
        ...(style || {}),
      }}
      {...props}
    >
      {isLoading ? <LoadingIcon /> : children}
    </button>
  );
};

export default Button;
