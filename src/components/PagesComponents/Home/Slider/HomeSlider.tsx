import Slider from "@/components/Slider/Slider";
import { getHomeSliderSlidesQuery } from "@/lib/queries/home";
import HomeSlide from "./HomeSlide";

const HomeSlider = async () => {
  const slidesData = await getHomeSliderSlidesQuery();

  const slides = slidesData.map(({ id, ...props }) => (
    <HomeSlide key={id} {...props} />
  ));

  return <Slider slides={slides} />;
};

export default HomeSlider;
