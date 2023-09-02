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
      containerWidth = "fit-content",
      containerHeight = "fit-content",
      ...props
    }: TextFieldUIProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const selectedVariant = variants[variant];

    const containerSize = {
      height:
        typeof containerHeight === "number"
          ? containerHeight + "px"
          : containerHeight,
      width:
        typeof containerWidth === "number"
          ? containerWidth + "px"
          : containerWidth,
    };

    return (
      <div className="flex flex-col" style={containerSize}>
        <div
          className={`flex relative ${selectedVariant.inputClasses} ${selectedVariant.border[borderVariant]}`}
          style={containerSize}
        >
          <input
            type={type}
            className={`outline-none bg-transparent transition duration-200 float-placeholder-input-parent placeholder:text-[inherit] ${className} ${
              selectedVariant.padding
            } ${iconLeft ? "pl-0" : ""}`}
            style={{
              height: typeof height === "number" ? height + "px" : height,
              width: typeof width === "number" ? width + "px" : width,
            }}
            placeholder={floatPlaceholder ? " " : placeholder}
            ref={ref}
            {...props}
          />
          {floatPlaceholder && (
            <span className="absolute top-[8px] font-body-sm right-[16px] text-gray-1 pointer-events-none transition-all duration-200">
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
