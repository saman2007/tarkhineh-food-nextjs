import { useEffect, useState } from "react";

/** A hook to specify that a component is mounted on the DOM or not */
const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};

export default useIsMounted;
