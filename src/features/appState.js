import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  player1Turn: true,
  player1isClickable: true,
  player2isClickable: false,
};

export const appSlice = createSlice({
  name: "appState",
  initialState: { value: initialState },
  reducers: {
    changePlayerTurn: (state) => {
      state.value.player1Turn = !state.value.player1Turn;
      state.value.player1isClickable = !state.value.player1isClickable;
      state.value.player2isClickable = !state.value.player2isClickable;
    },
  },
});

export const { changePlayerTurn } = appSlice.actions;

export default appSlice.reducer;
