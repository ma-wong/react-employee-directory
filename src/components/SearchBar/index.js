import React from "react";


function SearchBar(props) {
  return (
    <div className="container">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search" aria-describedby="button-addon2"/>
        {/* <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button> */}
      </div>
    </div>
    
  );
}

export default SearchBar;
