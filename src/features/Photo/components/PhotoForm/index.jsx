import { FormGroup, Button, Spinner } from "reactstrap";
import {} from "react-select";
import { FastField, Form, Formik } from "formik";
import InputField from "../../../../custom-fileds/InputFiled";
import SelectField from "../../../../custom-fileds/SelectFiled";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../contants/global";
import RandomPhotoField from "../../../../custom-fileds/RandomPhotoFiled";
import * as yup from "yup";
import { useSelector } from "react-redux";

export default function PhotoForm(props) {
  const { onSubmit, isAddMode, photoId } = props;
  const photo = useSelector((state) =>
    state.photos.find((photo) => photo.id === photoId)
  );

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : photo;

  const valisdationSchema = yup.object().shape({
    title: yup.string().required("This field is required"),
    categoryId: yup.number().required("This field is required").nullable(),
    photo: yup.string().required("This field is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={valisdationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log("values", values);
        return (
          <Form>
            <FastField
              name="title"
              component={InputField} //2 cai tren la props cua fastfiled
              lable="Title" //props truyen vao InputFile
              placeholder="Eg: Wow nature..."
            ></FastField>
            <FastField
              name="categoryId"
              component={SelectField} //2 cai tren la props cua fastfiled
              lable="Category" //props truyen vao InputFile
              placeholder="What your's photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            ></FastField>

            <FastField
              name="photo"
              component={RandomPhotoField} //2 cai tren la props cua fastfiled
              lable="Photo" //props truyen vao InputFile
            ></FastField>

            <FormGroup>
              <Button
                style={{ marginTop: "20px" }}
                type="submit"
                color="primary"
              >
                {isSubmitting && <Spinner size="sm" />}
                {isAddMode ? "Add to album photo " : "Update photo"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}
