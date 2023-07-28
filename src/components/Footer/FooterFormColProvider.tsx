"use client";

import useServerAction from "@/hooks/useServerAction";
import { insertUserMessage } from "@/lib/queries/global";
import { UserMessage } from "@/lib/queries/global/interfaces";
import { submitUserMessageSchema } from "@/utilities/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface Props {
  children: React.ReactNode;
}

const FooterFormColProvider = ({ children }: Props) => {
  const { serverAction } = useServerAction<UserMessage>(
    "userMsg",
    insertUserMessage,
    () => {
      toast("پیام شما با موفقیت ثبت شد!", { type: "success" });
    },
    () => {
      toast("مشکلی در ثبت پیام شما به وجود آمد. دوباره تلاش کنید.", {
        type: "error",
      });
    }
  );

  const methods = useForm({
    defaultValues: {
      email: "",
      fullname: "",
      message: "",
      phoneNumber: "",
    },
    resolver: yupResolver(submitUserMessageSchema),
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(
          ({ email, fullname, message, phoneNumber }) => {
            serverAction({
              email: email || "",
              fullname,
              message,
              phoneNumber,
            });
          },
          (error) => {
            console.log(error);
          }
        )}
        className="hidden sd:flex gap-x-[26px] gap-y-[8px] md:flex-row flex-col"
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default FooterFormColProvider;
