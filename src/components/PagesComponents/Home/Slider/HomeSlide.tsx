import LinkButton from "@/components/LinkButton/LinkButton";
import { SliderData } from "@/lib/queries/home/interfaces";

const HomeSlide = ({
  image,
  targetPage,
  text,
}: Pick<SliderData, "text" | "image" | "targetPage">) => {
  return (
    <div
      className="h-[176px] sd:h-[336px] bg-cover bg-center flex flex-col gap-y-[18px] sd:gap-y-[44px] justify-center items-center"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url('${image}') lightgray center / cover no-repeat`,
        backgroundBlendMode: "normal, overlay, normal",
      }}
    >
      <p className="font-header-6 sd:font-header-2 text-tint-1 text-center max-w-[95%] sd:max-w-[80%] mx-auto">
        {text}
      </p>
      <LinkButton
        variant="fill"
        href={targetPage}
        width={184}
        className="hidden sd:flex"
        radiusVariant={8}
        colorVariant="primary"
      >
        سفارش آنلاین غذا
      </LinkButton>
      <LinkButton
        variant="fill"
        href={targetPage}
        width={91}
        height={24}
        radiusVariant={8}
        className="flex sd:hidden"
        colorVariant="primary"
      >
        سفارش آنلاین غذا
      </LinkButton>
    </div>
  );
};

export default HomeSlide;
