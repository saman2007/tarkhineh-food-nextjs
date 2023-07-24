import Button from "@/components/Button/Button";
import TextAreaUI from "../FormUI/TextAreaUI";
import TextFieldUI from "../FormUI/TextFieldUI";

const FooterFormCol = () => {
  return (
    <form className="hidden sd:flex gap-x-[26px] gap-y-[8px] md:flex-row flex-col">
      <div className="flex flex-col gap-y-[12px]">
        <div className="w-[286px] md:w-[276px]">
          <TextFieldUI
            width="100%"
            height={40}
            placeholder="نام و نام خانوادگی"
          />
        </div>
        <div className="w-[286px] md:w-[276px]">
          <TextFieldUI width="100%" height={40} placeholder="شماره تماس" />
        </div>
        <div className="w-[286px] md:w-[276px]">
          <TextFieldUI
            width="100%"
            height={40}
            placeholder="آدرس ایمیل (اختیاری)"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-[8px] items-end">
        <TextAreaUI placeholder="پیام شما" width={286} height={144} />
        <Button
          width={183}
          height={40}
          variant="outline"
          colorVariant="fourth"
          radiusVariant={8}
        >
          ارسال پیام
        </Button>
      </div>
    </form>
  );
};

export default FooterFormCol;
