export type BorderVariants = "error" | "success" | "normal";

export const variants = {
  primary: {
    border: {
      normal: "border-gray-7 border-2 border-solid",
      error: "border-error border-2 border-solid",
      success: "border-success border-2 border-solid",
    },
    inputClasses:
      "bg-transparent rounded-8 font-body-sm text-gray-1",
    padding: "py-12 px-16",
    errorTextClasses: "text-error-extra-light",
  },
  secondary: {
    border: {
      normal: "border-gray-4 border border-solid ",
      error: "border-error border border-solid",
      success: "border-success border border-solid",
    },
    inputClasses:
      "bg-transparent rounded-8 font-body-sm text-gray-8",
    padding: "py-8 px-16",
    errorTextClasses: "text-error",
  },
};
