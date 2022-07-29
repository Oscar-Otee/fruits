import React from "react";
import { Link } from "react-router-dom"

function Home() {
  return (
      <div style={{background: "coral", color: "white"}}>
          <h1>Welcome to This FruWeb Website, the Home of Fruits!</h1>
          <p>
              Are you passionate about fruits?
          </p>
          <p>
              Do you know more about the content of fruits?
          </p>
          <p>
              Do you know more about the content of fruits?
          </p>
          <p>
              Do you want to select your favorite fruits?
          </p>
          <p>
              You can click the <Link to="/about">About</Link> button to know more about this website.
          </p>
          <p>
              You can click the <Link to="/fruitContainer">Fruits</Link> button to be able to perform some actions on the fruits.
          </p>
          <p>
              Click the <Link to="/favoriteFruitsContainer">Favorites</Link> button to be able to select your favorite fruits and see them by clicking Show/hide Favorite Fruits button.
          </p>
      </div>
  )
  
  
}

export default Home;