import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from "./Components/Home"
import Header from "./Components/Header"

export const App = () => {
  return(
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/loco" exact>
          <p>Loco</p>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
