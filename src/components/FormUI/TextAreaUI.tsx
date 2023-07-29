import { borderVariants } from "@/data/variants/FormUIs";
import { TextAreaUIProps } from "@/global/interfaces/interfaces";
import { Ref, forwardRef, useState } from "react";

const TextAreaUI = (
  {
    placeholder = "چیزی بنویسید...",
    className = "",
    resize = "none",
    style,
    height = "auto",
    width = "auto",
    borderVariant = "normal",
    error,
    displayError = false,
    showLengthCounter = false,
    ...props
  }: TextAreaUIProps,
  ref: Ref<HTMLTextAreaElement>
) => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="flex flex-col">
      <textarea
        className={`p-16 outline-none bg-transparent transition duration-200 rounded-8 font-body-sm text-gray-1 placeholder:text-gray-1 ${className} ${className} ${borderVariants[borderVariant]}`}
        placeholder={placeholder}
        style={{
          resize: resize,
          height: typeof height === "number" ? height + "px" : height,
          width: typeof width === "number" ? width + "px" : width,
        }}
        ref={ref}
        {...props}
        onChange={(e) => {
          if (showLengthCounter) setValue(e.target.value);
          props?.onChange?.(e);
        }}
      ></textarea>
      <div className="flex justify-between">
        {(displayError || error?.length !== 0) && (
          <p className="h-[18px] text-error-extra-light font-caption-sm">
            {error}
          </p>
        )}
        {showLengthCounter && (
          <p className="h-[18px] text-error-extra-light font-caption-sm">
            {value.length}
            {props.maxLength ? `/${props.maxLength}` : ""}
          </p>
        )}
      </div>
    </div>
  );
};

export default forwardRef<HTMLTextAreaElement, TextAreaUIProps>(TextAreaUI);
