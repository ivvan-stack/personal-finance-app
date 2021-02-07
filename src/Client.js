import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://rick-and-morty-graphql.p.rapidapi.com/',
    headers: {
        "content-type": "application/json",
        "x-rapidapi-key": "703cf35a7dmshc982c4c821e6777p1ff3b0jsn1ee918a350d4",
        "x-rapidapi-host": "rick-and-morty-graphql.p.rapidapi.com",
        "useQueryString": true
    },
    cache: new InMemoryCache()
})