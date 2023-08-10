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
import { FieldValues, UseFormWatch } from "react-hook-form";

export interface ButtonProps<T extends keyof typeof variants>
  extends SizeStyles {
  /** the main variant of component*/
  variant?: T;
  /** each main variant has some color variants and you can set the color variant of a main variant here  */
  colorVariant?: keyof (typeof colorVariants)[T];
  /** a number that will be in use in border-radius of button  */
  radiusVariant?: keyof typeof radiusVariants;
  /** fonts that are available for Button component. */
  fontVariant?: keyof typeof fontVariants;
  /** the state of loading in button. if it is true, a loading spinner will be displayed at the center of button instead of displaying children */
  isLoading?: boolean;
}

export interface CustomLinkProps
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {}

export interface SizeStyles {
  /** height of element. if it is number, it will be concatinated with px, else it will be used itself */
  height?: string | number;
  /** width of element. if it is number, it will be concatinated with px, else it will be used itself */
  width?: string | number;
}

export interface FormUI extends SizeStyles {
  /** each form UI has different border variants to display situation of entered data */
  borderVariant?: keyof typeof borderVariants;
  /** to use some functionalities that need react hook form, it must be true(it is true inside FormRHF by default)  */
  isRHF?: boolean;
}

export interface FormUIError {
  /** error message of form input */
  error?: string | undefined;
  /** if error element that has error string as children must be displayed by defalt even that textarea doesnt have any error, this option must be true  */
  displayError?: boolean;
}

export interface FloatPlaceholder {
  /** if you want to move placeholder of input to above of it when user focused the input or wrote anything in input, this option must be true */
  floatPlaceholder?: boolean;
}

export interface TextAreaUIProps
  extends DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    FormUI,
    FormUIError,
    FloatPlaceholder {
  /** resize attribute of textarea */
  resize?: "none" | "both" | "horizontal" | "vertical" | "block" | "inline";
  /** if you want to display the length of entered string this option must be true */
  showLengthCounter?: boolean;
  /** watch is watch method from useForm. if your using FormRHF, it will be passed automatically */
  watch?: UseFormWatch<FieldValues>;
}

export interface TextFieldUIProps
  extends FormUI,
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    FormUIError,
    FloatPlaceholder {
  /** possible types of text field */
  type?: "password" | "text";
}

export interface FormRHFProps {
  name: string;
}
