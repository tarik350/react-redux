import React, { useEffect, useRef, useState } from "react";
import { CircularProgress } from "@mui/material";
import api from "../../api";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { messageActions } from "../store";

const TaskList = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);
  const mounted = useRef(false);

  const getAllTasks = async () => {
    try {
      const response = await api.get("/getAllTasks", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("lsdkjflsdj");
      // console.log(response.data.data);
      if (response.data) {
        // tasks = response.data.data;
        setTasks(response.data.data);
        console.log(tasks);
      }
      //   console.log(response.data);

      //   setTasks(response.data.data);
    } catch (error) {
      // Handle error or redirect to login
      //   console.log(error.response.data.message);
      if (error.response) {
        if (error.response.data) {
          dispatch(
            messageActions.setMessage({ message: error.response.data.message })
          );
        }
      }
    }
  };
  useEffect(() => {
    getAllTasks();
  }, []);

  const logout = () => {
    localStorage.clear();
    dispatch(messageActions.setMessage({ message: null }));
    navigate("/");
  };
  return (
    <div>
      <div className="flex flex-col items-center border-2 px-80 py-20">
        <div className="flex justify-between w-full">
          <h1 className="text-black text-4xl uppercase font-bold">
            The mock app
          </h1>
          <button
            onClick={() => {
              logout();
            }}
            className="text-white rounded-xl px-12 py-[10px] bg-black text-2xl"
          >
            logout
          </button>
        </div>
        <div className="p-12 m-4 w-full flex-col border-2 border-black  flex justify-center items-center">
          {/* <div className="flex items-center">
            <p>name: </p>
            <h2 className="ml-2 font-bold text-xl ">{name}</h2>
          </div>{" "}
          <div className="flex items-center">
            <p>email: </p>
            <h2 className="ml-2 font-bold text-xl ">{email}</h2>
          </div> */}
          <div>
            {localStorage.getItem("token") !== null ? (
              tasks ?? tasks.length !== 0 ? (
                <div>
                  {tasks.map((task) => {
                    return (
                      <div className="border-2 my-2 px-12 py-2">
                        <p>{task.title}</p>
                        <p>{task.description}</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                // <CircularProgressbar></CircularProgressbar>
                <CircularProgress />
              )
            ) : (
              <div>login first</div>
            )}
          </div>
          <p>{message.message ?? message.message}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
