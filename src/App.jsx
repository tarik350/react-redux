import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";
import Form from "./compoents/Form";

const App = () => {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  // const counter = useSelector((state) => state.counter);
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
      <div className="flex flex-col items-center border-2 px-80 py-20">
        <h1 className="text-black text-4xl">email and name</h1>
        <div className="p-12 m-4 w-full flex-col border-2 border-black  flex justify-center items-center">
          <div className="flex items-center">
            <p>name: </p>
            <h2 className="ml-2 font-bold text-xl ">{name}</h2>
          </div>{" "}
          <div className="flex items-center">
            <p>email: </p>
            <h2 className="ml-2 font-bold text-xl ">{email}</h2>
          </div>
        </div>

        <Form />
        {/* <div className="btn-container ">
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
        </div> */}
      </div>
    </div>
  );
};

export default App;
