import "./Input.css";

const Input = ({ formik, name, label, type = "text", placeholder }) => {
  return (
    <div className="form-control p-0">
      <label className="mb-2">{label}</label>
      <input
        className="w-100"
        type={type}
        name={name}
        {...formik.getFieldProps(name)}
        placeholder={placeholder}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <div className="error"> {formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default Input;
