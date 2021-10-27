import React from "react";

// Components
import Button from "../Button";

// Assets
import cross from "../../assets/svg/modal-add-close-button.svg";

import "./index.css";

export default function index({
  isShow,
  onClose,
  datacy,
  onSubmit,
  onChange,
  isDisable,
}) {
  return (
    <div className={`${!isShow ? "hidden" : ""}`} data-cy={datacy}>
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
          <form className="form">
            <label htmlFor="name" data-cy="modal-add-name-title">
              NAMA LIST ITEM
            </label>
            <input
              name="title"
              type="text"
              placeholder="Tambahkan nama list item"
              data-cy="modal-add-name-input"
              onChange={(e) => onChange(e)}
            />
            <label htmlFor="priority" data-cy="modal-add-priority-title">
              PRIORITY
            </label>
            <select
              data-cy="modal-add-priority-dropdown"
              name="priority"
              onChange={(e) => onChange(e)}
            >
              <option data-cy="modal-input-priority-item">
                Pilih priority
              </option>
              <option data-cy="modal-input-priority-item" value="very-high">
                Very High
              </option>
              <option data-cy="modal-input-priority-item" value="high">
                High
              </option>
              <option data-cy="modal-input-priority-item" value="normal">
                Medium
              </option>
              <option data-cy="modal-input-priority-item" value="low">
                Low
              </option>
              <option data-cy="modal-input-priority-item" value="very-low">
                {" "}
                Very Low
              </option>
            </select>
          </form>
        </div>
        <div className="modal-footer">
          {isDisable ? (
            <Button isDisable datacy="modal-add-save-button">
              Simpan
            </Button>
          ) : (
            <Button isPrimary datacy="modal-add-save-button" onClick={onSubmit}>
              Simpan
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
