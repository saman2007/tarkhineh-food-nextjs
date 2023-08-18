import classNames from "classnames";

interface Props {
  /** the elements you want to display in different breakpoints */
  children: React.ReactNode;
  /** display children in sizes less than sm (359px and below) */
  sm?: boolean;
  /** display children in sizes between sm and sd (between 360px and 455px) */
  sd?: boolean;
  /** display children in sizes between sd and md (between 456px and 1023px) */
  md?: boolean;
  /** display children in sizes between md and lg (between 1024px and 1439px) */
  lg?: boolean;
  /** display children in sizes more than lg (1440px and more) */
  fullLg?: boolean;
  /** other classes for container(div) of children */
  className?: string;
}

/**
 * a component to display its children in responsive sizes
 */
const Responsive = ({ children, sm, sd, md, lg, fullLg, className }: Props) => {
  const classes = classNames(
    "hidden",
    {
      "max-sm:block": sm,
      "sm:max-sd:block": sd,
      "sd:max-md:block": md,
      "md:max-lg:block": lg,
      "lg:block": fullLg,
    },
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Responsive;
