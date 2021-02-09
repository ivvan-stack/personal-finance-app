import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Components
import BuildDeck from "./Utils/BuildDeck";
import Board from "./Components/Board";
import Error from "./Components/Error";
import Header from "./Components/Header";
import Loading from "./Components/Loading";

//Views
import Whats from "./Views/Whats";
import How from "./Views/How";
import Why from "./Views/Why";

const App = () => {
  const cards = BuildDeck();

  if(cards === 'loading') {
    return (
      <Loading />
    )
  } else if(cards === 'error') {
    return (
      <Error />
    )
  } else {
    return (
      <Router>
      <Header/>
      <Switch>
        <Route path="/rick-and-morty" exact>
          <Board cards={cards} />
        </Route>
        <Route path="/whats" exact>
          <Whats />
        </Route>
        <Route path="/how" exact>
          <How />
        </Route>
        <Route path="/why" exact>
          <Why />
        </Route>
      </Switch>
    </Router>
    )
  }
}

export default App
