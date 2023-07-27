import {
  colorVariants,
  fontVariants,
  radiusVariants,
  variants,
} from "@/data/variants/Button";
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

export interface TextAreaUIProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  resize?: "none" | "both" | "horizontal" | "vertical" | "block" | "inline";
  height?: string | number;
  width?: string | number;
}

export interface TextFieldUIProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: "password" | "text";
  width?: string | number;
  height?: string | number;
}

export interface FormRHFProps {
  name: string;
}
