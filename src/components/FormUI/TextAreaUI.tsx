import { TextAreaUIProps } from "@/global/interfaces/interfaces";

const TextAreaUI = ({
  placeholder = "چیزی بنویسید...",
  className = "",
  resize = "none",
  style,
  height = "auto",
  width = "auto",
  ...props
}: TextAreaUIProps) => {
  return (
    <textarea
      className={`p-16 outline-none bg-transparent rounded-8 border-gray-7 font-body-sm border-2 border-solid text-gray-1 placeholder:text-gray-1 ${className}`}
      placeholder={placeholder}
      style={{
        resize: resize,
        height: typeof height === "number" ? height + "px" : height,
        width: typeof width === "number" ? width + "px" : width,
      }}
      {...props}
    ></textarea>
  );
};

export default TextAreaUI;
