"use client";

import Modal, { Props } from "@/components/Modal/Modal";
import TextField from "../FormRHF/TextField";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { searchValidation } from "@/utilities/validation";
import { SearchNormal1 } from "iconsax-react";
import Button from "../Button/Button";
import { useEffect } from "react";

const SearchModal = ({
  isOpen,
  setIsOpen,
}: Pick<Props, "isOpen" | "setIsOpen">) => {
  const methods = useForm({
    defaultValues: { searchText: "" },
    resolver: yupResolver(searchValidation),
  });

  const onSubmitForm = methods.handleSubmit((data) => {
    console.log(data);
  });

  useEffect(() => {
    //Reset the form when the modal is opening
    return () => {
      if (!isOpen) methods.reset();
    };
  }, [isOpen, methods]);

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="جستجو"
      contentContainerClasses="flex flex-col justify-center items-center"
    >
      <FormProvider {...methods}>
        <p className="mt-[40px] mb-[12px] text-gray-8">
          لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
        </p>
        <form onSubmit={onSubmitForm} className="max-w-[409px] w-full">
          <TextField
            name="searchText"
            placeholder="جستجو"
            height={40}
            width="100%"
            variant="secondary"
            iconLeft={
              <Button type="submit">
                <SearchNormal1
                  className="text-gray-8 cursor-pointer"
                  size={24}
                  type="submit"
                />
              </Button>
            }
          />
        </form>
      </FormProvider>
    </Modal>
  );
};

export default SearchModal;
