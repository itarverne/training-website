import React, { Component } from "react";
import "./App.scss";
import Home from "containers/home/home";
import ProgramContent from "containers/programContent/programContent";
import Chat from "components/chat/chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Program from "./utils/programs";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/python">
            <ProgramContent subject={Program.PYTHON} />
          </Route>

          <Route exact path="/docker">
            <ProgramContent subject={Program.DOCKER} />
          </Route>

          {/* <Route exact path="/django">
            <ProgramContent subject={Program.DJANGO} />
          </Route> */}
        </Switch>
        <Chat username="anonymous" />
      </Router>
    );
  }
}

export default App;
