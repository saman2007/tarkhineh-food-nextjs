import { usePathname } from "next/navigation";

const useMatchedUrl = (url: string): boolean => {
  const pathname = usePathname();

  return pathname === url;
};

export default useMatchedUrl;
