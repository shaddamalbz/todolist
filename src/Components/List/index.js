import React from "react";

// Components
import Indicator from "../Indicator";

// Assets
import Trashcan from "../../assets/svg/trashcan.svg";
import Edit from "../../assets/svg/edit.svg";

import "./index.css";

export default function index(props) {
  const { item } = props;

  return (
    <div className="list" data-cy="todo-item">
      <div className="list-left">
        <input type="checkbox" name="" id="" />
        <Indicator priority={item.priority} />
        <p className="list-title" data-cy="todo-item-title">
          {item.title}
        </p>
        <img src={Edit} alt="Pen" />
      </div>
      <div className="list-right">
        <img src={Trashcan} alt="Trashcan" />
      </div>
    </div>
  );
}
