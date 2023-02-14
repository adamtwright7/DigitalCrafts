import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: "Adam", // Accessable as {state.user.value.name}
    settings: "Strict Mode",
    address: "123 street",
  },
};

// creating a state in the same way a hook would
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUserName: (state) => {
      state.value.name = "adamTwright";
    },
    changeUserSettingsUnstrict: (state) => {
      state.value.settings = "Unstrict Mode";
    },
    changeUserSettingsStrict: (state) => {
      state.value.settings = "Strict Mode";
    },
  },
});

// The actions key contains all functions inside the counterSlice object
// because we define it with object destructuring
export const {
  changeUserName,
  changeUserSettingsStrict,
  changeUserSettingsUnstrict,
} = userSlice.actions;

// .reducer is a built-in key that accesses all reducers.
export default userSlice.reducer;
