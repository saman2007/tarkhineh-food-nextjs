"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  href: string;
}

const BranchItemContainer = ({ children }: Props) => {
  return (
    <>
      <motion.div
        whileHover="hover"
        initial="initial"
        className="w-[288px] relative h-[344px] pb-16 overflow-hidden transition duration-200 rounded-8 gap-y-[8px] border border-solid border-gray-4 hidden sd:flex flex-col hover:shadow-card-shadow"
      >
        {children}
      </motion.div>
      <div className="w-full relative h-[80px] sd:pb-16 overflow-hidden hover:border-primary transition duration-200 rounded-8 gap-y-[8px] border border-solid border-gray-4 flex sd:hidden">
        {children}
      </div>
    </>
  );
};

export default BranchItemContainer;
