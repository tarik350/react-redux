import React from "react";
import { Routes, Route } from "react-router";
import Task from "./compoents/Task";
import Home from "./compoents/Home";
import Form from "./compoents/Login";
import TaskList from "./compoents/TaskList";
import MyTaskList from "./compoents/MyTaskList";
import Middleware from "./compoents/Middleware";
import AddTask from "./compoents/AddTask";
const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/Task" element={<Task />} />
      <Route path="/allTasks" element={<TaskList />} />
      <Route path="/myTasks" element={<MyTaskList />} />
      <Route path="/addTask" element={<AddTask />} />
      <Route path="/middleware" element={<Middleware />} />
    </Routes>
  );
};

export default App;
