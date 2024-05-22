import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { addUser } from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../helpers/validation";
import * as s from "./RegisterForm.styled";
import { useState } from "react";
import Loader from "../Loader/Loader";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (newUser) => {
    try {
      setIsLoading(true);
      addUser({ id, newUser });
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <s.Wrapper>
      <s.Title>Event registration</s.Title>
      <s.Form onSubmit={handleSubmit(onSubmit)}>
        <s.Label htmlFor="fullName">
          Full Name
          <s.Input type="text" {...register("fullName")} />
          <s.Error>{errors.fullName?.message}</s.Error>
        </s.Label>
        <s.Label htmlFor="email">
          Email
          <s.Input type="email" {...register("email")} />
          <s.Error>{errors.email?.message}</s.Error>
        </s.Label>
        <s.Label htmlFor="birthDate">
          Date of birth
          <s.Input type="date" {...register("birthDate")} />
          <s.Error>{errors.birthDate?.message}</s.Error>
          <s.RadioGroup>
            <label htmlFor="radio-source">
              <input
                {...register("source")}
                type="radio"
                value="social"
                id="radio-source"
              />
              Social media
            </label>
            <label htmlFor="radio-source">
              <input
                {...register("source")}
                type="radio"
                value="friends"
                id="radio-source"
              />
              Friends
            </label>
            <label htmlFor="radio-source">
              <input
                {...register("source")}
                type="radio"
                value="myself"
                id="radio-source"
              />
              Found myself
            </label>
          </s.RadioGroup>
        </s.Label>
        <s.SubmitButton type="submit">Register</s.SubmitButton>
      </s.Form>
    </s.Wrapper>
  );
};

export default RegisterForm;
