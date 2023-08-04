"use client";

import Button from "../Button/Button";
import useServerActionSituation from "@/hooks/useServerActionSituation";

const SubmitUserMessageBtn = () => {
  const { isLoading } = useServerActionSituation("userMsg");

  return (
    <Button
      width={183}
      height={40}
      variant="outline"
      colorVariant="tertiary"
      radiusVariant={8}
      type="submit"
      isLoading={isLoading}
      disabled={isLoading}
    >
      ارسال پیام
    </Button>
  );
};

export default SubmitUserMessageBtn;
