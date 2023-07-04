import { mysql } from "@/lib/db";
import { SliderData } from "./interfaces";

const getSliderSlides = async (): Promise<SliderData[]> => {
  const slidesData = await mysql.query<SliderData[]>(
    "SELECT id, text, image, targetPage FROM slides"
  );

  return slidesData[0];
};

export { getSliderSlides };
