import React from "react";
import { Link } from "react-router-dom";

// Parts
import ListEmptyState from "./ListEmptyState";

// Components
import Button from "../Components/Button";
import List from "../Components/List";

// Assets
import Plus from "../assets/svg/plus.svg";
import Edit from "../assets/svg/edit.svg";
import Back from "../assets/svg/todo-back-button.svg";
import Arrowsort from "../assets/svg/arrow-sort.svg";

export default function ItemList(props) {
  const { list } = props;
  const isListEmpty = list.length === 0 ? true : false;

  return (
    <section>
      <div className="itemlist">
        <div className="itemlist-left">
          <Link to="/">
            <img src={Back} alt="smaller than" data-cy="todo-back-button" />
          </Link>
          <h3 className="itemlist-title" data-cy="todo-title">
            New Activity
          </h3>
          <img src={Edit} alt="pen" data-cy="todo-title-edit-button" />
        </div>
        <div className="itemlist-right">
          {!isListEmpty && (
            <div className="itemlist-sort-button">
              <img src={Arrowsort} alt="arrow upside downside" />
            </div>
          )}
          <Button isPrimary data-cy="todo-add-button">
            <img
              className="icon-plus"
              src={Plus}
              alt="icon plus for adding activity"
              data-cy="todo-add-button"
            />{" "}
            Tambah
          </Button>
        </div>
      </div>
      {isListEmpty ? (
        <ListEmptyState />
      ) : (
        <div className="list-container">
          <List />
          <List />
          <List />
        </div>
      )}
    </section>
  );
}
