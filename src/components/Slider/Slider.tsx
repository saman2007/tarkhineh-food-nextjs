"use client";

import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import "swiper/css";

interface Props extends SwiperProps {
  slides: React.ReactNode[];
}

const Slider = ({ slides, ...props }: Props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: ".next-slide-btn",
        prevEl: ".prev-slide-btn",
        disabledClass: "!hidden",
      }}
      pagination={{
        bulletElement: `div`,
        bulletActiveClass:
          "w-[8px] sd:!w-[12px] h-[8px] sd:!h-[12px] !rounded-8 sd:rounded-12 box-content transition-colors duration-300 !bg-primary",
        renderBullet(_, className) {
          return `<div class="w-[6px] sd:w-[8px] h-[6px] sd:h-[8px] rounded-6 sd:rounded-8 bg-gray-5 ${className}"></div>`;
        },
        el: ".bullets-container",
        clickable: true,
      }}
      slidesPerGroup={1}
      slidesPerView={1}
      {...props}
      className="w-full relative"
      wrapperClass="flex"
    >
      <div className="min-w-[82px] sd:min-w-[154px] bullets-container absolute bottom-0 gap-x-[4px] right-2/4 translate-x-2/4 z-10 h-[18px] sd:h-[33px] rounded-t-32 bg-white flex justify-center items-center"></div>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
      <ArrowRight2
        size={32}
        className="prev-slide-btn hidden sd:block z-10 absolute right-[12px] md:right-[24px] text-white top-2/4 cursor-pointer -translate-y-2/4"
      />
      <ArrowLeft2
        size={32}
        className="next-slide-btn hidden sd:block z-10 absolute left-[12px] md:left-[24px] text-white top-2/4 cursor-pointer -translate-y-2/4"
      />
    </Swiper>
  );
};

export default Slider;
