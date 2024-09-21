import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Loader } from "../Loader";

import { FormData, Name, NewUser } from "./types";
import { addUser } from "../../services/api";
import { schema } from "../../helpers/validation";
import { registration } from "../../data";

export const Form: React.FC = () => {
  const { id } = useParams();
  const [birthDate, setBirthDate] = useState<Date | null>(null);

  const { inputs, date, sources, button } = registration;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    clearErrors,
  } = useForm<FormData>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (birthDate) {
      setValue("birthDate", birthDate);
      clearErrors("birthDate");
    }
  }, [birthDate, setValue, clearErrors]);

  const onSubmit = async (data: NewUser) => {
    try {
      await addUser({ id: id as string, newUser: data });
      reset();
      setBirthDate(null);
    } catch (error) {
      console.error(error);
    }
  };

  return isSubmitting ? (
    <Loader />
  ) : (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto border-2 rounded-3xl border-blue-500 p-5 w-full max-w-md"
      >
        <div>
          {inputs.map((input) => (
            <label
              key={input.id}
              htmlFor={input.id}
              className="flex flex-col mb-5 text-primaryText font-gilroyRegular text-lg relative"
            >
              {input.label}
              <input
                id={input.id}
                type={input.type}
                placeholder={input.placeholder}
                {...register(input.name as Name)}
                autoComplete={input.autoComplete}
                className="border-[1px] rounded-lg px-2 text-primaryText font-gilroyRegular text-lg focus:border-blue-700 outline-none"
              />
              <p className="text-red-600 text-xs absolute left-0 -bottom-4">
                {errors[input.name as keyof FormData]?.message}
              </p>
            </label>
          ))}
        </div>

        <label
          htmlFor={date.htmlFor}
          className="flex flex-col mb-5 text-primaryText font-gilroyRegular text-lg relative"
        >
          Date of birth
          <DatePicker
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
            dateFormat={date.format}
            placeholderText={date.placeholder}
            className="border-[1px] rounded-lg px-2 text-primaryText font-gilroyRegular text-lg focus:border-blue-700 outline-none w-full"
          />
          <p className="text-red-600 text-xs absolute left-0 -bottom-4">
            {errors.birthDate?.message}
          </p>
        </label>

        <div className="flex flex-col sm:flex-wrap sm:flex-row sm:gap-3 relative">
          {sources.map(({ value, label }) => (
            <label
              key={value}
              htmlFor={`radio-source-${value}`}
              className=" text-primaryText font-gilroyRegular text-lg relative"
            >
              <input
                {...register("source")}
                type="radio"
                value={value}
                id={`radio-source-${value}`}
                className="mr-3"
              />
              {label}
            </label>
          ))}
          <p className="text-red-600 font-gilroyRegular text-xs absolute left-0 -bottom-3">
            {errors.source?.message}
          </p>
        </div>

        <button
          type="submit"
          className="flex items-center bg-blue-500 text-white font-gilroyMedium text-base leading-none uppercase px-4 py-2 mt-7 mx-auto rounded-lg hover:bg-blue-800 transition-all duration-300"
        >
          {button}
        </button>
      </form>
    </div>
  );
};
