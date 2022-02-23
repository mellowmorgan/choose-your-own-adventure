import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameControl from "./GameControl"

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" element={<GameControl />} /> */}
        <Route path="/">
          <GameControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
