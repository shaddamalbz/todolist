import React from "react";

// Components
import Indicator from "../Indicator";

// Assets
import Trashcan from "../../assets/svg/trashcan.svg";
import Edit from "../../assets/svg/edit.svg";

import "./index.css";

export default function index(props) {
  return (
    <div className="list">
      <div className="list-left">
        <input type="checkbox" name="" id="" />
        <Indicator priority="very high" />
        <p className="list-title" data-cy="todo-item-title">
          Telur Ayam
        </p>
        <img src={Edit} alt="Pen" />
      </div>
      <div className="list-right">
        <img src={Trashcan} alt="Trashcan" />
      </div>
    </div>
  );
}
