import Button from "@/components/Button/Button";
import Link from "@/Link/Link";
import { ButtonProps, CustomLinkProps } from "@/global/interfaces/interfaces";
import { VariantsType } from "@/data/variants/Button";

interface Props<T extends VariantsType>
  extends ButtonProps<T>,
    CustomLinkProps {}

function LinkButton<T extends VariantsType>(props: Props<T>): JSX.Element;

function LinkButton({
  children,
  variant,
  radiusVariant,
  fontVariant,
  colorVariant,
  height,
  width,
  ...props
}: Props<VariantsType>) {
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
}

export default LinkButton;
