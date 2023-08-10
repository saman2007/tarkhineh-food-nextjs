import { borderVariants } from "@/data/variants/FormUIs";
import { TextFieldUIProps } from "@/global/interfaces/interfaces";
import { Ref, forwardRef } from "react";

const TextFieldUI = forwardRef<HTMLInputElement, TextFieldUIProps>(
  (
    {
      type = "text",
      width = "auto",
      height = "auto",
      placeholder = "چیزی بنویسید...",
      className = "",
      borderVariant = "normal",
      error,
      displayError = false,
      floatPlaceholder = false,
      isRHF = false,
      ...props
    }: TextFieldUIProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className="flex flex-col">
        <div className="flex relative">
          <input
            type={type}
            className={`outline-none py-12 px-16 transition duration-200 bg-transparent rounded-8 font-body-sm text-gray-1 placeholder:text-gray-1 float-placeholder-input-parent ${className} ${borderVariants[borderVariant]}`}
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
        </div>
        {(displayError || error?.length !== 0) && (
          <p className="h-[18px] text-error-extra-light font-caption-sm">
            {error}
          </p>
        )}
      </div>
    );
  }
);

/* i do this because that storybook cant recognize interface props and their docs
   of this component to display in doc if i export this component like this: export
   default forwardRef<HTMLTextAreaElement, TextAreaUIProps>(TextAreaUI)
*/
TextFieldUI.displayName = "TextFieldUI";

export default TextFieldUI;
