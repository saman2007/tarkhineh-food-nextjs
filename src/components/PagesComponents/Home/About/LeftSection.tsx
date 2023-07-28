import { aboutUsSectionData } from "@/data/aboutUsSectionData";
import ItemBox from "./ItemBox";

const LeftSection = () => {
  const items = aboutUsSectionData.map((data) => (
    <ItemBox {...data} key={data.text} />
  ));
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-x-[16px] gap-y-[16px] sd:gap-y-[8px] w-full md:w-[392px]">
        {items}
      </div>
    </div>
  );
};

export default LeftSection;
