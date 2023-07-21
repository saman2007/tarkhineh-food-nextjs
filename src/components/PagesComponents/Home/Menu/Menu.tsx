import Container from "@/components/Container/Container";
import { getMenuQuery } from "@/lib/queries/home";
import MenuItem from "./MenuItem";

const Menu = async () => {
  const menuData = await getMenuQuery();

  return (
    <Container variant="lg" className="px-[3px] mt-[48px] mb-[72px]">
      <h2 className="font-header-4 text-center mb-[32px]">منوی رستوران</h2>
      <div className="grid grid-cols-[repeat(auto-fit,152px)] sd:grid-cols-[repeat(auto-fit,280px)] justify-center gap-[24px] px-8">
        {menuData.map(({ id, ...menu }) => (
          <MenuItem key={id} {...menu} />
        ))}
      </div>
    </Container>
  );
};

export default Menu;
