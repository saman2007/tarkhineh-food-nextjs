"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const variant = {
  hover: { bottom: "16px" },
  initial: { bottom: "-100px" },
};

const BranchLinkContainer = ({ children }: Props) => {
  return (
    <motion.div
      transition={{ duration: 0.2 }}
      className="w-full justify-center flex-grow absolute hidden sd:flex"
      variants={variant}
    >
      {children}
    </motion.div>
  );
};

export default BranchLinkContainer;
