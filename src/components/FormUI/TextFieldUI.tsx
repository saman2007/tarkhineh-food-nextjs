import { TextFieldUIProps } from "@/global/interfaces/interfaces";
import { Ref, forwardRef } from "react";

const TextFieldUI = (
  {
    type = "text",
    width = "auto",
    height = "auto",
    placeholder = "چیزی بنویسید...",
    className = "",
    ...props
  }: TextFieldUIProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <input
      type={type}
      className={`outline-none py-12 px-16 bg-transparent rounded-8 border-gray-7 font-body-sm border-2 border-solid text-gray-1 placeholder:text-gray-1 ${className}`}
      style={{
        height: typeof height === "number" ? height + "px" : height,
        width: typeof width === "number" ? width + "px" : width,
      }}
      placeholder={placeholder}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef<HTMLInputElement, TextFieldUIProps>(TextFieldUI);
