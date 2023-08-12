import { User, ShoppingCart, SearchNormal1 } from "iconsax-react";
import IconChip from "../IconChip/IconChip";
import Container from "../Container/Container";
import HeaderText from "./HeaderText/HeaderText";
import Logo from "./Logo/Logo";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import { desktopMenuData } from "@/data/headerData";
import Link from "@/components/Link/Link";
import { SVG } from "@/global/types/types";

type IconChipType = { icon: React.ReactElement<SVG>; hideOnMd?: boolean }[];

const iconChips: IconChipType = [
  {
    icon: <SearchNormal1 size={24} className="text-primary" />,
    hideOnMd: true,
  },
  {
    icon: (
      <ShoppingCart
        size={24}
        className="text-primary w-[16px] sd:w-[unset] h-[16px] sd:h-[unset]"
      />
    ),
  },
  {
    icon: (
      <User
        size={24}
        className="text-primary w-[16px] sd:w-[unset] h-[16px] sd:h-[unset]"
      />
    ),
  },
];

const Header = () => {
  return (
    <header className="fixed z-10 p-16 right-0 left-0 h-[115px] gap-[39px] bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.15)]">
      <Container
        size="lg"
        className="flex items-center justify-between h-full w-full"
      >
        <NavigationMenu />
        <Link href="/">
          <Logo className="fill-primary" />
        </Link>
        <div className="gap-x-[24px] hidden md:flex">
          {desktopMenuData.map((data, key) => (
            <HeaderText key={key} {...data} />
          ))}
        </div>
        <div className="gap-x-[8px] flex">
          {iconChips.map(({ icon, hideOnMd }, index) => (
            <div key={index} className={`${hideOnMd ? "hidden md:block" : ""}`}>
              <IconChip>{icon}</IconChip>
            </div>
          ))}
        </div>
      </Container>
    </header>
  );
};

export default Header;
