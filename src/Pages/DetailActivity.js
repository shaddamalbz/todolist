import React, { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";

// Parts
const ListItem = lazy(() => import("../Parts/ListItem"));

// Components
const Modal = lazy(() => import("../Components/Modal"));

export default function DetailActivity(props) {
  const [todo, setTodo] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      const result = await axios(
        `https://todo.api.devcode.gethired.id/activity-groups/${props.match.params.id}`
      );
      setTodo(result.data);
      setHasLoaded(true);
    };
    if (!hasLoaded) {
      fetchTodo();
    }
  }, [hasLoaded, props.match.params.id]);

  const onAddTodo = () => {
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <ListItem
          title={todo.title}
          items={todo.todo_items}
          onAddTodo={onAddTodo}
        />
        <Modal isShow={showModal} onClose={onClose} />
      </Suspense>
    </>
  );
}
