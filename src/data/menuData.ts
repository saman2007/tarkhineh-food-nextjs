import {
  APPETIZER_MENU_ROUTE,
  BEVERAGE_MENU_ROUTE,
  DESSERT_MENU_ROUTE,
  MAIN_FOOD_MENU_ROUTE,
} from "./routes";

export interface MenuData {
  name: string;
  image: string;
  href: string;
}

export const menuData: MenuData[] = [
  {
    name: "نوشیدنی",
    image: "/images/menu/beverage.png",
    href: BEVERAGE_MENU_ROUTE,
  },
  {
    name: "دسر",
    image: "/images/menu/dessert.png",
    href: DESSERT_MENU_ROUTE,
  },
  {
    name: "پیش غذا",
    image: "/images/menu/appetizer.png",
    href: APPETIZER_MENU_ROUTE,
  },
  {
    name: "غذای اصلی",
    image: "/images/menu/main-food.png",
    href: MAIN_FOOD_MENU_ROUTE,
  },
];
