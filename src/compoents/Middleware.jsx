import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { messageActions } from "../store";
import { useDispatch } from "react-redux";

const Middleware = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(messageActions.setMessage({ message: null }));
  }, []);
  return (
    <div className=" border-2 px-80 py-20">
      <div className="w-full border-2 p-12">
        <div className=" flex justify-between w-full">
          <h1 className="text-black text-4xl uppercase font-bold">
            The mock app
          </h1>
          <Link
            to="/addTask"
            className="text-white rounded-xl px-12 py-[10px] bg-black text-2xl"
          >
            addTask
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center my-[100px]">
          <Link
            to="/alltasks"
            className="my-12 hover:scale-105 duration-500 transition-all ease-in-out text-white rounded-xl px-12 py-[20px] bg-black text-2xl"
          >
            show all tasks
          </Link>
          <Link
            to="/myTasks"
            className="text-black rounded-xl border-black border-4 px-12 py-[20px] hover:scale-105 duration-500 transition-all ease-in-out text-2xl"
          >
            show my tasks
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Middleware;
