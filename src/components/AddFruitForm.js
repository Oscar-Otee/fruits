import React, { useState } from "react";

function AddFruitForm ({addFruitFun}) {

  const [genus, setGenus] = useState("" );
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [order, setOrder] = useState("");
  const [nutritions, setNutritions] = useState({
    carbohydrates: "",
    protein: "",
    fat: "",
    calories: "",
    sugar: "",
   },);
  


  function handleSubmit (evt) {
    evt.preventDefault()
    fetch('http://localhost:3000/fruits', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(
       { genus,
        name,
        family,
        order,
        nutritions,}
      )
    })
    .then(r => r.json())
    .then(addFruit => {
      addFruitFun(addFruit)
      setGenus(genus);
      setName(name);
      setFamily(family);
      setOrder(order);
      setNutritions(nutritions);
  
    })

  }


  function handleGenusChange(event) {
    setGenus(
      event.target.value
    );
  }

  function handleNameChange(event) {
    setName(
      event.target.value
      );
  }
  function handleFamilyChange(event) {
    setFamily(
      event.target.value,
    );
  }
  function handleOrderChange(event) {
    setOrder(
      event.target.value,
    );
  }
  function handleNutritionsChange(event) {
    setNutritions({
      ...nutritions,
      [event.target.name]: event.target.value,
    });
  }


    return (
      <div className="ui segment" style={{background: "coral", color: "white"}}>
        <form className="ui form" onSubmit={handleSubmit} style={{background: "blue", color: "white"}}>
          <div className="inline fields">
            <input 
              type="text" 
              name="genus"
              placeholder="Genus"  
              value={genus}
              onChange={handleGenusChange}
            />
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={name}
              onChange={handleNameChange}
            />
            <input 
              type="text" 
              name="family" 
              placeholder="Family" 
              value={family}
              onChange={handleFamilyChange}
            />
            <input 
              type="text" 
              name="order" 
              placeholder="Order" 
              value={order}
              onChange={handleOrderChange}
            />
            <input
              type="number"
              name="carbohydrates"
              placeholder="Carbohydrates"
              step="0.01"
              value={nutritions.carbohydrates}
              onChange={handleNutritionsChange}
            />
            <input
              type="number"
              name="protein"
              placeholder="Protein"
              step="0.01"
              value={nutritions.protein}
              onChange={handleNutritionsChange}
            />
            <input
              type="number"
              name="fat"
              placeholder="Fat"
              step="0.01"
              value={nutritions.fat}
              onChange={handleNutritionsChange}
            />
            <input
              type="number"
              name="calories"
              placeholder="Calories"
              step="0.01"
              value={nutritions.calories}
              onChange={handleNutritionsChange}
            />
            <input
              type="number"
              name="sugar"
              placeholder="Sugar"
              step="0.01"
              value={nutritions.sugar}
              onChange={handleNutritionsChange}
            />
          </div>
          <button className="ui button" type="submit" style={{background: "cyan", color: "white"}} > 
            Add Fruit
          </button>
        </form>
      </div>
    );
}

export default AddFruitForm;