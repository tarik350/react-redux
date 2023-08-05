import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment: (state, action) => {
      state.counter++;
    },
    decrement: (state, action) => {
      state.counter--;
    },
    addBy: (state, action) => {
      //the way you write this statemant does not matter either it is
      //wiht compound operator or thorugh single assingment ooperator

      state.counter = state.counter + action.payload;
    },
    reduceBy: (state, action) => {
      state.counter -= action.payload;
    },
  },
});

export const actions = counterSlice.actions;
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
