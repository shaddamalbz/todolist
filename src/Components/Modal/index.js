import React from "react";

// Components
import Button from "../Button";

// Assets
import cross from "../../assets/svg/modal-add-close-button.svg";

import "./index.css";

export default function index({ isShow, onClose }) {
  return (
    <div className={`${!isShow ? "hidden" : ""}`}>
      <div className="modal-bg"></div>
      <div className="modal">
        <div className="modal-header">
          <h3 data-cy="modal-add-title">Tambah List Item</h3>
          <img
            className="cross-icon"
            src={cross}
            alt="cross"
            data-cy="modal-add-close-button"
            onClick={onClose}
          />
        </div>
        <div className="modal-body">
          <form action="" className="form">
            <label htmlFor="name" data-cy="modal-add-name-title">
              NAMA LIST ITEM
            </label>
            <input
              type="text"
              placeholder="Tambahkan nama list item"
              data-cy="modal-add-name-input"
            />
            <label htmlFor="priority" data-cy="modal-add-priority-title">
              PRIORITY
            </label>
            <input
              type="text"
              placeholder="Tambahkan nama list item"
              data-cy="modal-add-priority-input"
            />
          </form>
        </div>
        <div className="modal-footer">
          <Button isPrimary isDisable datacy="modal-add-save-button">
            Simpan
          </Button>
        </div>
      </div>
    </div>
  );
}
