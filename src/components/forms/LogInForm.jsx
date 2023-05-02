import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { Success, Error } from "../Common";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup.string().email("Enter valid e-mail").required("Required"),
  password: yup
    .string()
    .min(8, "mínimo 8 carácteres")
    .max(30, "máximo 30 carácteres")
    .required("Required"),
});

export default function LoginForm() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const singIn = useSignIn();
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    const response = await axios
      .post("https://vite-commerce-back-end.vercel.app/login", values)
      .catch((err) => {
        if (err) setError(err.response.data.message);
        setSuccess(false);
      });
    if (response) {
      setError(false);
      setSuccess(response.data.message);
      formik.resetForm();
      setInterval(() => {
        navigate("/");
        window.location.reload();
      }, 3500);
      singIn({
        token: response.data.token,
        expiresIn: 86400,
        tokenType: "Bearer",
        //sets cookie w/user.name
        authState: response.data.name,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          id="email"
          name="email"
          type="email"
          placeholder="example@domain.com"
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
        <Form.Label>Password</Form.Label>
        <Form.Control
          id="password"
          name="password"
          type="password"
          placeholder="enter password"
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
      {success && <Success>{<span>🛈 {success}</span>}</Success>}
      {error && <Error>{<span>🛈 {error}</span>}</Error>}

      <Button
        type="submit"
        variant="warning"
        className="mx-auto w-100 py-2 mt-3"
      >
        <strong>Log in</strong>
      </Button>
      <hr />
      <Link to={"/register"} className="">
        <span className="">NOT registered? click me!</span>
      </Link>
      <br />
      <Link>
        <span className="">Forgot pass? click me!</span>
      </Link>
    </Form>
  );
}
