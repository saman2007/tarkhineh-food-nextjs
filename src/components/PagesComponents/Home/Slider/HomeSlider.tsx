import Slider from "@/components/Slider/Slider";
import { getSliderSlidesQuery } from "@/lib/queries/home";
import HomeSlide from "./HomeSlide";

const HomeSlider = async () => {
  const slidesData = await getSliderSlidesQuery();
  const slides = slidesData.map(({ id, ...props }) => (
    <HomeSlide key={id} {...props} />
  ));

  return <Slider slides={slides} />;
};

export default HomeSlider;
