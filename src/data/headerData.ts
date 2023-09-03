import {
  CallCalling,
  Home,
  HomeHashtag,
  Icon,
  MenuBoard,
  Profile2User,
} from "iconsax-react";
import {
  ABOUT_US_ROUTE,
  APPETIZER_MENU_ROUTE,
  BEVERAGE_MENU_ROUTE,
  CHALOOS_BRANCH_ROUTE,
  CONTACT_US_ROUTE,
  DESSERT_MENU_ROUTE,
  EGHDISIYE_BRANCH_ROUTE,
  EKBATAN_BRANCH_ROUTE,
  GETTING_AGENCY_ROUTE,
  HOME_ROUTE,
  MAIN_FOOD_MENU_ROUTE,
  VANAK_BRANCH_ROUTE,
} from "./routes";

type Link = { text: string; href?: string };
type SubMenu =
  | {
      hasSubMenu: true;
      subMenus: { text: string; href: string }[];
    }
  | { hasSubMenu?: never; subMenus?: never; href: string };

export type HeaderTextData = Link & SubMenu;

export type MobileMenuData = (
  | {
      hasSubMenu: true;
      subMenus: { text: string; href: string }[];
      href?: never;
      Icon: Icon;
    }
  | { hasSubMenu?: never; subMenus?: never; href: string; Icon?: Icon }
) & { text: string };

export const mobileMenuData: MobileMenuData[] = [
  {
    text: "صفحه اصلی",
    href: HOME_ROUTE,
    Icon: Home,
  },
  {
    text: "منو",
    Icon: MenuBoard,
    hasSubMenu: true,
    subMenus: [
      { text: "غذای اصلی", href: MAIN_FOOD_MENU_ROUTE },
      { text: "پیش غذا", href: APPETIZER_MENU_ROUTE },
      { text: "دسر", href: DESSERT_MENU_ROUTE },
      { text: "نوشیدنی", href: BEVERAGE_MENU_ROUTE },
    ],
  },
  {
    text: "شعبه",
    Icon: HomeHashtag,
    hasSubMenu: true,
    subMenus: [
      { text: "شعبه ونک", href: VANAK_BRANCH_ROUTE },
      { text: "شعبه اقدسیه", href: EGHDISIYE_BRANCH_ROUTE },
      { text: "شعبه چالوس", href: CHALOOS_BRANCH_ROUTE },
      { text: "شعبه اکباتان", href: EKBATAN_BRANCH_ROUTE },
    ],
  },
  {
    text: "درباره ما",
    href: ABOUT_US_ROUTE,
    Icon: Profile2User,
  },
  {
    text: "تماس با ما",
    href: CONTACT_US_ROUTE,
    Icon: CallCalling,
  },
];

export const desktopMenuData: HeaderTextData[] = [
  {
    text: "صفحه اصلی",
    href: HOME_ROUTE,
  },
  {
    text: "شعبه",
    subMenus: [
      { text: "شعبه ونک", href: VANAK_BRANCH_ROUTE },
      { text: "شعبه اقدسیه", href: EGHDISIYE_BRANCH_ROUTE },
      { text: "شعبه چالوس", href: CHALOOS_BRANCH_ROUTE },
      { text: "شعبه اکباتان", href: EKBATAN_BRANCH_ROUTE },
    ],
    hasSubMenu: true,
  },
  {
    text: "منو",
    subMenus: [
      { text: "غذای اصلی", href: MAIN_FOOD_MENU_ROUTE },
      { text: "پیش غذا", href: APPETIZER_MENU_ROUTE },
      { text: "دسر", href: DESSERT_MENU_ROUTE },
      { text: "نوشیدنی", href: BEVERAGE_MENU_ROUTE },
    ],
    hasSubMenu: true,
  },
  { text: "اعطای نمایندگی", href: GETTING_AGENCY_ROUTE },
  { text: "درباره ما", href: ABOUT_US_ROUTE },
  { text: "تماس با ما", href: CONTACT_US_ROUTE },
];
