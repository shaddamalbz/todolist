import React from "react";

// Components
import Button from "../../../Components/Button";

// Assets
import iconWarning from "../../../assets/svg/modal-delete-icon.svg";

import "./index.css";

export default function index({
  isShow,
  datacy,
  type,
  title,
  onCancel,
  onDelete,
}) {
  return (
    <div className={`${!isShow ? "hidden" : ""}`} data-cy={datacy}>
      <div className="modal-bg"></div>
      <div className="modal-delete" data-cy="modal-delete">
        <img src={iconWarning} alt="warning" data-cy="modal-delete-icon" />
        <div className="modal-delete-title" data-cy="modal-delete-title">
          <h3>Apakah anda ingin menghapus {type}</h3>
          <p>"{title}"</p>
        </div>
        <div className="modal-delete-group-button">
          <Button
            className="mr-10"
            onClick={onCancel}
            datacy="modal-delete-cancel-button"
          >
            Batal
          </Button>
          <Button
            isWarning
            onClick={onDelete}
            datacy="modal-delete-confirm-button"
          >
            Hapus
          </Button>
        </div>
      </div>
    </div>
  );
}
