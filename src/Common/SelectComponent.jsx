import Select from "react-select";
import "./Select.css";

const SelectComponent = ({ defaultValue, onchange, options, placeholder }) => {
  return (
    <div dir="ltr">
      <div className="selectComponent pt-3 mx-2">
        <Select
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onchange}
          options={options}
        />
      </div>
    </div>
  );
};

export default SelectComponent;
