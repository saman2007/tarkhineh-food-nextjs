import { borderVariants } from "@/data/variants/FormUIs";
import { TextAreaUIProps } from "@/global/interfaces/interfaces";
import { Ref, forwardRef } from "react";

const TextAreaUI = (
  {
    placeholder = "چیزی بنویسید...",
    className = "",
    resize = "none",
    style,
    height = "auto",
    width = "auto",
    borderVariant = "normal",
    ...props
  }: TextAreaUIProps,
  ref: Ref<HTMLTextAreaElement>
) => {
  return (
    <textarea
      className={`p-16 outline-none bg-transparent transition duration-200 rounded-8 border-gray-7 font-body-sm border-2 border-solid text-gray-1 placeholder:text-gray-1 ${className} ${className} ${borderVariants[borderVariant]}`}
      placeholder={placeholder}
      style={{
        resize: resize,
        height: typeof height === "number" ? height + "px" : height,
        width: typeof width === "number" ? width + "px" : width,
      }}
      ref={ref}
      {...props}
    ></textarea>
  );
};

export default forwardRef<HTMLTextAreaElement, TextAreaUIProps>(TextAreaUI);
