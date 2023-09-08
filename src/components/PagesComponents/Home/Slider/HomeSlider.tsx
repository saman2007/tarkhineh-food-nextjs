import Slider from "@/components/Slider/Slider";
import { getSliderSlidesQuery } from "@/lib/queries/global";
import HomeSlide from "./HomeSlide";
import { SlidesPages } from "@/lib/queries/global/interfaces";

const HomeSlider = async () => {
  const slidesData = await getSliderSlidesQuery(SlidesPages["/"]);

  const slides = slidesData.map(({ id, ...props }) => (
    <HomeSlide key={id} {...props} />
  ));

  return <Slider slides={slides} />;
};

export default HomeSlider;
