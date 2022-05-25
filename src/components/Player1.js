import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CHARACTERS } from "./characters-const";

export default function Player1(props) {
  console.log("%cPlayer1 rerender", "color: green");
  const player1state = useSelector((state) => state.player1state.value);
  const player1isClickable = useSelector(
    (state) => state.appState.value.player1isClickable
  );

  const characterIndex = player1state.player1characterIndex;

  useEffect(() => {
    var player1div = document.getElementById("player1component");
    if (player1isClickable) {
      player1div.className = "player1forms w-1/2";
    } else {
      player1div.className = "pointer-events-none";
    }
  });

  const changeBorderColor = (correctFormIndex, setSelectedForm) => {
    setSelectedForm(correctFormIndex);
    document.getElementById(
      "player1Title"
    ).innerHTML = `${CHARACTERS[characterIndex].forms[correctFormIndex].name}`;
  };

  return (
    <div id="player1component" className="player1forms">
      {characterIndex !== "" && (
        <div>
          <h1
            id="player1Title"
            className="character-name name-font text-left"
          >
            {`${CHARACTERS[characterIndex].name}`}
          </h1>
          <img
            src={`${
              props.character1FullImg === ""
                ? CHARACTERS[characterIndex].forms[0].fullImg
                : props.character1FullImg
            }`}
            alt="full img"
            className="absolute h-4/5"
          ></img>
          <div className="forms-bar left-[4%] flex">
            {CHARACTERS[characterIndex].forms.map((form, index) => {
              return (
                <img
                  className={`${
                    props.selectedFormP1 === index
                      ? "border-green-player1forms"
                      : "border-orange"
                  }`}
                  src={form.portraitImg}
                  alt="img"
                  key={form.name}
                  id={characterIndex}
                  onClick={() => {
                    changeBorderColor(index, props.setSelectedFormP1);
                    props.setCharacter1FullImg(form.fullImg);
                  }}
                ></img>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
