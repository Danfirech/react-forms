import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email(),
  age: yup.number().positive().integer(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name...."
            {...register("firstname")}
          />
          <p>{errors.firstName?.message}</p>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name...."
            {...register("lastname")}
          />
          <p>{errors.lastName?.message}</p>
          <input
            type="text"
            name="email"
            placeholder="Email...."
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <input
            type="text"
            name="age"
            placeholder="Age...."
            {...register("age")}
          />
          <input
            type="text"
            name="password"
            placeholder="Password...."
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <input
            type="text"
            name="confirmPassword"
            placeholder="Confirm Password...."
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword && "Passwords should match"}</p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
