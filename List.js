import React from "react";
import App from "../App";
import Item from "./Item";

const List = (props) => {
  
    return (
      <div>
        <ul >
          {props.list.map(function(item) {  //accessing the list HTML attribute in props, passed from the App component
            return (
            <Item item={item}/> //Item component instance...saving each item in the list in the item HTML attribute.   
            )
          })}
        </ul>
      </div>
    );
  }

export default List;