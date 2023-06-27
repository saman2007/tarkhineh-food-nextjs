import NextLink, { LinkProps } from "next/link";

interface Props
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {}

const Link = ({ prefetch = false, children, ...props }: Props) => {
  return (
    <NextLink prefetch={prefetch} {...props}>
      {children}
    </NextLink>
  );
};

export default Link;
