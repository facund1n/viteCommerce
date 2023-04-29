import { Button } from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import * as yup from "yup";
/* import { Success, Error } from "../Common"; */

import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  title: yup.string().min(2, "Max 2 ").max(80, "Min 80").required("Required"),
  description: yup
    .string()
    .min(10, "Min 10")
    .max(30, "Max 300")
    .required("Required"),
  image: yup.string().url("enter valid URL"),
  price: yup
    .string()
    .min(10, "Min 10")
    .max(500, "Man 500")
    .required("Required"),
  category: yup
    .string()
    .min(2, "Max 2 ")
    .max(80, "Min 80")
    .required("Required"),
  stock: yup.string().url("ingrese una URL válida").required("Required"),
});

export default function NewPost() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const onSubmit = async (values) => {
    const response = await axios
      .post("https://vite-commerce-back-end.vercel.app/products/new", values)
      .catch((err) => {
        if (err) setError(err.response.data.message);
        setSuccess(null);
        console.log("Error?", err.response.data.message);
      });
    if (response) {
      setError(null);
      setSuccess(response.data.message);
      formik.resetForm();
      setInterval(() => {
        navigate("/users/admin");
        window.location.reload();
      }, 3000);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: "",
      price: "",
      alt: "",
      category: "destacados",
      stock: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h3>EDITAR POST:</h3>
      <hr />
      {!error && <Success>{success ? success : ""}</Success>}
      {!success && <Error>{error ? error : ""}</Error>}
      <Form.Group className="mb-3">
        <Form.Label>Title (min 2 - máx 80) *</Form.Label>
        <Form.Control
          id="title"
          name="title"
          type="text"
          placeholder="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="f-yellow mt-1">{formik.errors.title}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description (min 10 - máx 300) *</Form.Label>
        <Form.Control
          id="description"
          name="description"
          type="text"
          placeholder="Sub-título"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="f-yellow mt-1">{formik.errors.description}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>URL imágen *</Form.Label>
        <Form.Control
          id="image"
          name="image"
          type="text"
          placeholder="ej.: http://imgen.com/imagen.png"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image ? (
          <div className="f-yellow mt-1">{formik.errors.image}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Cuerpo artículo (mínimo 10 máximo 500) *</Form.Label>
        <Form.Control
          id="price"
          name="price"
          type="text"
          as="textarea"
          placeholder="Cuerpo artículo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div className="f-yellow mt-1">{formik.errors.price}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ALT imágen *</Form.Label>
        <Form.Control
          id="alt"
          name="alt"
          type="text"
          placeholder="ALT imágen"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.alt}
        />
        {formik.touched.alt && formik.errors.alt ? (
          <div className="f-yellow mt-1">{formik.errors.alt}</div>
        ) : null}
      </Form.Group>
      <Form.Label>Categoría *</Form.Label>
      <Form.Select
        aria-label="Default select example"
        className="mb-2"
        id="category"
        name="category"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.category}
      >
        <option value="destacados" className="f-black">
          Destacados
        </option>
        <option value="noticias" className="f-black">
          Noticias
        </option>
        <option value="shows" className="f-black">
          Shows
        </option>
      </Form.Select>
      <Form.Group className="mb-3">
        <Form.Label>URL Tickets (en caso que sea Show)</Form.Label>
        <Form.Control
          id="stock"
          name="stock"
          type="number"
          placeholder="ej.: https://tickets.com/"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.stock}
        />
        {formik.touched.stock && formik.errors.stock ? (
          <div className="f-yellow mt-1">{formik.errors.stock}</div>
        ) : null}
      </Form.Group>
      <span>* campos obligatorios</span>
      <div className="d-grid gap-2 my-2">
        <Button type="submit" variant="success">
          <strong>CREAR POST</strong>
        </Button>
      </div>
    </Form>
  );
}
