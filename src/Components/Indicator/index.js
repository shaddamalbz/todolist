import React from "react";

import "./index.css";

export default function index(props) {
  const className = [props.className];
  if (props.priority === "very-high") className.push("very-high");
  if (props.priority === "high") className.push("high");
  if (props.priority === "medium") className.push("medium");
  if (props.priority === "low") className.push("low");
  if (props.priority === "very-low") className.push("very-low");

  return <div className={`indicator ${className.join(" ")}`}></div>;
}
