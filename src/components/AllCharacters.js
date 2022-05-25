import React, { useState } from "react";
import { CHARACTERS } from "./characters-const";
import { useDispatch } from "react-redux";
import { SetPlayer1 } from "../features/player1state";
import { SetPlayer2 } from "../features/player2state";
import { useSelector } from "react-redux";

export default function AllCharacters(props) {
  console.log("%cAllCharacters rerender", "color:pink");
  const appState = useSelector((state) => state.appState.value);

  const [selectedCharacter, setSelectedCharacter] = useState("");

  const dispatch = useDispatch();

  const characterSelect = (index) => {
    if (appState.player1Turn) {
      props.setSelectedFormP1(0);
      dispatch(
        SetPlayer1({
          player1characterIndex: index,
          player1characterForms: [],
          player1isClickable: true,
        })
      );
      props.setCharacter1FullImg("");
    } else {
      props.setSelectedFormP2(0);
      dispatch(
        SetPlayer2({
          player2characterIndex: index,
          player2characterForms: [],
          player2isClickable: true,
        })
      );
      props.setCharacter2FullImg("");
    }
  };

  const changeBorderColor = (index) => {
    setSelectedCharacter(index);
  };

  return (
    <div className="mx-auto w-2/3 flex flex-wrap fixed bottom-[4%] left-0 right-0">
      {CHARACTERS.map((character, index) => {
        return (
          <img
            className={`${
              index === selectedCharacter
                ? "border-green-all-characters"
                : "border-orange"
            }`}
            src={character.baseFormImg}
            alt="img"
            key={character.name}
            id={character.name}
            onClick={() => {
              changeBorderColor(index);
              characterSelect(index);
            }}
          ></img>
        );
      })}
    </div>
  );
}
