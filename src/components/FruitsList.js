import React from "react";
import Fruit from "./Fruit";
import Select from "./Select"

function FruitsList({fruits, select, selectFun, deleteFruitFun}) {

  const componentArray = fruits.map((fruit) => {
    return <Fruit 
            key={fruit.id} 
            fruit={fruit} 
            deleteFruitFun={deleteFruitFun}
          />
  })


  return (
    <table className="ui celled striped padded table" style={{background: "purple", color: "black"}}>
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
            < Select select={select} selectFun={selectFun}/>
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
        {componentArray}
      </tbody>
    </table>
  );
};

export default FruitsList;