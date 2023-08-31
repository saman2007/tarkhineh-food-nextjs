"use client";

import Backdrop from "@/components/Backdrop/Backdrop";
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
  /** onClick handler for when user clicks on backdrop */
  onClick?: () => void;
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
      <Backdrop
        isOpen={isBackdropOpen.isOpen}
        onClick={isBackdropOpen.onClick}
      />
      {children}
    </backdropContext.Provider>
  );
};

export { backdropContext };
export default BackdropContext;
