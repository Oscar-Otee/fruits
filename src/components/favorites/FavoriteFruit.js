import React, { useState } from "react";

function FavoriteFruit({fruit, addToMyFavorites}) {
  const [isSelected, setIsSelected] = useState(false);
  const {genus, name, family, order, nutritions:{carbohydrates, protein, fat, calories, sugar}} = fruit;

  function handleAddToMyFavorite(){
    addToMyFavorites(fruit);
    setIsSelected(!isSelected);
  }
  
  return (
    <tr style={{background: isSelected ? "green" :null, color: isSelected===true ? "white": null}}>
      <td>{genus}</td>
      <td>{name}</td>
      <td>{family}</td>
      <td>{order}</td>
      <td>{carbohydrates}</td>
      <td>{protein}</td>
      <td>{fat}</td>
      <td>{calories}</td>
      <td>{sugar}</td>
      <td><button onClick={handleAddToMyFavorite}>{fruit.isFavorite ? "Remove From My Favorites" : "   💓 Add To My Favorites" }</button></td>
    </tr>
  );
}

export default FavoriteFruit;