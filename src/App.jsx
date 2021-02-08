import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from "./Components/Home"
import Header from "./Components/Header"
import Aside from "./Components/Aside"

export const App = () => {
  return(
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <div className="grid">
            <Aside/>
            <div className="col-10_md-12_sm-12">
              <Home/>
            </div>
          </div>
        </Route>
        <Route path="/loco" exact>
          <p>Loco</p>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
