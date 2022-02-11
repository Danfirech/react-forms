import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
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
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {};
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name...."
            ref={register}
          />
          <p>{errors.firstName?.message}</p>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name...."
            ref={register}
          />
          <p>{errors.lasName?.message}</p>
          <input
            type="text"
            name="email"
            placeholder="Email...."
            ref={register}
          />
          <p>{errors.email?.message}</p>
          <input type="text" name="age" placeholder="Age...." ref={register} />
          <input
            type="text"
            name="password"
            placeholder="Password...."
            ref={register}
          />
          <p>{errors.password?.message}</p>
          <input
            type="text"
            name="confirmPassword"
            placeholder="Confirm Password...."
            ref={register}
          />
          <p>{errors.confirmPassword?.message}</p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
