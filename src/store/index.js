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

const nameSlice = createSlice({
  name: "name",
  initialState: { name: "example", email: "example@gmail.com" },
  reducers: {
    setNameAndEmail: (state, actions) => {
      state.name = actions.payload.name;
      state.email = actions.payload.email;
    },
  },
});

export const actions = nameSlice.actions;
const store = configureStore({
  reducer: nameSlice.reducer,
});

export default store;
