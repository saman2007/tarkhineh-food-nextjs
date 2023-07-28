import TwitterIcon from "@/components/Icons/TwitterIcon";
import { SVG } from "@/global/types/types";
import { FC } from "react";
import {
  CHALOOS_BRANCH_ROUTE,
  EGHDISIYE_BRANCH_ROUTE,
  EKBATAN_BRANCH_ROUTE,
  FAQ_ROUTE,
  INSTAGRAM_ROUTE,
  PRIVACY_ROUTE,
  RULES_ROUTE,
  TELEGRAM_ROUTE,
  TWITTER_ROUTE,
  VANAK_BRANCH_ROUTE,
} from "./routes";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import TelegramIcon from "@/components/Icons/TelegramIcon";

export interface Footer {
  title: string;
  items: FoterData[];
  icons?: FooterIconData[];
}

export interface FoterData {
  text: string;
  href: string;
}

export interface FooterIconData {
  icon: FC<SVG>;
  href: string;
}

export const footerData: Footer[] = [
  {
    title: "دسترسی آسان",
    items: [
      { text: "پرسش‌های متداول", href: FAQ_ROUTE },
      { text: "قوانین ترخینه", href: RULES_ROUTE },
      { text: "حریم خصوصی", href: PRIVACY_ROUTE },
    ],
    icons: [
      { icon: TwitterIcon, href: TWITTER_ROUTE },
      { icon: InstagramIcon, href: INSTAGRAM_ROUTE },
      { icon: TelegramIcon, href: TELEGRAM_ROUTE },
    ],
  },
  {
    title: "شعبه‌های ترخینه",
    items: [
      { text: "شعبه اکباتان", href: EKBATAN_BRANCH_ROUTE },
      { text: "شعبه چالوس", href: CHALOOS_BRANCH_ROUTE },
      { text: "شعبه اقدسیه", href: EGHDISIYE_BRANCH_ROUTE },
      { text: "شعبه ونک", href: VANAK_BRANCH_ROUTE },
    ],
  },
];
