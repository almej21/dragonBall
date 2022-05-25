import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  player2characterIndex: "",
  player2characterForms: [],
  player2isReady: false,
};

export const player2Slice = createSlice({
  //the name of the slice/state.
  name: "player2state",

  //the initial state object.
  initialState: { value: initialState },

  //the reducers functions.
  reducers: {
    SetPlayer2: (state, action) => {
      // console.log("name of selected character from state before change: ");
      // console.log(state.value.player2characterName);
      // console.log("forms of selected character from state before change: ");
      // console.log(state.value.player2characterForms);
      state.value = action.payload;
      // console.log("name of selected character from state after change: ");
      // console.log(state.value.player2characterName);
      // console.log("forms of selected character from state after change: ");
      // console.log(state.value.player2characterForms);
    },
  },
});

export const { SetPlayer2 } = player2Slice.actions;

export default player2Slice.reducer;
