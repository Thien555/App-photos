import React from "react";
import { Button } from "reactstrap";
import "./photoCart.scss";
export default function PhotoCard(props) {
  const { photo, handleEditClick, handleRemoveClick, index } = props;

  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>

        <div className="photo__actions">
          <div>
            <Button
              outline
              size="sm"
              color="light"
              onClick={() => handleEditClick(photo)}
            >
              Edit
            </Button>
          </div>

          <div>
            <Button
              outline
              size="sm"
              color="danger"
              onClick={() => handleRemoveClick(index)}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
