import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store";
const Form = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const dispatch = useDispatch();
  const displayName = (name, email) => {
    dispatch(actions.setNameAndEmail({ name: name, email: email }));
  };
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center">
        <label>your full name</label>
        <input
          ref={nameRef}
          className="textfield"
          type="text"
          placeholder="full"
        ></input>
      </div>
      <div className="flex justify-between items-center">
        <label>you email</label>
        <input
          ref={emailRef}
          className="textfield"
          type="text"
          placeholder="email"
        ></input>
      </div>
      <button
        onClick={() => {
          displayName(nameRef.current.value, emailRef.current.value);
        }}
        className="btn"
      >
        {" "}
        submit
      </button>
    </div>
  );
};

export default Form;
