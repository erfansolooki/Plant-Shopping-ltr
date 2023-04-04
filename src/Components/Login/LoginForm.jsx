import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Input from "../../Common/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { loginServices } from "../../Services/loginService";
import { useAuthActions } from "../../Context/AuthProvider";
import { Container, Row, Col } from "react-bootstrap";
import "./Login.css";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("The email you entered is not in the correct format. Please check.")
    .required("Enter your email"),
  password: Yup.string().required("Enter your password"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const setAuth = useAuthActions();
  const onSubmit = async (values) => {
    try {
      const { data } = await loginServices(values);
      setAuth(data);
      navigate(-1);
      localStorage.setItem("authState", JSON.stringify(data));
      setError(null);
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <Container className="loginForm">
      <Row dir="ltr" className=" justify-content-center align-items-center">
        <Col xs={10} md={8} xl={7} xxl={6}>
          <div className="formContainer flex-column justify-content-center align-items-center">
            <div className="text-start">
              <p className="my-3 mx-0 title fw-bold text-end">Sign in</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <Input
                formik={formik}
                name="email"
                label="Email"
                type="email"
                placeholder={"Enter your email..."}
              />
              <Input
                formik={formik}
                name="password"
                label="Password"
                type="password"
                placeholder={"Enter your password..."}
              />
              <button
                type="submit"
                disabled={!formik.isValid}
                className="submitButton w-100 my-3 border-0 text-white py-2 px-3"
              >
                Sign in
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
          </div>
          <div className="d-flex justify-content-center signUp">
            <p className="ms-2">Don't have an account?</p>
            <Link to={`/SignUp`} className="fw-bold">
              Sign in
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
