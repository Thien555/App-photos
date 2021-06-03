import React from "react";
import { Col, Row } from "reactstrap";
import PhotoCard from "../PhotoCard";
import { removePhoto } from "../../photoslice";
import { useDispatch } from "react-redux";

export default function PhotoList(props) {
  const dispatch = useDispatch();

  const { photoList, handleEditClick } = props;

  const handleRemoveClick = (index) => {
    const action = removePhoto(index);
    dispatch(action);
  };

  return (
    <Row>
      {photoList.map((photo, index) => (
        <Col key={photo.id} xs="12" md="4" lg="4">
          <PhotoCard
            index={index}
            photo={photo}
            handleRemoveClick={handleRemoveClick}
            handleEditClick={handleEditClick}
          ></PhotoCard>
        </Col>
      ))}
    </Row>
  );
}
