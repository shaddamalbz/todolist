import React, { Component } from "react";

// Parts
import ListItem from "../Parts/ListItem";

export default class DetailActivity extends Component {
  render() {
    let list = [1, 2, 3];
    return (
      <>
        <ListItem list={list} />
      </>
    );
  }
}
