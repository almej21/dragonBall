import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  player1characterIndex: "",
  player1characterForms: [],
  player1isClickable: true,
};

export const player1Slice = createSlice({
  //the name of the slice/state.
  name: "player1state",

  //the initial state object.
  initialState: { value: initialState },

  //the reducers functions.
  reducers: {
    SetPlayer1: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { SetPlayer1 } = player1Slice.actions;

export default player1Slice.reducer;
