import { SVG } from "@/types/types";
import { FC } from "react";

const LoadingIcon: FC<SVG> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: "auto",
        display: "block",
        shapeRendering: "auto",
      }}
      width="24px"
      height="24px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <circle
        cx={50}
        cy={50}
        fill="none"
        stroke="#ffffff"
        strokeWidth={8}
        r={35}
        strokeDasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="2.6315789473684212s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  );
};

export default LoadingIcon;
