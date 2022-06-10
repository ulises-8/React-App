import React from "react";
import App from "../App";
import List from './List'

const SearchPlace = (props) => {
    {/*object destructuring - destructuring props objects
       const {onSearch} = props;
       this would allow us to the following:
      onChange={onSearch} instead of onChange={props.onSearch}
    */}
    
  
    return (
      <>
      <div>
        <label htmlFor={props.id}>{props.label}: </label>
        <input
         id={props.id}
        //key={props.key}
         type="text"
         placeholder="search location"
         autoFocus
         onChange={props.onChange} />
      </div>
      </>
  
    );
  };

export default SearchPlace;