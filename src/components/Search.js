import React from "react";

function Search({searchValue, searchFun}) {

  function handleChange(evt) {
    searchFun(evt.target.value)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Fruits By Name"}
        value={searchValue}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;