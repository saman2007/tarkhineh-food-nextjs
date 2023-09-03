import { variants } from "@/data/variants/FormUIs";
import { TextFieldUIProps } from "@/global/interfaces/interfaces";
import { Ref, forwardRef } from "react";

/** A TextField UI Component Without Validation */
const TextFieldUI = forwardRef<HTMLInputElement, TextFieldUIProps>(
  (
    {
      type = "text",
      width = "auto",
      height = "auto",
      placeholder = "چیزی بنویسید...",
      className = "",
      variant = "primary",
      error,
      displayError = false,
      floatPlaceholder = false,
      isRHF = false,
      watch,
      borderVariant = "normal",
      iconLeft,
      ...props
    }: TextFieldUIProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const selectedVariant = variants[variant];

    return (
      <div className="flex flex-col">
        <div
          className={`flex relative ${selectedVariant.inputClasses} ${selectedVariant.border[borderVariant]}`}
          style={{
            height: typeof height === "number" ? height + "px" : height,
            width: typeof width === "number" ? width + "px" : width,
          }}
        >
          <input
            type={type}
            className={`outline-none w-full h-full bg-transparent transition duration-200 float-placeholder-input-parent placeholder:text-[inherit] ${className} ${
              selectedVariant.padding
            } ${iconLeft ? "pl-0" : ""} ${selectedVariant.color}`}
            placeholder={floatPlaceholder ? " " : placeholder}
            ref={ref}
            {...props}
          />
          {floatPlaceholder && (
            <span
              className={`absolute top-[5px] font-body-sm right-[16px] pointer-events-none transition-all duration-200 ${selectedVariant.color}`}
            >
              {placeholder}
            </span>
          )}
          {iconLeft && (
            <div className={`${selectedVariant.padding} pr-8`}>{iconLeft}</div>
          )}
        </div>
        {(displayError || error?.length !== 0) && (
          <p
            className={`h-[18px] font-caption-sm ${selectedVariant.errorTextClasses}`}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

/* 
   I do this because that storybook cant recognize interface props and their docs
   of this component to display in doc if i export this component like this: export
   default forwardRef<HTMLTextAreaElement, TextAreaUIProps>(TextAreaUI)
*/
TextFieldUI.displayName = "TextFieldUI";

export default TextFieldUI;
