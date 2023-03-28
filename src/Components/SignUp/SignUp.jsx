import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../Common/Input/Input";
// import "./Signup.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signUpService } from "../../Services/SignUpServices";
import { useState } from "react";
import { useAuthActions } from "../../Context/AuthProvider";
import { Container, Row, Col } from "react-bootstrap";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .max(8, "نام کاربری باید کمتر از 8 کاراکتر باشد")
    .required("نام کاربری را وارد کنید"),
  email: Yup.string()
    .email("ایمیل وارد شده اشتباه است")
    .required("ایمیل را وارد کنید"),
  phoneNumber: Yup.string()
    .required("شماره موبایل را وارد کنید")
    .matches(/^[0-9]{11}$/, "شماره موبایل اشتباه است"),
  password: Yup.string().required("رمز عبور را وارد کنید"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "رمز عبور همخوانی ندارد")
    .required("تکرار رمز عبور را وارد کنید"),
});

const SignUpForm = () => {
  const [error, setError] = useState("");
  const setAuth = useAuthActions();

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { name, email, password, phoneNumber } = values;
    const userData = {
      name,
      email,
      password,
      phoneNumber,
    };

    try {
      const { data } = await signUpService(userData);
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
  //   const [formValues, setFormValues] = useState(null);
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <Container>
      <Row dir="rtl" className=" justify-content-center align-items-center">
        <Col xs={10} md={8} xl={7} xxl={6}>
          <div className="formContainer flex-column justify-content-center align-items-center">
            <div className="text-start">
              <p className="my-3 mx-0 title fw-bold">ثبت نام</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <Input
                formik={formik}
                name="name"
                label="نام کاربری"
                placeholder={"نام کاربری خود را وارد کنید"}
              />
              <Input
                formik={formik}
                name="email"
                label="ایمیل"
                type="email"
                placeholder={"ایمیل خود را وارد کنید"}
              />
              <Input
                formik={formik}
                name="phoneNumber"
                label="شماره موبایل"
                type="tel"
                placeholder={"شماره موبایل خود را وارد کنید"}
              />
              <Input
                formik={formik}
                name="password"
                label="عبور"
                type="password"
                placeholder={"رمز عبور خود را وارد کنید"}
              />
              <Input
                formik={formik}
                name="passwordConfirmation"
                label="تکرار رمز عبور"
                type="password"
                placeholder={"رمز عبور خود را دوباره وارد کنید"}
              />
              <button
                style={{ width: "100%" }}
                type="submit"
                disabled={!formik.isValid}
                className="submitButton w-100 my-3 border-0 text-white py-2 px-3"
              >
                ثبت نام
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
          </div>
          <div className="d-flex justify-content-center signUp">
            <p className="me-2">از قبل حساب کاربری دارید ؟</p>
            <Link to="/Login" className="fw-bold">
              ورود
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;
