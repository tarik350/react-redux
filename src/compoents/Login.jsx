import React, { useRef, useState } from "react";

import { messageActions } from "../store";
import api from "../../api";
import axios from "axios";
import { useNavigate } from "react-router";
import { Button, CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const Form = () => {
  const amessage = useSelector((state) => state.message);
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);
  const [progress, showProgress] = useState(false);

  const displayName = (name, email) => {
    dispatch(actions.setNameAndEmail({ name: name, email: email }));
  };
  const login = async () => {
    // console.log(emailRef.current.value);
    // console.log(passwordRef.current.value);
    try {
      if (emailRef.current.value && passwordRef.current.value) {
        showProgress(true);
        const result = await axios.post(
          `http://localhost:8000/api/login`,
          {
            email: emailRef.current.value,
            password: passwordRef.current.value,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        showProgress(false);
        console.log(result.data);
        localStorage.setItem("token", result.data.token.pin);
        // window.location.reload();
        dispatch(messageActions.setMessage({ message: null }));
        navigate("middleware");
      } else {
        showProgress(false);
        setMessage("plaese provide all fields");
        dispatch(
          messageActions.setMessage({ message: "plaese provide all fields" })
        );
      }
    } catch (error) {
      // error.response.data.forEach((data) => {
      //   console.log(data.message);
      // });
      if (error.response) {
        console.log(error.response.data);
        setMessage(error.response.data.message);
        dispatch(
          messageActions.setMessage({ message: error.response.data.message })
        );

        showProgress(false);
      }
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center">
        <label>your full name</label>
        <input
          ref={emailRef}
          className="textfield"
          type="text"
          placeholder="full"
        ></input>
      </div>
      <div className="flex justify-between items-center">
        <label>you email</label>
        <input
          ref={passwordRef}
          className="textfield"
          type="text"
          placeholder="email"
        ></input>
      </div>
      <button
        onClick={() => {
          login();
        }}
        className="btn"
      >
        {progress ? <CircularProgress /> : "login"}
      </button>
      <div className="text-red-500 font-bold my-6">
        {" "}
        {amessage.message ?? amessage.message}
      </div>
    </div>
  );
};

export default Form;
