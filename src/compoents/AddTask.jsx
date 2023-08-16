import React, { useRef, useState, useSyncExternalStore } from "react";

import { messageActions } from "../store";
import api from "../../api";
import axios from "axios";
import { useNavigate } from "react-router";
import { Button, CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const AddTask = () => {
  const titleRef = useRef();
  const descRef = useRef();
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const addTask = async () => {
    //login to add task
    try {
      const response = await api.post(
        "/addTask",
        {
          title: titleRef.current.value,
          description: descRef.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      dispatch(messageActions.setMessage({ message: response.data.status }));
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          console.log(error.response.data);
        } else {
          console.log(error.response);
        }
      }
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <div className="flex justify-between items-center">
          <label>task title</label>
          <input
            ref={titleRef}
            className="textfield"
            type="text"
            placeholder="titel"
          ></input>
        </div>
        <div className="flex justify-between items-center">
          <label>description</label>
          <input
            ref={descRef}
            className="textfield"
            type="text"
            placeholder="description"
          ></input>
        </div>
        <button
          onClick={() => {
            addTask();
          }}
          className="btn "
        >
          add Task
          {/* {progress ? <CircularProgress /> : "login"} */}
        </button>
        <div className="text-green-500 font-bold my-6">
          {" "}
          {message.message ?? message.message}
        </div>
      </div>
    </div>
  );
};

export default AddTask;
