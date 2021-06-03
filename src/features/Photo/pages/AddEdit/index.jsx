import React from "react";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import "./addEdit.scss";
import { useDispatch } from "react-redux";
import { addPhoto, updatePhoto } from "../../photoslice";
import { useHistory, useParams } from "react-router";
export default function AddEdit(props) {
  const dispatch = useDispatch();
  const { photoId } = useParams();
  const isAddMode = !photoId;
  const history = useHistory();
  const handelSubmit = (values) => {
    let idPhoto = Math.trunc(Math.random() * 100000);
    if (isAddMode) {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(idPhoto);
          const action = addPhoto({ id: idPhoto, ...values });
          console.log("Submit:", action);
          dispatch(action);
          history.push("/photos");
          resolve(true);
        }, 1500);
      });
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          const action = updatePhoto({ id: idPhoto, ...values });
          dispatch(action);
          history.push("/photos");
          resolve(true);
        }, 1500);
      });
    }
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo"></Banner>
      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={handelSubmit}
          isAddMode={isAddMode}
          photoId={+photoId}
        />
      </div>
    </div>
  );
}
