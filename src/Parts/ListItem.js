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
  const { title, items, onAddTodo } = props;

  return (
    <section>
      <div className="itemlist">
        <div className="itemlist-left">
          <Link to="/" data-cy="todo-back-button">
            <img src={Back} alt="smaller than" />
          </Link>
          <h3 className="itemlist-title" data-cy="todo-title">
            {title}
          </h3>
          <img src={Edit} alt="pen" data-cy="todo-title-edit-button" />
        </div>
        <div className="itemlist-right">
          <div className="itemlist-sort-button" data-cy="todo-sort-button">
            <img src={Arrowsort} alt="arrow upside downside" />
          </div>
          <Button isPrimary datacy="todo-add-button" onClick={onAddTodo}>
            <img
              className="icon-plus"
              src={Plus}
              alt="icon plus for adding activity"
            />{" "}
            Tambah
          </Button>
        </div>
      </div>
      {items && items.length === 0 ? (
        <ListEmptyState data-cy="todo-empty-state" />
      ) : (
        <div className="list-container">
          <List />
        </div>
      )}
    </section>
  );
}
