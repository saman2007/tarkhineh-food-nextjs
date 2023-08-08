import { sizes } from "@/data/variants/Container";

interface Props {
  /** maximum size of container */
  size: keyof typeof sizes;
  /** any element you want to display inside container */
  children: React.ReactNode;
  /** extra classes you want to add to container */
  className?: string;
}

/** a component to be the container of elements to prevent the width from becoming too large */
const Container = ({ size, children, className = "" }: Props) => {
  return <div className={`${sizes[size]} ${className} m-auto`}>{children}</div>;
};

export default Container;
