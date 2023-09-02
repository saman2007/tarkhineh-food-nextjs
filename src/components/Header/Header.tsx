import Container from "../Container/Container";
import HeaderText from "./HeaderText/HeaderText";
import Logo from "./Logo/Logo";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import { desktopMenuData } from "@/data/headerData";
import Link from "@/components/Link/Link";
import IconChips from "./IconChips/IconChips";

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
        <IconChips />
      </Container>
    </header>
  );
};

export default Header;
