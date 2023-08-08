import { CustomLinkProps } from "@/global/interfaces/interfaces";
import NextLink from "next/link";

const Link = ({ prefetch = false, children, ...props }: CustomLinkProps) => {
  return (
    <NextLink prefetch={prefetch} {...props}>
      {children}
    </NextLink>
  );
};

export default Link;
