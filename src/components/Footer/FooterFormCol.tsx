import SubmitUserMessageBtn from "./SubmitUserMessageBtn";
import FooterFormColProvider from "./FooterFormColProvider";
import TextArea from "../FormRHF/TextArea";
import TextField from "../FormRHF/TextField";

const FooterFormCol = () => {
  return (
    <FooterFormColProvider>
      <div className="flex flex-col gap-y-[4px]">
        <div className="w-[286px] md:w-[276px]">
          <TextField
            width="100%"
            height={40}
            placeholder="نام و نام خانوادگی"
            name="fullname"
            floatPlaceholder
          />
        </div>
        <div className="w-[286px] md:w-[276px]">
          <TextField
            width="100%"
            height={40}
            placeholder="شماره تماس"
            name="phoneNumber"
            floatPlaceholder
          />
        </div>
        <div className="w-[286px] md:w-[276px]">
          <TextField
            width="100%"
            height={40}
            placeholder="آدرس ایمیل (اختیاری)"
            name="email"
            floatPlaceholder
          />
        </div>
      </div>
      <div className="flex flex-col items-end gap-y-[4px]">
        <TextArea
          placeholder="پیام شما"
          width={286}
          height={144}
          name="message"
          showLengthCounter
          maxLength={200}
          floatPlaceholder
        />
        <SubmitUserMessageBtn />
      </div>
    </FooterFormColProvider>
  );
};

export default FooterFormCol;
