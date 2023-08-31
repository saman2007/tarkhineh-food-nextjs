"use client";

import { backdropContext } from "@/contexts/BackdropContext";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import LgXIcon from "../Icons/LgXIcon";
import { motion } from "framer-motion";
import Portal from "../Portal/Portal";
import XIcon from "../Icons/SmXIcon";
import Backdrop from "../Backdrop/Backdrop";

interface Props {
  title?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  contentContainerClasses?: string;
  children: React.ReactNode;
}

const Modal = ({
  title,
  isOpen,
  setIsOpen,
  contentContainerClasses = "",
  children,
}: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModalHandler = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      const modalRootChildren = document.getElementById("modal-root")?.children;

      //When there are nested opened modal, we should not set document.body.style.overflow to auto because there are other opened modals
      if (modalRootChildren && modalRootChildren.length > 1) return;

      document.body.style.overflow = "auto";
    };
  }, [isOpen, closeModalHandler]);

  return (
    <Portal portalId="modal-root">
      <Backdrop
        isOpen={isOpen}
        className="z-50 p-20 flex justify-center items-center"
        onClick={(e) => {
          const clickedTarget = e.target as HTMLDivElement;

          if (clickedTarget.contains(modalRef.current)) {
            closeModalHandler();
          }
        }}
      >
        {isOpen && (
          <motion.div
            transition={{ duration: 0.1 }}
            initial={{ opacity: 0, top: -100 }}
            animate={{ opacity: isOpen ? 1 : 0, top: "unset" }}
            exit={{ opacity: 0, top: -50 }}
            className="p-24 rounded-8 bg-white max-w-[808px] w-full pointer-events-auto origin-center relative"
            ref={modalRef}
          >
            <div className="w-full flex items-center">
              <div className="flex-grow">
                {title && (
                  <h2 className="m-auto w-fit font-header-7 sd:font-caption-lg">
                    {title}
                  </h2>
                )}
              </div>
              <LgXIcon
                fill="#717171"
                className="cursor-pointer sd:hidden"
                onClick={closeModalHandler}
              />
              <XIcon
                fill="#717171"
                className="cursor-pointer sd:block hidden"
                onClick={closeModalHandler}
              />
            </div>
            <div className={`w-full ${contentContainerClasses}`}>
              {children}
            </div>
          </motion.div>
        )}
      </Backdrop>
    </Portal>
  );
};

export default Modal;
