import shuffle from "lodash.shuffle";
import { ALL_CHARACTERS } from "../GraphQL/Queries";
import { useQuery } from "@apollo/client";

const BuildDeck = ()=> {
  const { data, loading, error } = useQuery(ALL_CHARACTERS);

  if (loading) {
    return 'loading'
  } else if (error) {
    return 'error'
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