import {
  colorVariants,
  fontVariants,
  radiusVariants,
  variants,
} from "@/data/variants/Button";
import { borderVariants } from "@/data/variants/FormUIs";
import { LinkProps } from "next/link";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

export interface ButtonProps<T extends keyof typeof variants> {
  /** the main variant of component*/
  variant?: T;
  /** each main variant has some color variants and you can set the color variant of a main variant here  */
  colorVariant?: keyof (typeof colorVariants)[T];
  /** a number that will be in use in border-radius of button  */
  radiusVariant?: keyof typeof radiusVariants;
  /** fonts that are available for Button component. */
  fontVariant?: keyof typeof fontVariants;
  /** the amount of height of button. if it is number, it will be used as `px` and if it is a sting it will be used itself */
  height?: string | number;
  /** the amount of width of button. if it is number, it will be used as `px` and if it is a sting it will be used itself */
  width?: string | number;
  /** the state of loading in button. if it is true, a loading spinner will be displayed at the center of button instead of displaying children */
  isLoading?: boolean;
}

export interface CustomLinkProps
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {}

export interface FormUI {
  height?: string | number;
  width?: string | number;
  borderVariant?: keyof typeof borderVariants;
}

export interface TextAreaUIProps
  extends DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    FormUI {
  resize?: "none" | "both" | "horizontal" | "vertical" | "block" | "inline";
  error?: string | undefined;
  displayError?: boolean;
  showLengthCounter?: boolean;
  floatPlaceholder?: boolean;
  isRHF?: boolean;
}

export interface TextFieldUIProps
  extends DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    FormUI {
  type?: "password" | "text";
  error?: string | undefined;
  displayError?: boolean;
  floatPlaceholder?: boolean;
  isRHF?: boolean;
}

export interface FormRHFProps {
  name: string;
}
