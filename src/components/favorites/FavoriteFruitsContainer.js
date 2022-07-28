import React, {useState, useEffect} from "react";
import FavoriteFruitsList from "./FavoriteFruitsList";
import FavoriteFruitsHeader from "./FavoriteFruitsHeader";



function FavoriteFruitsContainer() {
  const [myFavoriteVisible, setMyFavoriteVisible] = useState(true);
  const [fruits, setFruits] = useState([]);
  const fruitsToDisplay = fruits.filter((fruit) => myFavoriteVisible || fruit.isFavorite);
  

  useEffect(() => {
    fetch("http://localhost:8005/fruits")
      .then((r) => r.json())
      .then((fruits) => {
        setFruits(fruits);
        
      });
  }, []);

  function deleteFruitFun(fruitToRemove) {
    setFruits(fruits.filter(fruit => fruit.id !== fruitToRemove.id))
  }




  function addToMyFavorites(favoriteFruit) {
    setFruits(fruits.map(fruit => {
      return fruit.id === favoriteFruit.id ? {...favoriteFruit, isFavorite: !favoriteFruit.isFavorite} : fruit
      }  
    ))
  }


  function fruitView() {
    if (fruitsToDisplay.length === 0 && !myFavoriteVisible) {
      return (<h1>You have no favorites added</h1>)
    } else {
      return (
        <FavoriteFruitsList 
          fruits={fruitsToDisplay} 
          deleteFruitFun={deleteFruitFun} 
          addToMyFavorites={addToMyFavorites}
        />
      )
    }
  }


  return (
    <div className="app">
      <FavoriteFruitsHeader />
      <div className="sidebar">
        <button 
        onClick={() => setMyFavoriteVisible(!myFavoriteVisible)} 
        style={{background: "maroon", color: "white", height: "50px"}}
        >
          Show/hide Favorite Fruits
        </button>
      </div>

      {fruitView()}

    </div>
  );
}

export default FavoriteFruitsContainer;