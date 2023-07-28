import Container from "@/components/Container/Container";
import MenuItem from "./MenuItem";
import { menuData } from "@/data/menuData";

const Menu = async () => {
  return (
    <Container variant="lg" className="px-[3px] mt-[48px] mb-[72px]">
      <h2 className="font-header-4 text-center mb-[32px]">منوی رستوران</h2>
      <div className="grid grid-cols-[repeat(auto-fit,152px)] sd:grid-cols-[repeat(auto-fit,280px)] justify-center gap-[24px] px-8">
        {menuData.map((menu) => (
          <MenuItem key={menu.name} {...menu} />
        ))}
      </div>
    </Container>
  );
};

export default Menu;
