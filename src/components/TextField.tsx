import { useFormikContext } from "formik";
import React from "react";
import Form from "react-bootstrap/Form";

export interface TextFieldProps {
  type: string;
  label: string;
  name: string;
  required: boolean;
  placeholder: string;
  disabled?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  required = false,
  ...props
}) => {
  const { handleChange, values, errors: formErrors } = useFormikContext();
  const formValues: any = values;
  const errors: any = formErrors;
  return (
    <Form.Group className="mb-3" controlId={"formBasic" + name}>
      <Form.Label>
        {label}
        {required ? "*" : ""}
      </Form.Label>
      <Form.Control
        name={name}
        value={formValues[name]}
        onChange={handleChange}
        isInvalid={!!errors[name]}
        {...props}
      />
      <Form.Control.Feedback type="invalid">
        {errors[name]}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default TextField;
