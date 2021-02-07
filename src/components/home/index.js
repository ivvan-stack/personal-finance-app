import React from 'react'
import { useQuery } from "@apollo/client"
import { ALL_CHARACTERS } from "../../GraphQL/Queries"

export const Home = () => {
  const { data, loading, error } = useQuery(ALL_CHARACTERS);
  if (loading) {
    return (
      <progress className="progress is-large is-info" max={100}>
        60%
      </progress>
    )
  } else if (error) {
    return (
      <article className="message is-danger">
        <div className="message-header">
          <p>Danger</p>
          <button className="delete" aria-label="delete" />
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </div>
      </article>
    )
  } else if (data) {
    const characters = data.characters.results;
    console.log(characters)
    return (
      <div className="Home">
        <div className="grid">
          {characters.map((character, index)=>(
            <div className="col-3_md-6_sm-12" key={character.id}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={character.image} alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src={character.image} alt="Placeholder image" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{character.name}</p>
                      <p className="subtitle is-6">{character.gender}</p>
                    </div>
                  </div>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Home;
