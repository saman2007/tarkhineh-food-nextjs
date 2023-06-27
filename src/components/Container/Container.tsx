interface Props {
  variant: keyof typeof variants;
  children: React.ReactNode;
  className?: string;
}

const variants = {
  lg: "max-w-[1224px]",
};

const Container = ({ variant, children, className }: Props) => {
  return (
    <div className={`${variants[variant]} ${className} m-auto`}>{children}</div>
  );
};

export default Container;
