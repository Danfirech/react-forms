import React from "react";

function Form() {
  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="First Name...."
          ></input>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name...."
          ></input>
          <input type="text" name="email" placeholder="Email...."></input>
          <input type="text" name="age" placeholder="Age...."></input>
          <input type="text" name="passwprd" placeholder="Password...."></input>
        </form>
      </div>
    </div>
  );
}
