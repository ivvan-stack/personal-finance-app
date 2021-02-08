import React from "react";
import BuildDeck from "../../Utils/BuildDeck";
import Board from "../Board";

const Home = ()=> {
  const cards = BuildDeck();
  return (
    <Board cards={cards} />
  )
}

export default Home;