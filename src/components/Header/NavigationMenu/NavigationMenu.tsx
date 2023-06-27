"use client";

import Portal from "@/components/Portal/Portal";
import { backdropContext } from "@/contexts/BackdropContext";
import { HambergerMenu } from "iconsax-react";
import { useContext, useState } from "react";
import { useOutsideClickRef } from "rooks";
import { AnimatePresence, motion } from "framer-motion";
import { AspectRatio } from "react-aspect-ratio";
import SmXIcon from "@/components/Icons/SmXIcon";
import LgXIcon from "@/components/Icons/LgXIcon";
import Logo from "../Logo/Logo";
import SmLogo from "../Logo/SmLogo";
import NavigationItem from "../NavigationItems/NavigationItem";
import { mobileMenuItems } from "@/data/headerItems";

const NavigationMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const backdropCTX = useContext(backdropContext);

  const closeMenuHandler = () => {
    backdropCTX.setIsBackdropOpen({ isOpen: false });
    setIsNavOpen(false);
  };

  const [outsideRef] = useOutsideClickRef(closeMenuHandler);

  return (
    <>
      <HambergerMenu
        size={24}
        className="text-primary md:hidden cursor-pointer"
        onClick={() => {
          backdropCTX.setIsBackdropOpen({
            isOpen: true,
            className: "md:blur-0 md:bg-[unset]",
          });
          setIsNavOpen(true);
        }}
      />
      <Portal portalId="modal-root">
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              className="fixed right-0 z-10 top-0 bottom-0 bg-white w-[70%] md:hidden overflow-y-auto"
              ref={outsideRef}
              initial={{ right: "-70%" }}
              animate={{ right: 0 }}
              exit={{ right: "-70%" }}
            >
              <AspectRatio ratio="8/3" className="max-h-[200px]">
                <div className="w-[100%] relative flex justify-between p-16 h-full bg-[url('/images/nav-bg.jpg')] bg-cover bg-no-repeat">
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#000000A6]"></div>
                  <div className="flex items-center z-10">
                    <Logo className="fill-white sd:block hidden" />
                    <SmLogo className="fill-white sd:hidden" />
                  </div>
                  <div className="flex justify-start z-10">
                    <div
                      onClick={closeMenuHandler}
                      className="cursor-pointer h-fit"
                    >
                      <SmXIcon className="sd:hidden" />
                      <LgXIcon className="hidden sd:block" />
                    </div>
                  </div>
                </div>
              </AspectRatio>
              <div className="w-full flex flex-col gap-[8px] sd:gap-[16px] p-16 z-10 relative">
                {mobileMenuItems.map((props, index) => (
                  <NavigationItem key={index} {...props} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
};

export default NavigationMenu;
