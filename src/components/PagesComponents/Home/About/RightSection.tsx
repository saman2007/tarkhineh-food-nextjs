import Link from "@/components/Link/Link";
import Responsive from "@/components/Responsive/Responsive";
import { ArrowLeft2 } from "iconsax-react";

const RightSection = () => {
  return (
    <div className="w-full md:w-[600px] ">
      <h2 className="font-overline-lg sd:font-header-4 text-white mb-[8px] sd:mb-[24px]">
        رستوران‌های زنجیره‌ای ترخینه
      </h2>
      <p className="font-caption-md sd:font-body-xl text-white text-justify">
        مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که
        بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های
        زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و
        طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان
        ارائه دهیم.
      </p>
      <div className="mt-[8px] sd:mt-[16px] flex justify-end">
        <Responsive md lg fullLg>
          <Link
            href={"/about-us"}
            variant="outline"
            radiusVariant={4}
            width={184}
            height={40}
            fontVariant="captionMdAndBtnLg"
            className="gap-x-[8px]"
            colorVariant="secondary"
          >
            اطلاعات بیشتر
            <ArrowLeft2 size={24} />
          </Link>
        </Responsive>
        <Responsive sm sd>
          <Link
            href={"/about-us"}
            variant="outline"
            radiusVariant={4}
            width={152}
            height={32}
            fontVariant="captionMdAndBtnLg"
            colorVariant="secondary"
          >
            اطلاعات بیشتر
          </Link>
        </Responsive>
      </div>
    </div>
  );
};

export default RightSection;
