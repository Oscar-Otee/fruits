import React from "react";
import { Link } from "react-router-dom";


function FruitsHeader (){
    return(
    <div>
        <h1>Welcome And Learn More About Fruits.</h1>
        <p>
            Click <span style={{color: "coral"}}>Add To My Favorites</span> button to add a favorite fruit  to your list. Then click <span style={{color: "coral"}}>Show/hide Favorite Fruits</span> button to see the favorite list.
        </p>
        <div>
            <p>
                Do you want to navigate to Home, click <Link to="/">here</Link>. 
            </p>
            <p>
                Do you want to navigate to About, click <Link to="/about">here</Link>.
            </p>
            <p>
                Do you want to navigate to Favorites, click <Link to="/favoriteFruitsContainer">here</Link>. 
            </p>
       </div>
    </div>
        
    )
}

export default FruitsHeader;