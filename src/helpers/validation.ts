import * as yup from "yup";

const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const today = new Date();

export const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Field is required")
    .min(3, "Minimum 3 characters")
    .max(64, "Maximum 64 characters"),
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Error email"),
  birthDate: yup
    .date()
    .max(today, "Birthday must be in the past")
    .typeError("Invalid date format")
    .required("Field is required"),
  source: yup
    .string()
    .required("Source is required")
    .oneOf(["social", "friends", "myself"], "Invalid source"),
});
