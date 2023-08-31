"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  largeImg: string;
  smallImg: string;
  alt: string;
}

const variant = {
  hover: { height: "190px" },
};

const BranchImg = ({ alt, largeImg, smallImg }: Props) => {
  return (
    <>
      <motion.div
        transition={{ duration: 0.2 }}
        className="w-full relative h-[230px] hidden sd:block"
        variants={variant}
      >
        <Image alt={alt} src={largeImg} fill quality={100} />
      </motion.div>
      <div className="w-[144px] h-full relative sd:hidden shrink-0">
        <Image alt={alt} src={smallImg} fill quality={100} />
      </div>
    </>
  );
};

export default BranchImg;
