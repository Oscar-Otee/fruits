import React from "react";
import { Link } from "react-router-dom"

function Home() {
  return (
      <div style={{background: "coral", color: "white"}}>
          <h1>Welcome to This FruWeb Website, the Home of Fruits!</h1>
          <h4>
              You can click the <Link to="/about">About</Link> button to know more about this website.
          </h4>
          <p>
          You can also click the <Link to="/fruitContainer">Fruits</Link> button to be able to perform some actions on the fruits.
          </p>
      </div>
  )
  
  
}

export default Home;