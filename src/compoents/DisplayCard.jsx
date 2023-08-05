import React from "react";
import { useSelector } from "react-redux";

const DisplayCard = () => {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);

  return <div className="border-2 w-[500px] h-[300px] rounded-xl ">{name}</div>;
};

export default DisplayCard;
