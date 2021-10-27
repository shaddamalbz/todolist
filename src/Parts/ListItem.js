import React, { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Parts
import ListEmptyState from "./ListEmptyState";

// Assets
import Plus from "../assets/svg/plus.svg";
import Edit from "../assets/svg/edit.svg";
import Back from "../assets/svg/todo-back-button.svg";
import Arrowsort from "../assets/svg/arrow-sort.svg";

// Components
import Button from "../Components/Button";
const List = lazy(() => import("../Components/List"));

export default function ItemList(props) {
  const { title, items, onAddTodo, id } = props;
  const [onEditTitle, setOnEditTitle] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const onEditTodo = () => {
    setOnEditTitle(true);
  };

  const onChangeTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const onTyping = (e) => {
    if (e.key === "Enter") {
      const data = {
        title: newTitle,
      };
      axios
        .patch(
          `https://todo.api.devcode.gethired.id/activity-groups/${id}`,
          data
        )
        .then(() => {
          setOnEditTitle(false);
        });
    }
  };

  return (
    <section data-cy="item-list">
      <div className="itemlist">
        <div className="itemlist-left">
          <Link to="/" data-cy="todo-back-button">
            <img src={Back} alt="smaller than" />
          </Link>
          {onEditTitle ? (
            <input
              className="edit-title"
              type="text"
              value={newTitle}
              onChange={onChangeTitle}
              onKeyDown={(e) => onTyping(e)}
              data-cy="todo-title"
            />
          ) : (
            <h3 className="itemlist-title" data-cy="todo-title">
              {newTitle}
            </h3>
          )}

          <img
            src={Edit}
            alt="pen"
            data-cy="todo-title-edit-button"
            onClick={onEditTodo}
          />
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
        <ListEmptyState datacy="todo-empty-state" />
      ) : (
        <div className="list-container">
          <Suspense fallback={<p>Loading...</p>}>
            {items &&
              items.map((item, index) => {
                return <List item={item} key={index} />;
              })}
          </Suspense>
        </div>
      )}
    </section>
  );
}
