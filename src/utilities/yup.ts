import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: () => "پر کردن این فیلد الزامی است.",
  },
  string: {
    email: () => "لطفا ایمیل معتبر وارد کنید.",
    min: ({ min }) => `لطفا حداقل ${min} حرف وارد کنید.`,
  },
});

export default yup;
