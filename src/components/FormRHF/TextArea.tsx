"use client";

import { FormRHFProps, TextAreaUIProps } from "@/global/interfaces/interfaces";
import TextAreaUI from "../FormUI/TextAreaUI";
import FormRHFContainer from "./FormRHFContainer";

export interface Props extends FormRHFProps, Omit<TextAreaUIProps, "name"> {}

/** a TextArea RHF component that must be used with react hook form */
const TextArea = (props: Props) => {
  return (
    <FormRHFContainer
      name={props.name}
      field={(data) => <TextAreaUI {...props} {...data} displayError={true} />}
    />
  );
};

export default TextArea;
