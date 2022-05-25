import AllCharacters from "./AllCharacters";
import Player1 from "./Player1";
import Player2 from "./Player2";
import OneVsOneMenu from "./OneVsOneMenu";
import React, { useState } from "react";

export default function OneVsOnePage() {
  const [selectedFormP1, setSelectedFormP1] = useState("");
  const [selectedFormP2, setSelectedFormP2] = useState("");

  const [character1FullImg, setCharacter1FullImg] = useState("");
  const [character2FullImg, setCharacter2FullImg] = useState("");

  var path = "../images/background.png";

  return (
    <div className="h-screen flex">
      <img
        src={path}
        alt="background"
        className="absolute w-full h-screen object-cover"
      />
      <Player1
        selectedFormP1={selectedFormP1}
        setSelectedFormP1={setSelectedFormP1}
        character1FullImg={character1FullImg}
        setCharacter1FullImg={setCharacter1FullImg}
      />
      <Player2
        selectedFormP2={selectedFormP2}
        setSelectedFormP2={setSelectedFormP2}
        character2FullImg={character2FullImg}
        setCharacter2FullImg={setCharacter2FullImg}
      />
      <AllCharacters
        selectedFormP1={selectedFormP1}
        setSelectedFormP1={setSelectedFormP1}
        selectedFormP2={selectedFormP2}
        setSelectedFormP2={setSelectedFormP2}
        character1FullImg={character1FullImg}
        setCharacter1FullImg={setCharacter1FullImg}
        character2FullImg={character2FullImg}
        setCharacter2FullImg={setCharacter2FullImg}
      />
      <OneVsOneMenu />
    </div>
  );
}
