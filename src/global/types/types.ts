import { Icon } from "iconsax-react";
import { SVGProps } from "react";

type SVG = SVGProps<SVGSVGElement>;

type MobileMenuItem = (
  | {
      hasSubMenu: true;
      subMenus: { text: string; href: string }[];
      href?: never;
      Icon: Icon;
    }
  | { hasSubMenu?: never; subMenus?: never; href: string; Icon?: Icon }
) & { text: string };

export type { SVG, MobileMenuItem };
