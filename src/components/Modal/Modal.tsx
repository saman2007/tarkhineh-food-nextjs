"use client";

import { Dispatch, SetStateAction, useEffect } from "react";
import LgXIcon from "../Icons/LgXIcon";
import { motion } from "framer-motion";
import Portal from "../Portal/Portal";
import XIcon from "../Icons/SmXIcon";
import Backdrop from "../Backdrop/Backdrop";

interface Props {
  /** Sometimes modal has a header with title. You can set that title here */
  title?: string;
  /** Is modal open? */
  isOpen: boolean;
  /** setState function to close modal */
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  /** Classes for the element that is the container of Modal children */
  contentContainerClasses?: string;
  /** Elements that you want to place in content of modal */
  children: React.ReactNode;
}

/**
 * A Reusable Modal Component That Can Be Used Everywhere
 */
const Modal = ({
  title,
  isOpen,
  setIsOpen,
  contentContainerClasses = "",
  children,
}: Props) => {
  const closeModalHandler = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      //There should be no scroll in body tag after user opened modal
      document.body.style.overflow = "hidden";
    }

    return () => {
      const modalRootChildren = document.getElementById("modal-root")?.children;

      //When there are nested opened modal, we should not set document.body.style.overflow to auto because there are other opened modals
      if (modalRootChildren && modalRootChildren.length > 1) return;

      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Portal portalId="modal-root">
      <Backdrop
        isOpen={isOpen}
        className="z-50 p-20 overflow-y-auto flex"
        onClick={closeModalHandler}
      >
        {isOpen && (
          <motion.div
            onClick={(e) => e.stopPropagation()}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, top: -100 }}
            animate={{ opacity: isOpen ? 1 : 0, top: "unset" }}
            exit={{ opacity: 0, top: -100 }}
            className=" rounded-8 bg-white overflow-hidden max-w-[808px] m-auto w-full pointer-events-auto origin-center relative"
          >
            <div className="w-full p-16 flex items-center bg-gray-3">
              <div className="flex-grow">
                {title && (
                  <h2 className="text-center sd:font-header-7 font-caption-lg">
                    {title}
                  </h2>
                )}
              </div>
              <LgXIcon
                fill="#717171"
                className="cursor-pointer sd:block hidden"
                onClick={closeModalHandler}
              />
              <XIcon
                fill="#717171"
                className="cursor-pointer sd:hidden"
                onClick={closeModalHandler}
              />
            </div>
            <div
              className={`w-full p-16 pt-0 sd:p-24 ${contentContainerClasses}`}
            >
              {children}
            </div>
          </motion.div>
        )}
      </Backdrop>
    </Portal>
  );
};

export default Modal;
