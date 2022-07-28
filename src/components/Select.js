import React from "react";

function Select({select, selectFun}) {


    function handleSelect(evt) {
        selectFun(evt.target.value)
    }

     

  return (
   <div>
     <select value={select} onChange={handleSelect}>
        <option value={"all"}>All</option>
        <option value={"genusUP"}>Sort by genus (ASC)</option>
        <option value={"genusDOWN"}>Sort by genus (DESC)</option>
        <option value={"nameUP"}>Sort by name (ASC)</option>
        <option value={"nameDOWN"}>Sort by name (DESC)</option>
        <option value={"familyUP"}>Sort by family (ASC)</option>
        <option value={"familyDOWN"}>Sort by family (DESC)</option>
        <option value={"orderUP"}>Sort by order (ASC)</option>
        <option value={"orderDOWN"}>Sort by order (DESC)</option>
        <option value={"carbohydratesUP"}>Sort by carbohydrates (ASC)</option>
        <option value={"carbohydratesDOWN"}>Sort by carbohydrates (DESC)</option>
        <option value={"proteinUP"}>Sort by protein (ASC)</option>
        <option value={"proteinDOWN"}>Sort by protein (DESC)</option>
        <option value={"fatUP"}>Sort by fat (ASC)</option>
        <option value={"fatDOWN"}>Sort by fat (DESC)</option>
        <option value={"caloriesUP"}>Sort by calories (ASC)</option>
        <option value={"caloriesDOWN"}>Sort by calories (DESC)</option>
        <option value={"sugarUP"}>Sort by sugar (ASC)</option>
        <option value={"sugarDOWN"}>Sort by sugar (DESC)</option>
     </select>
   </div>
  )
}

export default Select;