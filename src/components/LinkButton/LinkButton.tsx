import Button from "@/components/Button/Button";
import Link from "@/components/Link/Link";
import { ButtonProps, CustomLinkProps } from "@/global/interfaces/interfaces";
import { VariantsType } from "@/data/variants/Button";

interface Props<T extends VariantsType>
  extends ButtonProps<T>,
    CustomLinkProps {}

function LinkButton<T extends VariantsType>(props: Props<T>): JSX.Element;

/** a LinkButton component with UI of Button component and Next Link component with different variants */
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
