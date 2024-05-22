import * as yup from "yup";
import { parse, isDate } from "date-fns";

const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const today = new Date();

const parseDateString = (value, originalValue) => {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());
  return parsedDate;
};

export const registerSchema = yup.object().shape({
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
    .transform(parseDateString)
    .max(today, "Birthday must be in the past")
    .typeError("Invalid date format")
    .required("Field is required"),
  payment: yup
    .string()
    .required("Payment method is required")
    .oneOf(["cash", "bank"], "Invalid payment method"),
});
