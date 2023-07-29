"use client";

import { borderVariants } from "@/data/variants/FormUIs";
import {
  UseFormRegisterReturn,
  useFormContext,
  useFormState,
} from "react-hook-form";

interface Props {
  field: (
    data: UseFormRegisterReturn<string> & {
      borderVariant: keyof typeof borderVariants;
      error?: string | undefined;
    }
  ) => React.ReactNode;
  name: string;
}

const FormRHFContainer = ({ field, name }: Props) => {
  const { register, getValues } = useFormContext();
  const { errors, isSubmitted } = useFormState({ name });
  const error = errors[name]?.message;

  /* 
  success border should be added to fields only when form had been
  submitted and there is no error in field and the field is required to fill
  */
  const borderShouldBeSuccess =
    isSubmitted && !error && getValues(name).length !== 0;

  return field({
    ...register(name),
    borderVariant: error
      ? "error"
      : borderShouldBeSuccess
      ? "success"
      : "normal",
    error: error?.toString(),
  });
};

export default FormRHFContainer;
