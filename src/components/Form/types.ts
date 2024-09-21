import * as yup from "yup";
import { schema } from "../../helpers/validation";

export interface NewUser {
  fullName: string;
  email: string;
  birthDate: Date | null;
  source: string;
}

export interface AddUserProps {
  id: string;
  newUser: NewUser;
}

export type FormData = yup.InferType<typeof schema>;

export type Name = "fullName" | "email";
