/* eslint-disable react/display-name */
"use client";

import { borderVariants } from "@/data/variants/FormUIs";
import { TextAreaUIProps } from "@/global/interfaces/interfaces";
import { Ref, forwardRef, useState } from "react";

/** a TextArea UI component without validation */
export const TextAreaUI = forwardRef<HTMLTextAreaElement, TextAreaUIProps>(
  (
    {
      placeholder = "چیزی بنویسید...",
      floatPlaceholder = false,
      className = "",
      resize = "none",
      style,
      height = "auto",
      width = "auto",
      borderVariant = "normal",
      error,
      displayError = false,
      showLengthCounter = false,
      isRHF = false,
      watch,
      ...props
    }: TextAreaUIProps,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    const valueRHF: string | undefined = isRHF && watch?.(props.name || "");
    const [value, setValue] = useState<string>("");

    return (
      <div className="flex flex-col">
        <div className="relative flex w-fit">
          <textarea
            className={`p-16 bg-transparent outline-none transition duration-200 font-body-sm text-gray-1 placeholder:text-gray-1 float-placeholder-textarea-parent rounded-8 ${className} ${borderVariants[borderVariant]}`}
            placeholder={floatPlaceholder ? " " : placeholder}
            style={{
              resize: resize,
              height: typeof height === "number" ? height + "px" : height,
              width: typeof width === "number" ? width + "px" : width,
            }}
            ref={ref}
            {...props}
            onChange={(e) => {
              if (showLengthCounter && !isRHF) setValue(e.target.value);
              props?.onChange?.(e);
            }}
          ></textarea>
          {floatPlaceholder && (
            <span className="absolute top-[16px] font-body-sm right-[16px] text-gray-1 pointer-events-none transition-all duration-200 float-placeholder">
              {placeholder}
            </span>
          )}
        </div>
        <div className="flex justify-between">
          {(displayError || error?.length !== 0) && (
            <p className="h-[18px] text-error-extra-light font-caption-sm">
              {error}
            </p>
          )}
          {showLengthCounter && (
            <p className="h-[18px] text-error-extra-light font-caption-sm">
              {isRHF ? valueRHF?.length : value.length}
              {props.maxLength ? `/${props.maxLength}` : ""}
            </p>
          )}
        </div>
      </div>
    );
  }
);

export default TextAreaUI;
