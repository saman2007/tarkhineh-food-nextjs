"use client";

import { FormRHFProps, TextFieldUIProps } from "@/global/interfaces/interfaces";
import TextFieldUI from "../FormUI/TextFieldUI";
import FormRHFContainer from "./FormRHFContainer";

export interface Props extends FormRHFProps, Omit<TextFieldUIProps, "name"> {}

/** a TextField RHF component that must be used with react hook form */
const TextField = (props: Props) => {
  return (
    <FormRHFContainer
      name={props.name}
      field={(data) => <TextFieldUI {...props} {...data} />}
    />
  );
};

export default TextField;
