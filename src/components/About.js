import React from "react";
import { Link } from "react-router-dom";

function About() {
  return(
    <div>
       <h1>Welcome And Know More About This Website And How To Navigate</h1>
       <div>
         <p>
           Since many people in the world suffer from various diseases that need caution on the type of food to take fruits inluded,
           FruWeb site offers a quick way to be able to make such decision.
         </p>
         <p>
           This can be done by searching for a fruit and seeing it nutrition content using the search bar in the the fruits page.
         </p>
         <p>
           The site also enables you to add a fruit not existing in the list by filling in the required inputs.
         </p>
         <p>
           You will then be able to see a fruit that has been added in the list.
         </p>
         <p>
           You can also delete the fruits in the list using the delete button in the fruits bar.
         </p>
         <p>
           If you want to select your favorite fruit by cliking Favorites button and then
           and then click Add To My favorites button and see your selection by clicking your Show/hide favorite Fruit button.
         </p>
         <p>
           You can also remove them from your favorites by clicking the Remove From My Favorites button.
         </p>
         <p>
           So this site is very important since it helps in making decision of the fruit to use depending on your health status which can be a burden.
         </p>
       </div>
       <div>
         <p>
           Do you want to navigate to Home, click <Link to="/">here.</Link> 
         </p>
         <p>
           Do you want to navigate to Fruits, click <Link to="/fruitContainer">here.</Link> 
         </p>
         <p>
           Do you want to navigate to Favorites, click <Link to="/favoriteFruitsContainer">here.</Link> 
         </p>
       </div>
    </div>
  );
}

export default About;