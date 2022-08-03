import React from "react";

function Fruit({fruit, deleteFruitFun}) {
  const {genus, name, family, order, nutritions:{carbohydrates, protein, fat, calories, sugar}} = fruit;


  function handleDelete(evt) {
    fetch(`http://localhost:3000/fruits/${fruit.id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(deletedFruit => {
      deleteFruitFun(fruit)
    })
  }


  return (
    <tr style={{background: "white", color: "black", margin: "100px"}}>
      <td>{genus}</td>
      <td>{name}</td>
      <td>{family}</td>
      <td>{order}</td>
      <td>{carbohydrates}</td>
      <td>{protein}</td>
      <td>{fat}</td>
      <td>{calories}</td>
      <td>{sugar}</td>
      <td><button onClick={handleDelete} style={{background: "aqua", color: "black"}}>Delete</button></td> 
    </tr>
  );
};

export default Fruit;