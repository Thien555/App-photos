import React from "react";
import "./main.scss";
import { Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import PINK_BG from "../../../../assets/images/pink-bg.jpg";
import Banner from "../../../../components/Banner";
import { useSelector } from "react-redux";
import PhotoList from "../../components/PhotoList";

export default function AddEdit(props) {
  const photos = useSelector((state) => state.photos);
  const history = useHistory();

  const handleEditClick = (photo) => {
    const urlPhotoId = `/photos/${photo.id}`;
    history.push(urlPhotoId);
  };

  return (
    <div className="photo-main">
      <Banner title="Your awnsome photos" backgroundUrl={PINK_BG}></Banner>

      <Container>
        <Link to="/photos/add" className="link-add-photo">
          Add new photo
        </Link>
        <h3>Your photos list</h3>

        <PhotoList
          photoList={photos}
          handleEditClick={handleEditClick}
        ></PhotoList>
      </Container>
    </div>
  );
}
