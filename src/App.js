import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteState";
import About from "./pages/About";
import Home from "./pages/Home";
const App = () => {
  return (
    <div>
      <NoteState>
        <Router>
          <Navbar />
          <Switch>
            <Route key="home" exact path="/">
              <Home />
            </Route>
            <Route key="about" exact path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </NoteState>
    </div>
  );
};

export default App;
