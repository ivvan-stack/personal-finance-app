import React, { Component } from "react";

class How extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="re-central content">
                <h1>Desarrollo del juego</h1>
                <div>
                    <p>El juego comienza revolviendo las cartas y repartiéndolas con la figura hacia abajo al azar de tal modo que no sea posible ver la imagen que se encuentra en ellas.</p>
                    <p>Un jugador escoge dos cartas, si las dos que escogió son iguales, se las queda consigo y tiene derecho a escoger otras dos; si las dos cartas que escogió son diferentes las coloca otra vez boca abajo en el mismo lugar y procura recordar cuales cartas eran, cediendo el turno a otro jugador.</p>
                    <p>El siguiente jugador selecciona otra dos cartas, con la ventaja de que si puso atención a las dos figuras anteriores que le salieron a su compañero, selecciona primero una carta al azar y si se da cuenta de que la carta que seleccionó trae la misma figura que una de las cartas que su compañero había puesto anteriormente hacia abajo la escoge de tal modo que ya tiene un par, en caso contrario vuelve a dejar las cartas hacia abajo.</p>
                    <p>Gana el jugador que consiga más pares de cartas. Este juego se puede jugar con dos o más participantes.</p>
                    <p>El memorama es un juego de encontrar pares de cartas con la misma figura. Debes encontrar dos cartas que sean iguales. Todas las cartas están boca abajo y puedes voltear dos, si logras formar un par entonces sigues tirando si no acaba tu turno, varias personas pueden jugar y entre más, es más divertido Los juegos se llaman Memorama porque son juegos de memoria. Son juegos en dónde debes de recordar las imágenes y el lugar en el que estaban. Entre mejor seas recordando el juego te parecerá más fácil. Cuando compites contra otros debes de memorizar más para ganarles.</p>
                    <p>Es posible que puedas descubrir las cartas al azar pero es difícil, muchos también optan por esa opción pero siempre les ganan los que se aprenden el lugar de las cartas. Si te preguntas por qué es tan difícil el memorama la respuesta es sencilla, entre más cartas haya más imágenes y lugares para recordar hay en el juego, así, entre un mayor número de cartas más difícil se hace.</p>
                </div>

            </div>
        )
    }
}

export default How;