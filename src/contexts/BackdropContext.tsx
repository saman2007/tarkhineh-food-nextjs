"use client";

import React, {
  Dispatch,
  SetStateAction,
  useState,
  createContext,
} from "react";

type BackdropStateType = {
  /** Is the backdrop open or not? */
  isOpen: boolean;
  /** If there are some classes that you want to add to backdrop, add them here */
  className?: string;
};

interface BackdropContextType {
  /** isBackdropOpen is state that the context use to display backdrop */
  isBackdropOpen: BackdropStateType;
  /** setState for isBackdropOpen state */
  setIsBackdropOpen: Dispatch<SetStateAction<BackdropStateType>>;
}

interface Props {
  children: React.ReactNode;
}

const backdropContext = createContext<BackdropContextType>({
  isBackdropOpen: { isOpen: false },
  setIsBackdropOpen: (value: SetStateAction<BackdropStateType>) => {},
});

/** A Backdrop Provider To Add Backdrop Easily From Anywhere */
const BackdropContext = ({ children }: Props) => {
  const [isBackdropOpen, setIsBackdropOpen] = useState<BackdropStateType>({
    isOpen: false,
  });

  const contextValue: BackdropContextType = {
    isBackdropOpen,
    setIsBackdropOpen,
  };

  return (
    <backdropContext.Provider value={contextValue}>
      <div
        className={`fixed right-0 left-0 z-[15] transition bg-[#00000099] duration-200 backdrop-blur-[3px] top-0 bottom-0 ${
          isBackdropOpen.isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } ${isBackdropOpen.className}`}
        style={{ transform: "translate3d(0, 0, 0)" }}
      ></div>
      {children}
    </backdropContext.Provider>
  );
};

export { backdropContext };
export default BackdropContext;
