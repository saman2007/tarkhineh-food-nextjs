import { usePathname } from "next/navigation";

/**
 * a hook to specify that the given url is match with the current url or not
 * @param url It is the url that if it is equal to the current url, `useIsUrlMatch` returns true and else false
 */
const useIsUrlMatch = (url?: string): boolean => {
  const pathname = usePathname();

  return pathname === url;
};

export default useIsUrlMatch;
