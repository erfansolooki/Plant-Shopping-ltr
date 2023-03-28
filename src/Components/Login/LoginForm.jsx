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
    .email("نوع ایمیل وارد شده اشتباه است")
    .required("ایمیل وارد کنید"),
  password: Yup.string().required("رمز عبور وارد کنید"),
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
      <Row dir="rtl" className=" justify-content-center align-items-center">
        <Col xs={10} md={8} xl={7} xxl={6}>
          <div className="formContainer flex-column justify-content-center align-items-center">
            <div className="text-start">
              <p className="my-3 mx-0 title fw-bold">ورود</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <Input
                formik={formik}
                name="email"
                label="ایمیل"
                type="email"
                placeholder={"ایمیل خود را وارد کنید"}
              />
              <Input
                formik={formik}
                name="password"
                label="رمز عبور"
                type="password"
                placeholder={"رمز عبور خود را وارد کنید"}
              />
              <button
                type="submit"
                disabled={!formik.isValid}
                className="submitButton w-100 my-3 border-0 text-white py-2 px-3"
              >
                ورود
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
          </div>
          <div className="d-flex justify-content-center signUp">
            <p className="me-2">هنوز حساب کاربری ندارید؟</p>
            <Link to={`/SignUp`} className="fw-bold">
              ثبت نام
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
