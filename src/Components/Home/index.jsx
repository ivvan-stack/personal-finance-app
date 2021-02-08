import React, {useState} from "react";
import BuildDeck from "../../Utils/BuildDeck";
import Board from "../Board";

const Home = ()=> {
  const cards = BuildDeck();
  /* const [stateOfCard, pairSelected] = useState(0);
  const thisCompared = false; */

  return (
    <Board cards={cards} />
  )
}

export default Home;