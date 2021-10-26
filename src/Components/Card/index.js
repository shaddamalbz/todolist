import React from "react";
import { Link } from "react-router-dom";

// Assets
import Trashcan from "../../assets/svg/trashcan.svg";

import "./index.css";

export default function index(props) {
  const { activity } = props;

  const date = new Date(activity.created_at);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const onDelete = () => {
    if (props.onDelete) props.onDelete();
  };

  return (
    <>
      <div className="card-activity">
        <Link to={`/activity/${activity.id}`} className="card-body">
          <h3 className="card-title" data-cy="activity-item-title">
            {activity.title ? activity.title : ""}
          </h3>
        </Link>
        <div className="card-footer">
          <p className="card-date" data-cy="activity-item-date">
            {`${day} ${bulan[month]} ${year}`}
          </p>
          <img
            className="icon-delete"
            src={Trashcan}
            alt="Icon trashcan"
            onClick={onDelete}
            data-cy="activity-item-delete-button"
          />
        </div>
      </div>
    </>
  );
}
