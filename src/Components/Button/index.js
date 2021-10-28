import React from "react";

import "./index.css";

export default function index(props) {
  const className = [props.className];
  let datacy = "";
  if (props.isPrimary) className.push("btn-primary");
  if (props.isWarning) className.push("btn-warning");
  if (props.isDisable) className.push("btn-disable");
  if (props.datacy) datacy = props.datacy;

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  return (
    <button className={className.join(" ")} onClick={onClick} data-cy={datacy}>
      {props.isLoading ? <p>Loading..</p> : props.children}
    </button>
  );
}
