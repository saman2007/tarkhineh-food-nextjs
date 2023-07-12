import { mysql } from "@/lib/db";
import { MenuData, SliderData } from "./interfaces";

const getSliderSlidesQuery = async (): Promise<SliderData[]> => {
  const slidesData = await mysql.query<SliderData[]>(
    "SELECT id, text, image, targetPage FROM slides"
  );

  return slidesData[0];
};

const getMenuQuery = async (): Promise<MenuData[]> => {
  const menuData = await mysql.query<MenuData[]>(
    "SELECT id, name, image, href FROM food_menu"
  );

  return menuData[0];
};

export { getSliderSlidesQuery, getMenuQuery };
