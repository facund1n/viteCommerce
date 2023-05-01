import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { Success, Error } from "../Common";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  name: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, "Letters only")
    .min(2, "Min 2")
    .max(30, "Max 30")
    .required("Required"),
  email: yup.string().email("Enter valid e-mail").required("Required"),
  phone: yup
    .string()
    .min(10, "10 chars exactly")
    .max(10, "10 chars exactly")
    .required("Required"),
  password: yup.string().min(6, "Min 6").max(20, "Max 20").required("Required"),
  password2: yup
    .string()
    .min(6, "Min 6")
    .max(20, "Max 20")
    .required("Required")
    .oneOf([yup.ref("password"), null], "Passwords do not match"),
});

export default function RegisterForm() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ...data } = values;

    const response = await axios
      .post("https://vite-commerce-back-end.vercel.app/register", data)
      .catch((error) => {
        if (error) setError(error.response.data.message);
        setSuccess(false);
      });
    if (response) {
      setError(false);
      setSuccess(response.data.message);
      formik.resetForm();
      setInterval(() => {
        window.location.reload();
        navigate("/");
      }, 3500);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      password2: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="py-2">
      <Form.Group className="mb-3">
        <Form.Label>Name & Lastname</Form.Label>
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
          <div className="text-warning mt-1 wiggle-bdr-top">
            {formik.errors.name}
          </div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          id="email"
          name="email"
          type="email"
          placeholder="example@email.com"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-warning mt-1 wiggle-bdr-top">
            {formik.errors.email}
          </div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          id="phone"
          name="phone"
          type="number"
          placeholder="10 characters exactly"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-warning mt-1 wiggle-bdr-top">
            {formik.errors.phone}
          </div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          id="password"
          name="password"
          type="password"
          placeholder="Min 6 Max 20"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-warning mt-1 wiggle-bdr-top">
            {formik.errors.password}
          </div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control
          id="password2"
          name="password2"
          type="password"
          placeholder="Repeat Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password2}
        />
        {formik.touched.password2 && formik.errors.password2 ? (
          <div className="text-warning mt-1 wiggle-bdr-top">
            {formik.errors.password2}
          </div>
        ) : null}
      </Form.Group>
      {success && <Success>{<span>🛈 {success}</span>}</Success>}
      {error && <Error>{<span>🛈 {error}</span>}</Error>}
      <div className="d-grid gap-2 mb-2 f-black">
        <Button type="submit" variant="warning">
          <strong className="f-black">Register</strong>
        </Button>
      </div>
      <hr />
      <Link to="/login" className="">
        <span className="">Already registered? click me!</span>
      </Link>
    </Form>
  );
}
