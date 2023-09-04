import { mysql } from "@/lib/db";
import { SliderData } from "./interfaces";

export const getHomeSliderSlidesQuery = async (): Promise<SliderData[]> => {
  const slidesData = await mysql.query<SliderData[]>(
    "SELECT id, text, image, targetPage FROM slider_slides"
  );

  return slidesData[0];
};
