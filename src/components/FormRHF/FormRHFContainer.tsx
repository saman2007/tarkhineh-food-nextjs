"use client";

import { BorderVariants } from "@/data/variants/FormUIs";
import {
  FieldValues,
  UseFormRegisterReturn,
  UseFormWatch,
  useFormContext,
  useFormState,
} from "react-hook-form";

export interface Props {
  /** Field is a function that returns form component UI. it sends some data that a component should accept it as props */
  field: (
    data: UseFormRegisterReturn<string> & {
      borderVariant: BorderVariants;
      error?: string | undefined;
      isRHF: true;
      watch: UseFormWatch<FieldValues>;
    }
  ) => React.ReactNode;
  /** Name is actually the name of validation key in yup validation and react hook form uses it */
  name: string;
}

/** FormRHFContainer Is The Container Of All RHF Forms */
const FormRHFContainer = ({ field, name }: Props) => {
  const { register, getValues, watch } = useFormContext();
  const { errors, isSubmitted } = useFormState({ name });
  const error = errors[name]?.message;

  /* 
  Success border should be added to fields only when form had been
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
    isRHF: true,
    watch,
  });
};

export default FormRHFContainer;
