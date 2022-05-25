import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CHARACTERS } from "./characters-const";

export default function Player1(props) {
  console.log("%cPlayer2 rerender", "color: yellow");
  const player2state = useSelector((state) => state.player2state.value);
  const player2isClickable = useSelector(
    (state) => state.appState.value.player2isClickable
  );

  const characterIndex = player2state.player2characterIndex;

  useEffect(() => {
    var player2div = document.getElementById("player2component");
    if (player2isClickable) {
      player2div.className = "player2forms";
    } else {
      player2div.className = "pointer-events-none";
    }
  });

  const changeBorderColor = (correctFormIndex, setSelectedForm) => {
    setSelectedForm(correctFormIndex);
    document.getElementById(
      "player2Title"
    ).innerHTML = `${CHARACTERS[characterIndex].forms[correctFormIndex].name}`;
  };

  return (
    <div id="player2component" className="player2forms">
      {characterIndex !== "" && (
        <div>
          <h1 id="player2Title" className="character-name right-4 text-right">
            {`${CHARACTERS[characterIndex].name}`}
          </h1>
          <img
            src={`${
              props.character2FullImg === ""
                ? CHARACTERS[characterIndex].forms[0].fullImg
                : props.character2FullImg
            }`}
            alt="full img"
            className="absolute h-4/5 right-[1%]"
          ></img>
          <div className="forms-bar right-[4%] flex flex-row-reverse">
            {CHARACTERS[characterIndex].forms.map((form, index) => {
              return (
                <img
                  className={`${
                    props.selectedFormP2 === index
                      ? "border-green-player2forms"
                      : "border-orange"
                  }`}
                  src={form.portraitImg}
                  alt="img"
                  key={form.name}
                  id={characterIndex}
                  onClick={() => {
                    changeBorderColor(index, props.setSelectedFormP2);
                    props.setCharacter2FullImg(form.fullImg);
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
