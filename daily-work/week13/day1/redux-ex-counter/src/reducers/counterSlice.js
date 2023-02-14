import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

// creating a state in the same way a hook would
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// The actions key contains all functions inside the counterSlice object
// because we define it with object destructuring
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

// .reducer is a built-in key that accesses all reducers.
export default counterSlice.reducer;
