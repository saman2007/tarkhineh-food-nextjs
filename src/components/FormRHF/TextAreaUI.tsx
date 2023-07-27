"use client";

import { FormRHFProps, TextAreaUIProps } from "@/global/interfaces/interfaces";
import TextAreaUI from "../FormUI/TextAreaUI";
import FormRHFContainer from "./FormRHFContainer";

interface Props extends FormRHFProps, Omit<TextAreaUIProps, "name"> {}

const TextArea = (props: Props) => {
  return (
    <FormRHFContainer
      name={props.name}
      field={(data) => <TextAreaUI {...props} {...data} />}
    />
  );
};

export default TextArea;
