import Link from "@/components/Link/Link";
import Responsive from "@/components/Responsive/Responsive";
import { BranchData } from "@/data/branchesData";
import Image from "next/image";

const BranchItem = ({
  address,
  href,
  largeImage,
  name,
  smallImage,
}: BranchData) => {
  return (
    <Link
      href={href}
      className="w-full h-[80px] flex sd:block sd:w-[175px] flex-shrink sd:h-[258px] rounded-8 overflow-hidden border border-gray-4 border-solid hover:shadow-card-shadow hover:border-primary transition duration-200"
    >
      <div className="w-[114px] flex-shrink-0 h-full sd:w-full sd:h-[179px] mb-[4px] relative">
        <Responsive md lg fullLg>
          <Image alt={name} src={largeImage} fill />
        </Responsive>
        <Responsive sm sd>
          <Image alt={name} src={smallImage} fill />
        </Responsive>
      </div>
      <div className="px-8 pb-2 flex items-center justify-between flex-col">
        <h3 className="font-button-lg">{name}</h3>
        <p className="font-caption-md text-center">{address}</p>
      </div>
    </Link>
  );
};

export default BranchItem;
