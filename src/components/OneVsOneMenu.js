/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changePlayerTurn } from "../features/appState";

export default function OneVsOneMenu() {
  console.log("%cMenu rerender", "color:red");
  const player1Turn = useSelector((state) => state.appState.value.player1Turn);
  const dispatch = useDispatch();

  console.log("%cMenu: player1Turn is", "color:red");
  console.log(player1Turn);

  const handleToggle = () => {
    dispatch(changePlayerTurn());
  };

  return (
    <div className="menu flex flex-col m-3 space-y-1 items-center max-w-[10rem] absolute mx-auto top-[54%] left-0 right-0">
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name="toggle"
          id="toggle"
          onClick={() => {
            handleToggle();
          }}
        />

        <label className="label" htmlFor="toggle">
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
      <a href="#" className="myButton m-1 w-full">
        READY
      </a>
      <a href="#" className="myButton m-1 w-full">
        CANCEL
      </a>
    </div>
  );
}
