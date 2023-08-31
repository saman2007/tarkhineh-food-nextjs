import { AnimatePresence, motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface Props {
  /** Children of Backdrop component */
  children?: React.ReactNode;
  /** An onClick handler for backdrop */
  onClick?: MouseEventHandler<HTMLDivElement>;
  /** Is backdrop open? */
  isOpen: boolean;
  /** Extra classes for backdrop component */
  className?: string;
}

/**
 * Backdrop Component To Display Black Layout behind elements
 */
const Backdrop = ({ children, onClick, isOpen, className = "" }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ background: "#00000099", opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClick}
          className={`fixed right-0 left-0 z-[15] transform-gpu bg-[#00000099] top-0 bottom-0 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Backdrop;
