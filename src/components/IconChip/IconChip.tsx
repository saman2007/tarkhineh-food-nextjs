import { SVG } from "@/global/types/types";

interface Props {
  /** a SVG react element */
  children: React.ReactElement<SVG>;
}

/** an icon chip component */
const IconChip = ({ children }: Props) => {
  return (
    <div className="bg-tint-1 cursor-pointer hover:bg-tint-2 transition duration-200 p-8 rounded-4 w-fit">
      {children}
    </div>
  );
};

export default IconChip;
