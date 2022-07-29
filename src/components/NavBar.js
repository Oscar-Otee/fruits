import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "forestgreen",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div style={{background: "cyan", color: "white"}}>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "hotpink",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "hotpink",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/fruitContainer"
        exact
        style={linkStyles}
        activeStyle={{
          background: "hotpink",
        }}
      >
        Fruits
      </NavLink>

      <NavLink
        to="/favoriteFruitsContainer"
        exact
        style={linkStyles}
        activeStyle={{
          background: "hotpink",
        }}
      >
        Favorites
      </NavLink>
    </div>
  );
}

export default NavBar;