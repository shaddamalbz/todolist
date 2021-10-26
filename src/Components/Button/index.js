import React from "react";

import "./index.css";

export default function index(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isDisable) className.push("btn-disable");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  return (
    <button className={className.join(" ")} onClick={onClick}>
      {props.isLoading ? <p>Loading..</p> : props.children}
    </button>
  );
}
