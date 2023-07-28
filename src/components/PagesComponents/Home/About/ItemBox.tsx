import Responsive from "@/components/Responsive/Responsive";
import { AboutUsSectionData } from "@/data/aboutUsSectionData";

const ItemBox = ({ text, icon: Icon }: AboutUsSectionData) => {
  return (
    <div
      key={text}
      className="w-[136px] sd:w-[184px] sd:h-[136px] gap-[4px] sd:gap-[16px] flex flex-col justify-center items-center"
    >
      <Responsive md lg fullLg>
        <Icon size={48} className="text-white flex-shrink-0" />
      </Responsive>
      <Responsive sm sd>
        <Icon size={24} className="text-white flex-shrink-0" />
      </Responsive>
      <p className="font-caption-md sd:font-body-lg text-white">{text}</p>
    </div>
  );
};

export default ItemBox;
