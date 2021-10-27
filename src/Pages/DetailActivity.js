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
  const [form, setForm] = useState({
    title: "",
    priority: "",
    activity_group_id: props.match.params.id,
  });

  const formFilled = form.title !== "" && form.priority !== "" ? true : false;

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

  const onSubmit = () => {
    axios
      .post("https://todo.api.devcode.gethired.id/todo-items", form)
      .then((res) => {
        console.log(res);
        setShowModal(false);
        setHasLoaded(false);
      });
  };

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        {hasLoaded && (
          <ListItem
            title={todo.title}
            items={todo.todo_items}
            onAddTodo={onAddTodo}
            id={props.match.params.id}
          />
        )}
        <Modal
          isShow={showModal}
          onClose={onClose}
          datacy="modal-add"
          onSubmit={onSubmit}
          onChange={(e) => onChange(e)}
          isDisable={!formFilled}
        />
      </Suspense>
    </>
  );
}
