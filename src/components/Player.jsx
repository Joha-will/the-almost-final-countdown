import { useState, useRef } from "react";

export default function Player() {
  const playerNameInput = useRef()
  const [playerName, setPlayerName] = useState("")


  function handleClick() {
    setSubmittedName(playerNameInput.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {submittedName ? playerName : "Unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
