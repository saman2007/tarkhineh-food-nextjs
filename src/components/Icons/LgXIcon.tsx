import { SVG } from "@/types/types";
import { FC } from "react";

const LgXIcon: FC<SVG> = ({ fill = "#fff", ...props }) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      width={3.72611}
      height={29.8089}
      rx={1.86305}
      transform="matrix(0.698447 -0.715662 0.698447 0.715662 8.45508 11.6667)"
      fill={fill}
    />
    <rect
      width={3.72611}
      height={29.8089}
      rx={1.86305}
      transform="matrix(0.698447 0.715662 -0.698447 0.715662 28.6973 9.00049)"
      fill={fill}
    />
  </svg>
);
export default LgXIcon;
