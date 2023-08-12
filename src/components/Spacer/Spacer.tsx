interface Props {
  /** height of Spacer in px */
  height: number;
}

/** a spacer component is used as a block element with a specific height to compensate for the height of elements with a fixed position */
const Spacer = ({ height }: Props) => {
  return <div style={{ height: height + "px" }}></div>;
};

export default Spacer;
