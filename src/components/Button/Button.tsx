import {
  VariantsType,
  colorVariants,
  fontVariants,
  radiusVariants,
  variants,
} from "@/data/variants/Button";
import { ButtonProps } from "@/global/interfaces/interfaces";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import LoadingIcon from "../Icons/LoadingIcon";

interface Props<T extends VariantsType>
  extends ButtonProps<T>,
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {}

function Button<T extends VariantsType>(props: Props<T>): JSX.Element;

/** a Button component with different variants */
function Button({
  children,
  variant = "normal",
  height = "auto",
  width = "auto",
  radiusVariant = 0,
  fontVariant = "captionSmAndBtnLg",
  colorVariant = "primary",
  className,
  style,
  isLoading = false,
  ...props
}: Props<VariantsType>) {
  return (
    <button
      className={`transition duration-300 flex justify-center items-center ${
        variants[variant]
      } ${radiusVariants[radiusVariant]} ${fontVariants[fontVariant]} ${
        className || ""
      } ${colorVariants[variant][colorVariant]}`}
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
}

export default Button;
