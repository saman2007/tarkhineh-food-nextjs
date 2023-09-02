import { SVG } from "@/global/types/types";

interface Props {
  /** A SVG react element */
  children: React.ReactElement<SVG>;
  /** onClick event handler */
  onClick?: () => void;
}

/** An Icon Chip Component */
const IconChip = ({ children, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="bg-tint-1 cursor-pointer hover:bg-tint-2 transition duration-200 p-8 rounded-4 w-fit"
    >
      {children}
    </div>
  );
};

export default IconChip;
