import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { addUser } from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../helpers/validation";

const RegisterForm = () => {
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
    addUser({ id, newUser });
    console.log(newUser);
    reset();
  };

  return (
    <div>
      RegisterForm
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fullName">
          Full Name
          <input
            type="text"
            {...register("fullName")}
            //   errors={errors.fullName}
          />
          <p>{errors.fullName?.message}</p>
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            {...register("email")}
            //   errors={errors.email}
          />
          <p>{errors.email?.message}</p>
        </label>
        <label htmlFor="birthDate">
          Date of birth
          <input
            type="date"
            {...register("birthDate")}
            //   errors={errors.birthDate}
          />
          <p>{errors.birthDate?.message}</p>
          <div>
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
          </div>
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
