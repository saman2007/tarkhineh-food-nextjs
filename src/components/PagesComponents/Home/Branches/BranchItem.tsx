import { BranchData } from "@/data/branchesData";
import BranchImg from "./BranchImg";
import BranchItemContainer from "./BranchItemContainer";
import BranchLinkContainer from "./BranchLinkContainer";
import LinkButton from "@/components/LinkButton/LinkButton";
import { ArrowLeft2 } from "iconsax-react";
import Link from "@/Link/Link";

const BranchItem = ({
  name,
  largeImage,
  href,
  address,
  smallImage,
}: BranchData) => {
  return (
    <BranchItemContainer href={href}>
      <Link
        href={href}
        className="absolute right-0 left-0 bottom-0 top-0 sd:hidden z-[2]"
      ></Link>
      <BranchImg largeImg={largeImage} smallImg={smallImage} alt={name} />
      <div className="gap-y-[4px] text-gray-8 max-sd:px-4 max-sd:py-8 flex px-8 w-full flex-col items-center">
        <h3 className="font-button-sm sd:font-header-7">{name}</h3>
        <p className="font-caption-sm sd:font-caption-lg text-center w-full">
          {address}
        </p>
      </div>
      <BranchLinkContainer>
        <LinkButton
          href={href}
          variant="outline"
          colorVariant="secondary"
          width={128}
          height={32}
          fontVariant="captionMd"
          radiusVariant={4}
          className="hidden sd:flex"
        >
          صفحه شعبه
          <ArrowLeft2 size={16} />
        </LinkButton>
      </BranchLinkContainer>
    </BranchItemContainer>
  );
};

export default BranchItem;
