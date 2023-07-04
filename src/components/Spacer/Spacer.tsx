interface Props {
  height: number;
  children?: React.ReactNode;
}

const Spacer = ({ children, height }: Props) => {
  return <div style={{ height: height + "px" }}>{children}</div>;
};

export default Spacer;
