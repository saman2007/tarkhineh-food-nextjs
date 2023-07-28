import vanakLargeImg from "@/static/vanak-branch-large.png";
import eghdisiyeLargeImg from "@/static/eghdisiye-branch-large.png";
import chaloosLargeImg from "@/static/about-bg.png";
import ekbatanLargeImg from "@/static/ekbatan-branch-large.png";
import vanakSmallImg from "@/static/vanak-branch-small.png";
import eghdisiyeSmallImg from "@/static/eghdisiye-branch-large.png";
import chaloosSmallImg from "@/static/chaloos-branch-small.png";
import ekbatanSmallImg from "@/static/ekbatan-branch-small.png";

export interface BranchData {
  name: string;
  address: string;
  href: string;
  largeImage: string;
  smallImage: string;
}

export const branchesData: BranchData[] = [
  {
    name: "شعبه اکباتان",
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    href: "/branches/ekbatan",
    largeImage: ekbatanLargeImg.src,
    smallImage: ekbatanSmallImg.src,
  },

  {
    name: "شعبه چالوس",
    address:
      "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    href: "/branches/chaloos",
    largeImage: chaloosLargeImg.src,
    smallImage: chaloosSmallImg.src,
  },
  {
    name: "شعبه اقدسیه",
    address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
    href: "/branches/eghdisiye",
    largeImage: eghdisiyeLargeImg.src,
    smallImage: eghdisiyeSmallImg.src,
  },
  {
    name: "شعبه ونک",
    address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    href: "/branches/vanak",
    largeImage: vanakLargeImg.src,
    smallImage: vanakSmallImg.src,
  },
];
