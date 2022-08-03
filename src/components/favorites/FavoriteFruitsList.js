import React from "react";
import FavoriteFruit from "./FavoriteFruit";

function FavoriteFruitsList({fruits, deleteFruitFun, addToMyFavorites}) {

  const fruitsList = fruits.map(
    fruit => { return(<FavoriteFruit key={fruit.id} fruit={fruit} deleteFruitFun={deleteFruitFun} addToMyFavorites={addToMyFavorites} />)});

  return (
    <table className="ui celled striped padded table" style={{background: "lavender", color: "black"}}>
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Genus</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Name</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Family</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Order</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Carbohydrates</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Protein</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">fat</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Calories</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Sugar</h3>
          </th>
        </tr>
        {fruitsList}
      </tbody>
    </table>
  );
}

export default FavoriteFruitsList;