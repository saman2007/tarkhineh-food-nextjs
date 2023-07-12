import Container from "@/components/Container/Container";
import { getMenuQuery } from "@/lib/queries/home";
import MenuItem from "./MenuItem";

const Menu = async () => {
  const menuData = await getMenuQuery();

  return (
    <Container variant="lg" className="px-[3px] mt-[48px] mb-[72px]">
      <h2 className="font-header-4 text-center mb-[32px]">منوی رستوران</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(152px,1fr))] sd:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-center gap-[24px]">
        {menuData.map(({ id, ...menu }) => (
          <MenuItem key={id} {...menu} />
        ))}
      </div>
    </Container>
  );
};

export default Menu;
