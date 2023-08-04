import { configureStore } from "@reduxjs/toolkit";

const reducerFn = (state = { counter: 0 }, action) => {
  ////there are two limations to this funcion okay:
  //its only syncrounous : it can't be async
  //we should not mutate the original state : if we do so the app crashes : so
  //instead we use the copy and mutate it

  if (action.type === "increment") {
    //write a logic to update the state
    return { counter: ++state.counter };
  }

  if (action.type === "decrement") {
    return { counter: --state.counter };
  }
  return state;
};

const store = configureStore({
  reducer: reducerFn,
});

export default store;
