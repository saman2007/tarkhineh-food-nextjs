import useMatchedUrl from "@/hooks/useMatchedUrl";
import { ArrowDown2 } from "iconsax-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { MobileMenuItem } from "@/global/types/types";
import Link from "@/Link/Link";

const NavigationItem = ({
  href,
  Icon,
  text,
  hasSubMenu,
  subMenus,
  subItemClassName,
}: MobileMenuItem & { subItemClassName?: string }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const isUrlMatched = useMatchedUrl(href || "");

  const parentClasses =
    "flex justify-between items-center text-gray-7 pb-4 sd:pb-8 hover:text-primary";

  const children = (
    <div
      className={`flex items-center gap-x-[4px] sd:gap-x-[8px] ${
        subItemClassName ? "font-body-sm" : "font-body-md"
      }`}
    >
      {Icon && (
        <>
          <Icon size={16} className="color-gray-8 sd:hidden" />
          <Icon size={24} className="color-gray-8 sd:block hidden" />
        </>
      )}
      {text}
    </div>
  );

  if (hasSubMenu) {
    return (
      <div className="border-b-[1px] border-b-gray-4">
        <div
          onClick={() => setIsSubMenuOpen((prev) => !prev)}
          className={`cursor-pointer ${parentClasses}`}
        >
          {children}
          <ArrowDown2
            size={16}
            className={`sd:hidden transition duration-200 ${
              isSubMenuOpen ? "rotate-90" : ""
            }`}
          />
          <ArrowDown2
            size={24}
            className={`transition duration-200 hidden sd:block ${
              isSubMenuOpen ? "rotate-90" : ""
            }`}
          />
        </div>
        <motion.div
          animate={{ height: isSubMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.2 }}
          style={{ height: !isSubMenuOpen ? 0 : "unset" }}
          className="mr-[15px] overflow-y-hidden"
        >
          {subMenus.map((props, index) => (
            <NavigationItem
              {...props}
              key={index}
              subItemClassName="last:border-0 pt-8"
            />
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={`${parentClasses} ${subItemClassName} ${
        isUrlMatched ? "text-primary" : ""
      } border-b-[1px] border-b-gray-4`}
    >
      {children}
    </Link>
  );
};

export default NavigationItem;
