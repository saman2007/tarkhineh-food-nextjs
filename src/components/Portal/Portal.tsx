"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  portalId: string;
}

const Portal = ({ children, portalId }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const el =
    typeof document !== "undefined" && document.getElementById(portalId);

  return <>{isMounted && el ? createPortal(children, el) : ""}</>;
};

export default Portal;
