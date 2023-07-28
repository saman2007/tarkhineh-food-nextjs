export interface MenuData {
  name: string;
  image: string;
  href: string;
}

export const menuData: MenuData[] = [
  {
    name: "نوشیدنی",
    image: "/images/menu/beverage.png",
    href: "/menu/beverage",
  },
  {
    name: "دسر",
    image: "/images/menu/dessert.png",
    href: "/menu/dessert",
  },
  {
    name: "پیش غذا",
    image: "/images/menu/appetizer.png",
    href: "/menu/appetizer",
  },
  {
    name: "غذای اصلی",
    image: "/images/menu/main-food.png",
    href: "/menu/main-food",
  },
];
