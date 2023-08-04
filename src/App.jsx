import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const addByTen = () => {
    dispatch({ type: "addTen" });
  };

  const reduceTen = () => {
    dispatch({ type: "reduceTen" });
  };
  return (
    <div className="flex flex-col justify-center items-center  h-screen border-2  rounded-xl ">
      <div className="flex flex-col items-center border-2 px-80 py-20">
        <h1 className="text-black text-4xl">Counter app</h1>
        <div className="w-20 h-20 m-4 rounded-full border-4 border-black  flex justify-center items-center">
          <h2 className="font-bold text-xl ">{counter}</h2>
        </div>
        <div className="btn-container ">
          <button className="btn " onClick={increment}>
            increment
          </button>
          <button className="btn" onClick={decrement}>
            decrement
          </button>
          <button onClick={addByTen} className="btn">
            {" "}
            add by 10{" "}
          </button>
          <button onClick={reduceTen} className="btn">
            reduceByTen
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
