import {
  colorVariants,
  fontVariants,
  radiusVariants,
  variants,
} from "@/data/variants/Button";
import {
  BorderVariants,
  variants as formUiVariants,
} from "@/data/variants/FormUIs";
import { LinkProps } from "next/link";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { FieldValues, UseFormWatch } from "react-hook-form";

export interface ButtonProps<T extends keyof typeof variants>
  extends SizeStyles {
  /** The main variant of component*/
  variant?: T;
  /** Each main variant has some color variants and you can set the color variant of a main variant here  */
  colorVariant?: keyof (typeof colorVariants)[T];
  /** A number that will be in use in border-radius of button  */
  radiusVariant?: keyof typeof radiusVariants;
  /** Fonts that are available for Button component. */
  fontVariant?: keyof typeof fontVariants;
  /** The state of loading in button. if it is true, a loading spinner will be displayed at the center of button instead of displaying children */
  isLoading?: boolean;
}

export interface CustomLinkProps
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {}

export interface SizeStyles {
  /** Height of element. if it is number, it will be concatinated with px, else it will be used itself */
  height?: string | number;
  /** Width of element. if it is number, it will be concatinated with px, else it will be used itself */
  width?: string | number;
}

export interface FormUI extends SizeStyles {
  variant?: keyof typeof formUiVariants;
  /** To use some functionalities that need react hook form, it must be true(it is true inside FormRHF by default)  */
  isRHF?: boolean;
  /** Each form UI has different border variants to display situation of entered data */
  borderVariant?: BorderVariants;
}

export interface FormUIError {
  /** Error message of form input */
  error?: string | undefined;
  /** If error element that has error string as children must be displayed by defalt even that textarea doesnt have any error, this option must be true  */
  displayError?: boolean;
}

export interface FloatPlaceholder {
  /** If you want to move placeholder of input to above of it when user focused the input or wrote anything in input, this option must be true */
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
  /** Eesize attribute of textarea */
  resize?: "none" | "both" | "horizontal" | "vertical" | "block" | "inline";
  /** If you want to display the length of entered string this option must be true */
  showLengthCounter?: boolean;
  /** Watch is watch method from useForm. if your using FormRHF, it will be passed automatically */
  watch?: UseFormWatch<FieldValues>;
}

export interface TextFieldUIProps
  extends FormUI,
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    FormUIError,
    FloatPlaceholder {
  /** Possible types of text field */
  type?: "password" | "text";
  /** Watch is watch method from useForm. if your using FormRHF, it will be passed automatically */
  watch?: UseFormWatch<FieldValues>;
  /** The icon that must be diplayed at the left side of text field */
  iconLeft?: React.ReactNode;
  /** Field has two container. With this, you can specify width of them */
  containerWidth?: SizeStyles["width"];
  /** Field has two container. With this, you can specify height of them */
  containerHeight?: SizeStyles["height"];
}

export interface FormRHFProps {
  /** Name is actually the name of validation key in yup validation and react hook form uses it */
  name: string;
}
