import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { useState } from "react";
import { Success, Error } from "../Common";
import axios from "axios";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  title: yup.string().min(2, "Min 2 ").max(80, "Max 80").required("Required"),
  description: yup
    .string()
    .min(10, "Min 10")
    .max(500, "Max 500")
    .required("Required"),
  image: yup
    .array()
    .of(yup.string().url("ingrese una URL válida"))
    .required("Required"),
  price: yup
    .number()
    .positive("Enter +Positive number")
    .integer()
    .required("Required"),
  category: yup
    .string()
    .min(2, "Max 2 ")
    .max(80, "Min 80")
    .required("Required"),
  stock: yup
    .number()
    .positive("Enter +Positive number")
    .integer()
    .required("Required"),
});

export default function NewPost() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    const response = await axios
      .post("https://vite-commerce-back-end.vercel.app/products/new", values)
      .catch((error) => {
        if (error) setError(error.response.data.message);
        setSuccess(false);
      });
    if (response) {
      setError(false);
      setSuccess(response.data.message);
      formik.resetForm();
      setInterval(() => {
        navigate("/panel");
        window.location.reload();
      }, 3000);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: ["", "", "", ""],
      price: "",
      category: "phones",
      stock: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
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
            <div className="text-danger mt-1">{formik.errors.title}</div>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description (min 10 - máx 300) *</Form.Label>
          <Form.Control
            id="description"
            name="description"
            type="text"
            placeholder="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-danger mt-1">{formik.errors.description}</div>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>IMAGES (Enter 4 image URLs) *</Form.Label>
          <br /> <Form.Label>Principal Image:</Form.Label>
          {formik.touched.image && formik.errors.image ? (
            <div className="text-danger mt-1">{formik.errors.image}</div>
          ) : null}
          <Form.Control
            id="image[0]"
            name="image[0]"
            type="text"
            placeholder="http://image.com/image-1.png"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image[0]}
          />
          <Form.Label>2nd Image:</Form.Label>
          <Form.Control
            id="image[1]"
            name="image[1]"
            type="text"
            placeholder="http://image.com/image-2.png"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image[1]}
          />
          <Form.Label>3rd Image:</Form.Label>
          <Form.Control
            id="image[2]"
            name="image[2]"
            type="text"
            placeholder="http://image.com/image-3.png"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image[2]}
          />
          <Form.Label>4th Image:</Form.Label>
          <Form.Control
            id="image[3]"
            name="image[3]"
            type="text"
            placeholder="http://image.com/image-1.png"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image[3]}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price*</Form.Label>
          <Form.Control
            id="price"
            name="price"
            type="number"
            placeholder="$"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="text-danger mt-1">{formik.errors.price}</div>
          ) : null}
        </Form.Group>
        <Form.Label>Category *</Form.Label>
        <Form.Select
          aria-label="Default select example"
          className="mb-2"
          id="category"
          name="category"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}
        >
          <option value="phones" className="f-black">
            phones
          </option>
          <option value="computers" className="f-black">
            computers
          </option>
          <option value="audio" className="f-black">
            audio
          </option>
        </Form.Select>
        <Form.Group className="mb-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            id="stock"
            name="stock"
            type="number"
            placeholder="0"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.stock}
          />
          {formik.touched.stock && formik.errors.stock ? (
            <div className="text-danger mt-1">{formik.errors.stock}</div>
          ) : null}
        </Form.Group>
        <span>* must fill </span>
        {success && (
          <Success className="notification-animation">
            {<span>🛈 {success}</span>}
          </Success>
        )}
        {error && (
          <Error className="notification-animation">
            {<span>🛈 {error}</span>}
          </Error>
        )}
        <div className="d-grid gap-2 my-2">
          <Button type="submit" variant="success">
            <strong>NEW PRODUCT</strong>
          </Button>
        </div>
      </Form>
    </>
  );
}
