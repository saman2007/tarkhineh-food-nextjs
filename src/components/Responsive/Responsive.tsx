import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  sm?: boolean;
  sd?: boolean;
  md?: boolean;
  lg?: boolean;
  fullLg?: boolean;
  className?: string;
}

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
