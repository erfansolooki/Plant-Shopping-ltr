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
    .max(8, "username should be less than 8 character")
    .required("Enter your username"),
  email: Yup.string()
    .email("The email you entered is not in the correct format. Please check.")
    .required("Enter your email"),
  phoneNumber: Yup.string()
    .required("Enter your phone number")
    .matches(
      /^[0-9]{11}$/,
      "The phone number you entered is not in the correct format. Please check."
    ),
  password: Yup.string().required("Enter your password"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password does not match")
    .required("Enter your confirm password"),
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
      <Row dir="ltr" className=" justify-content-center align-items-center">
        <Col xs={10} md={8} xl={7} xxl={6}>
          <div className="formContainer flex-column justify-content-center align-items-center">
            <div className="text-start">
              <p className="my-3 mx-0 title fw-bold">Sign up</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <Input
                formik={formik}
                name="name"
                label="Username"
                placeholder={"Enter your username..."}
              />
              <Input
                formik={formik}
                name="email"
                label="Email"
                type="email"
                placeholder={"Enter your email..."}
              />
              <Input
                formik={formik}
                name="phoneNumber"
                label="Phone number"
                type="tel"
                placeholder={"Enter your phone number..."}
              />
              <Input
                formik={formik}
                name="password"
                label="Password"
                type="password"
                placeholder={"Enter your password..."}
              />
              <Input
                formik={formik}
                name="passwordConfirmation"
                label="Confirm password"
                type="password"
                placeholder={"Enter your confirm password..."}
              />
              <button
                style={{ width: "100%" }}
                type="submit"
                disabled={!formik.isValid}
                className="submitButton w-100 my-3 border-0 text-white py-2 px-3"
              >
                Sign up
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
          </div>
          <div className="d-flex justify-content-center signUp">
            <p className="ms-2">Already have an account?</p>
            <Link to="/Login" className="fw-bold">
              Sign in
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;
