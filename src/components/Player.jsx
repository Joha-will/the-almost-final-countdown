import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("")
  const [submittedName, setSubmittedName] = useState(false)

  function handleNameChange(e) {
    setSubmittedName(false)
    setPlayerName(e.target.value)
  }

  function handleClick() {
    setSubmittedName(true)
  }

  return (
    <section id="player">
      <h2>Welcome {submittedName ? playerName : "Unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleNameChange} value={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
