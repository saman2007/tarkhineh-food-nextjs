"use client";

import { User, ShoppingCart, SearchNormal1 } from "iconsax-react";
import { useState } from "react";
import SearchModal from "@/components/SearchModal/SearchModal";
import { SVG } from "@/global/types/types";
import IconChip from "@/components/IconChip/IconChip";

type IconChipType = {
  icon: React.ReactElement<SVG>;
  hideOnMd?: boolean;
  onClick?: () => void;
}[];

const IconChips = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const iconChips: IconChipType = [
    {
      icon: <SearchNormal1 size={24} className="text-primary" />,
      hideOnMd: true,
      onClick: () => setIsSearchModalOpen(true),
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

  return (
    <>
      <SearchModal
        isOpen={isSearchModalOpen}
        setIsOpen={setIsSearchModalOpen}
      />
      <div className="gap-x-[8px] flex">
        {iconChips.map(({ icon, hideOnMd, onClick }, index) => (
          <div key={index} className={`${hideOnMd ? "hidden md:block" : ""}`}>
            <IconChip onClick={onClick}>{icon}</IconChip>
          </div>
        ))}
      </div>
    </>
  );
};

export default IconChips;
