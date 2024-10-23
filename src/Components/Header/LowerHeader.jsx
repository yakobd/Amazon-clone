import React from 'react'
import { IoIosMenu } from "react-icons/io";
import classes from "./Header.module.css";

function LowerHeader() {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <IoIosMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader
