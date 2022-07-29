import React, { useState, useEffect } from "react";
import FruitsList from "./FruitsList";
import Search from "./Search";
import AddFruitForm from "./AddFruitForm";
import FruitsHeader from "./FruitsHeader";

 function FruitContainer() {

  const [fruits, setFruits] = useState([]);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("all");

  useEffect(() => {
    fetch("http://localhost:8005/fruits")
      .then((r) => r.json())
      .then((fruits) => {
        setFruits(fruits);
        
      });
  }, []);
  

  function addFruitFun(addFruit) {
    setFruits([...fruits, addFruit]);
  }


  function deleteFruitFun(fruitToRemove) {
    setFruits(fruits.filter(fruit => fruit.id !== fruitToRemove.id))
  }

  let searchFun = (searchResult) => {
   setSearch(searchResult);
  }

  let selectFun = (selectedResult) => {
    setSelect(selectedResult);
  }

  let filterSearchFruits = () => {
    
    let filterSearch = fruits.filter(fruit => {
      return fruit.name.toLowerCase().includes(search.toLowerCase())
    })

    switch(select){
      case "all" :
        return filterSearch

      case "genusUP" : 
        return filterSearch.sort( (wordA, wordB) => {
            return wordA.genus.localeCompare(wordB.genus)
        })

      case "genusDOWN" : 
      return filterSearch.sort( (wordA, wordB) => {
          return wordB.genus.localeCompare(wordA.genus)
      })
        
      case "nameUP" : 
      return filterSearch.sort( (wordA, wordB) => {
          return wordA.name.localeCompare(wordB.name)
      })

      case "nameDOWN" : 
      return filterSearch.sort( (wordA, wordB) => {
          return wordB.name.localeCompare(wordA.name)
      })

      case "familyUP" : 
        return filterSearch.sort( (wordA, wordB) => {
            return wordA.family.localeCompare(wordB.family)
        })

      case "familyDOWN" : 
      return filterSearch.sort( (wordA, wordB) => {
          return wordB.family.localeCompare(wordA.family)
      })

      case "orderUP" : 
        return filterSearch.sort( (wordA, wordB) => {
            return wordA.order.localeCompare(wordB.order)
        })

      case "orderDOWN" : 
      return filterSearch.sort( (wordA, wordB) => {
          return wordB.order.localeCompare(wordA.order)
      })

      case "carbohydratesUP" : 
      return filterSearch.sort( (numA, numB) => {
          return numA.nutritions.carbohydrates - numB.nutritions.carbohydrates
      })

      case "carbohydratesDOWN" : 
      return filterSearch.sort( (numA, numB) => {
          return numB.nutritions.carbohydrates - numA.nutritions.carbohydrates
      })

      case "proteinUP" : 
      return filterSearch.sort( (numA, numB) => {
          return numA.nutritions.protein - numB.nutritions.protein
      })

      case "proteinDOWN" : 
      return filterSearch.sort( (numA, numB) => {
          return numB.nutritions.protein - numA.nutritions.protein
      })

      case "fatUP" : 
      return filterSearch.sort( (numA, numB) => {
          return numA.nutritions.fat - numB.nutritions.fat
      })

      case "fatDOWN" : 
      return filterSearch.sort( (numA, numB) => {
          return numB.nutritions.fat - numA.nutritions.fat
      })

      case "caloriesUP" : 
      return filterSearch.sort( (numA, numB) => {
          return numA.nutritions.calories - numB.nutritions.calories
      })

      case "caloriesDOWN" : 
      return filterSearch.sort( (numA, numB) => {
          return numB.nutritions.calories - numA.nutritions.calories
      })

      case "sugarUP" : 
      return filterSearch.sort( (numA, numB) => {
          return numA.nutritions.sugar - numB.nutritions.sugar
      })

      case "sugarDOWN" : 
      return filterSearch.sort( (numA, numB) => {
          return numB.nutritions.sugar - numA.nutritions.sugar
      })

      default:
    }
  }


    return (
      <div>
        <FruitsHeader />
        <Search 
           searchValue={search}
           searchFun={searchFun}
        />

        <AddFruitForm 
          addFruitFun={addFruitFun}
        />

        <FruitsList
          fruits={filterSearchFruits()}
          select={select}
          selectFun={selectFun}
          deleteFruitFun={deleteFruitFun}
          
         />

      </div>
    );

}

export default FruitContainer;