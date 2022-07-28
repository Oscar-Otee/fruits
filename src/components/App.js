import React from "react";
import FruitContainer from "./FruitContainer";

import "../stylesheets/App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Header from "./Header";
import FavoriteFruitsContainer from "./favorites/FavoriteFruitsContainer";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/fruitContainer">
          <FruitContainer />
        </Route>
        <Route exact path="/favoriteFruitsContainer">
          <FavoriteFruitsContainer />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
