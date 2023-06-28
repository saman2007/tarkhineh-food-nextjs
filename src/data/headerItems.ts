import { HeaderTextProps } from "@/components/Header/HeaderText/HeaderText";
import { MobileMenuItem } from "@/global/types/types";
import {
  CallCalling,
  Home,
  HomeHashtag,
  MenuBoard,
  Profile2User,
} from "iconsax-react";

type DesktopMenuItems = HeaderTextProps[];

const mobileMenuItems: MobileMenuItem[] = [
  {
    text: "صفحه اصلی",
    href: "/",
    Icon: Home,
  },
  {
    text: "منو",
    Icon: MenuBoard,
    hasSubMenu: true,
    subMenus: [
      { text: "غذای اصلی", href: "/menu/main-food" },
      { text: "پیش غذا", href: "/menu/appetizer" },
      { text: "دسر", href: "/menu/dessert" },
      { text: "نوشیدنی", href: "/menu/beverage" },
    ],
  },
  {
    text: "شعبه",
    Icon: HomeHashtag,
    hasSubMenu: true,
    subMenus: [
      { text: "شعبه ونک", href: "/branches/vanak" },
      { text: "شعبه اقدسیه", href: "/branches/eghdisiye" },
      { text: "شعبه چالوس", href: "/branches/chaloos" },
      { text: "شعبه اکباتان", href: "/branches/ekbatan" },
    ],
  },
  {
    text: "درباره ما",
    href: "/about-us",
    Icon: Profile2User,
  },
  {
    text: "تماس با ما",
    href: "/contact-us",
    Icon: CallCalling,
  },
];

const desktopMenuItems: DesktopMenuItems = [
  {
    text: "صفحه اصلی",
    href: "/",
  },
  {
    text: "شعبه",
    href: "/branches",
    subMenus: [
      { text: "شعبه ونک", href: "/branches/vanak" },
      { text: "شعبه اقدسیه", href: "/branches/eghdisiye" },
      { text: "شعبه چالوس", href: "/branches/chaloos" },
      { text: "شعبه اکباتان", href: "/branches/ekbatan" },
    ],
    hasSubMenu: true,
  },
  {
    text: "منو",
    href: "/menus",
    subMenus: [
      { text: "غذای اصلی", href: "/menu/main-food" },
      { text: "پیش غذا", href: "/menu/appetizer" },
      { text: "دسر", href: "/menu/dessert" },
      { text: "نوشیدنی", href: "/menu/beverage" },
    ],
    hasSubMenu: true,
  },
  { text: "اعطای نمایندگی", href: "/granting-agency" },
  { text: "درباره ما", href: "/about-us" },
  { text: "تماس با ما", href: "/contact-us" },
];

export { mobileMenuItems, desktopMenuItems };
