import yup from "./yup";

export const submitUserMessageSchema = yup.object().shape({
  fullname: yup.string().required(),
  phoneNumber: yup.string().required(),
  email: yup.string().email().notRequired(),
  message: yup.string().min(30).required(),
});

export const searchValidation = yup.object().shape({
  searchText: yup.string().required(),
});
