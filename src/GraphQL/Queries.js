import { gql } from "@apollo/client";

export const ALL_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
        status
        gender
        episode {
          episode
        }
        species
      }
    }
  }
`;