import React from "react";
import shuffle from "lodash.shuffle";
import { ALL_CHARACTERS } from "../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import Loading from "../Components/Loading";
import Error from "../Components/Error";

//const maxCharacters = 20;

const BuildDeck = ()=> {
  const { data, loading, error } = useQuery(ALL_CHARACTERS);

  if (loading) {
    return (
      <Loading />
    );
  } else if (error) {
    return (
      <Error />
    );
  } else if (data) {
    const characters = data.characters.results
    let cards = []
    characters.slice(0, -14).forEach((character)=>{
      const card = {
        id: character.id,
        image: character.image,
        wasGuessed: false
      }
      cards.push(card)
      cards.push({ ...card })
    })
    return shuffle(cards);
  }
}

export default BuildDeck;