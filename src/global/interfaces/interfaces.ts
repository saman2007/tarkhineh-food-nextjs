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

export interface ButtonProps {
  variant?: keyof typeof variants;
  radiusVariant?: keyof typeof radiusVariants;
  fontVariant?: keyof typeof fontVariants;
  colorVariant?: keyof typeof colorVariants;
  height?: string | number;
  width?: string | number;
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
}

export interface FormRHFProps {
  name: string;
}
