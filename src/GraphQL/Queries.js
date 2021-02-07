import {gql} from '@apollo/client'

export const LOAD_USERS = gql`
    query {
        getAllTerms {
            id
            firstName
            email
            password
        }
    }
`

export const ALL_CHARACTERS = gql`
  query GetSearch {
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
`