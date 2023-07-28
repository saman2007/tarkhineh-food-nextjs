import { Diagram, Icon, User, MenuBoard, HomeWifi } from "iconsax-react";

export interface AboutUsSectionData {
  text: string;
  icon: Icon;
}

export const aboutUsSectionData: AboutUsSectionData[] = [
  { icon: Diagram, text: "کیفیت بالای غذاها" },
  { icon: User, text: "پرسنلی مجرب و حرفه‌ای" },
  { icon: MenuBoard, text: "منوی متنوع" },
  { icon: HomeWifi, text: "محیطی دلنشین و آرام" },
];
