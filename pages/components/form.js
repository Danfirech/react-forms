import React from "react";
import { useFrom } from "react-hook-form";
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
  return (
    <div>
      <div>
        <form>
          <input type="text" name="firstName" placeholder="First Name...." />
          <input type="text" name="lastName" placeholder="Last Name...." />
          <input type="text" name="email" placeholder="Email...." />
          <input type="text" name="age" placeholder="Age...." />
          <input type="text" name="password" placeholder="Password...." />
          <input
            type="text"
            name="confirmPassword"
            placeholder="Confirm Password...."
          />
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
