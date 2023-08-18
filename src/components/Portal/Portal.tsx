"use client";

import useIsMounted from "@/hooks/useIsMounted";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  /** elements you want to create portal for */
  children: React.ReactNode;
  /** the id of element that is the portal */
  portalId: string;
}

/** a component to use create portal for your elements easily */
const Portal = ({ children, portalId }: Props) => {
  const isMounted = useIsMounted();

  const el =
    typeof document !== "undefined" && document.getElementById(portalId);

  return <>{isMounted && el ? createPortal(children, el) : ""}</>;
};

export default Portal;
