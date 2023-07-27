"use client";

import {
  UseFormRegisterReturn,
  useFormContext,
  useFormState,
} from "react-hook-form";

interface Props {
  field: (data: UseFormRegisterReturn<string>) => React.ReactNode;
  name: string;
}

const FormRHFContainer = ({ field, name }: Props) => {
  const { register } = useFormContext();
  const { errors } = useFormState({ name });
  const error = errors[name]?.message;

  return (
    <div className="flex flex-col">
      {field(register(name))}
      <p className="h-[18px] text-error-extra-light font-caption-sm">
        {error?.toString()}
      </p>
    </div>
  );
};

export default FormRHFContainer;
