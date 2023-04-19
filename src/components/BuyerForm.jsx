import { Button, Container, Form, Card } from "react-bootstrap";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import AlertSuccess from "./AlertSuccess";
import "yup-phone";

const validationSchema = yup.object({
  name: yup.string().min(2, "Min 2").max(30, "Max 30").required("Requerido"),
  phone: yup
    .string()
    .min(10, "10 chars exactly")
    .max(10, "10 chars exactly")
    .required("Requerido"),
  mail: yup.string().email("Enter valid e-mail").required("Requerido"),
});

export default function BuyerForm() {
  const [isSubmited, setIsSubmited] = useState(false);

  const onSubmit = (values) => {
    setIsSubmited(true);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      mail: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Container>
      <Card className="p-2 my-2">
        <Form onSubmit={formik.handleSubmit}>
          <h3>YOUR DATA</h3>
          <hr />

          <Form.Group className="mb-3">
            <Form.Label>Name (min 2 max 30)*</Form.Label>
            <Form.Control
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger m-1">{formik.errors.name}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone (10 characters exactly) *</Form.Label>
            <Form.Control
              id="phone"
              name="phone"
              type="number"
              placeholder="Phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-danger m-1">{formik.errors.phone}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>E-mail*</Form.Label>
            <Form.Control
              id="mail"
              name="mail"
              type="text"
              placeholder="example@email.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mail}
            />
            {formik.touched.mail && formik.errors.mail ? (
              <div className="text-danger m-1">{formik.errors.mail}</div>
            ) : null}
          </Form.Group>
          <span>* campos obligatorios</span>
          <div className="d-grid gap-2 my-2">
            <Button type="submit" variant="success">
              <strong>CREAR POST</strong>
            </Button>
          </div>
          {!isSubmited ? "" : <AlertSuccess />}
        </Form>
      </Card>
    </Container>
  );
}
