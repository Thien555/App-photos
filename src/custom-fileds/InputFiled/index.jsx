import { ErrorMessage } from "formik";
import React from "react";

import { FormGroup, Input, Label, FormFeedback } from "reactstrap";

InputField.defaultProps = {
  type: "text",
  lable: "",
  placeholder: "",
  disabled: false,
};

export default function InputField(props) {
  const { field, form, type, lable, placeholder, disabled } = props;
  const { name } = field; // field co 4 cai la name,value,onChange,onBlur
  const { errors, touched } = form;
  const messageError = errors[name] && touched[name];

  return (
    <FormGroup>
      {lable && <Label for={name}>{lable}</Label>}
      <Input
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        invalid={messageError}
      />

      <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
    </FormGroup>
  );
}
