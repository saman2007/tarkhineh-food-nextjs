import Button from "@/Button/Button";
import Link from "@/Link/Link";
import { ButtonProps, CustomLinkProps } from "@/global/interfaces/interfaces";

interface Props extends ButtonProps, CustomLinkProps {}

const LinkButton = ({
  children,
  variant,
  radiusVariant,
  fontVariant,
  colorVariant,
  height,
  width,
  ...props
}: Props) => {
  return (
    <Link {...props}>
      <Button
        variant={variant}
        radiusVariant={radiusVariant}
        fontVariant={fontVariant}
        colorVariant={colorVariant}
        height={height}
        width={width}
      >
        {children}
      </Button>
    </Link>
  );
};

export default LinkButton;
