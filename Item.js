import React from "react";
import App from "../App";
import List from '../components/List'

const Item = (props) => (
    <li>
      <span>{props.item.country}</span>
      <span>
      <a href={"https://earth.google.com/web/search/" + props.item.city}  target="_blank"> {props.item.city}</a>
      </span>
  </li>
  );

export default Item;