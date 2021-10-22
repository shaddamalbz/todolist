import React, { useState } from "react";
import axios from "axios";

// Parts
import ActivityEmptyState from "./ActivityEmptyState";

// Components
import Button from "../Components/Button";
import Card from "../Components/Card";

// Assets
import Plus from "../assets/svg/plus.svg";

export default function Dashboard(props) {
  const { activity } = props;
  const [isLoading, setisLoading] = useState(false);

  let isActivityEmpty = activity.total > 0 ? false : true;

  const onClick = () => {
    setisLoading(true);
    axios
      .post("https://todo.api.devcode.gethired.id/activity-groups", {
        title: "New Activity",
        email: "shaddamalghafiqih11@gmail.com",
      })
      .then((res) => {
        setisLoading(false);
      });
  };

  const onDelete = (id) => {
    axios.delete(`https://todo.api.devcode.gethired.id/activity-groups/${id}`);
  };

  return (
    <section>
      <div className="dashboard">
        <h3 className="activity-title" data-cy="activity-title">
          Activity
        </h3>
        <Button
          isPrimary
          data-cy="activity-add-button"
          onClick={onClick}
          isLoading={isLoading}
        >
          <img
            className="icon-plus"
            src={Plus}
            alt="icon plus for adding activity"
            data-cy="activity-add-button"
          />{" "}
          Tambah
        </Button>
      </div>
      {isActivityEmpty ? (
        <ActivityEmptyState data-cy="activity-empty-state" />
      ) : (
        <div className="card-container">
          {activity.data &&
            activity.data.map((item, index) => {
              return (
                <Card
                  isLink
                  href={`/activity/${item.id}`}
                  key={index}
                  activity={item}
                  onDelete={() => onDelete(item.id)}
                  data-cy="activity-item"
                />
              );
            })}
        </div>
      )}
    </section>
  );
}
