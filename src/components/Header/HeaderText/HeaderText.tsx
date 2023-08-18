"use client";

import Link from "@/components/Link/Link";
import { HeaderTextData } from "@/data/headerData";
import useIsUrlMatch from "@/hooks/useIsUrlMatch";
import { ArrowDown2 } from "iconsax-react";

const HeaderText = ({ text, hasSubMenu, href, subMenus }: HeaderTextData) => {
  const isUrlMatched = useIsUrlMatch(href);

  return (
    <div className="relative group">
      <Link
        href={href}
        className="group relative text-gray-7 hover:text-primary"
      >
        <div className="flex gap-x-[4px] items-center">
          <span
            className={`flex flex-col items-center h-[37px] justify-between ${
              isUrlMatched && "text-primary font-header-5"
            }`}
          >
            {text}
            <div
              className={`w-full group-hover:scale-100 origin-right transition duration-300 scale-0 h-[1px] bg-primary ${
                isUrlMatched ? "mt-[5px] opacity-100 scale-100" : ""
              }`}
            ></div>
          </span>
          {hasSubMenu && (
            <ArrowDown2
              className="group-hover:rotate-180 transition duration-300"
              size={16}
            />
          )}
        </div>
      </Link>
      {hasSubMenu && (
        <div className="group absolute h-[10px] w-full">
          <ul className="group-hover:scale-100 rounded-[4px] scale-0 origin-top-right transition duration-200 absolute top-[10px] w-[144px] bg-white shadow-6 overflow-hidden">
            {subMenus.map(({ text, href }, index) => (
              <li
                key={index}
                className="font-body-sm text-gray-8 hover:bg-gray-3 transition duration-200"
              >
                <Link href={href} className="p-8 block">
                  {text}
                </Link>
                <div className="border-b border-b-gray-3 mx-[8px]"></div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderText;
