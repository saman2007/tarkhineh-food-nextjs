import { getSliderSlidesQuery } from "@/lib/queries/global";
import { SlidesPages } from "@/lib/queries/global/interfaces";
import Slider from "@/components/Slider/Slider";
import HomeSlide from "@/components/PagesComponents/Home/Slider/HomeSlide";

const BrnahcSlider = async ({
  branchURL,
}: {
  branchURL: keyof typeof SlidesPages;
}) => {
  const slidesData = await getSliderSlidesQuery(SlidesPages[branchURL]);

  const slides = slidesData.map(({ id, ...props }) => (
    <HomeSlide key={id} {...props} />
  ));

  return <Slider slides={slides} />;
};

export default BrnahcSlider;
