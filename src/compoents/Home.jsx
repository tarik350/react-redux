import { useEffect, useInsertionEffect, useState } from "react";

import "../app.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store";
import Form from "./Login";
import axios from "axios";
import api from "../../api";
import { data } from "autoprefixer";
import { CircularProgress } from "@mui/material";

const Home = () => {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);

  const [tasks, setTasks] = useState([]);
  // const counter = useSelector((state) => state.counter);

  //   const getAllTasks = async () => {
  //     try {
  //       console.log("trying");
  //       const response = await api.get("/getAllTasks", {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       // console.log(response.data.data);
  //       setTasks(response.data.data);
  //     } catch (error) {
  //       // Handle error or redirect to login
  //       console.log(error.message);
  //     }
  //   };
  //   useEffect(() => {
  //     getAllTasks();
  //   }, []);

  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };

  const addByTen = () => {
    dispatch(actions.addBy(10));
  };

  const reduceTen = () => {
    dispatch(actions.reduceBy(10));
  };
  return (
    <div className="flex flex-col justify-center items-center  h-screen border-2  rounded-xl ">
      <Form />
    </div>
  );
};

export default Home;
