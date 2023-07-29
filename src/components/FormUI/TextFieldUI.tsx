import { borderVariants } from "@/data/variants/FormUIs";
import { TextFieldUIProps } from "@/global/interfaces/interfaces";
import { Ref, forwardRef } from "react";

const TextFieldUI = (
  {
    type = "text",
    width = "auto",
    height = "auto",
    placeholder = "چیزی بنویسید...",
    className = "",
    borderVariant = "normal",
    error,
    displayError = false,
    ...props
  }: TextFieldUIProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        className={`outline-none py-12 px-16 transition duration-200 bg-transparent rounded-8 font-body-sm text-gray-1 placeholder:text-gray-1 ${className} ${borderVariants[borderVariant]}`}
        style={{
          height: typeof height === "number" ? height + "px" : height,
          width: typeof width === "number" ? width + "px" : width,
        }}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
      {(displayError || error?.length !== 0) && (
        <p className="h-[18px] text-error-extra-light font-caption-sm">
          {error}
        </p>
      )}
    </div>
  );
};

export default forwardRef<HTMLInputElement, TextFieldUIProps>(TextFieldUI);
