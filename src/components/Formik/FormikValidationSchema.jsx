import * as yup from "yup";

export const FormikValidationSchema = yup.object().shape({
  email: yup.string().email("ınvalid Email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Must be more than 8 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have a uppercase")
    .matches(/[!?.*@$#%&^()-+]+/, "Password must have a special character"),
  passwordConfirm: yup
    .string()
    .required("Password is required")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});
