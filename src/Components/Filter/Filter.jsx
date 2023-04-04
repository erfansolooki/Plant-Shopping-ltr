import { useEffect, useState } from "react";
import { useProductsDispatcher } from "../../Context/ProductsProvider";
import "./Filter.css";
// React-icons
import * as HiIcons from "react-icons/hi";

const Filter = () => {
  const [active, setActive] = useState(null);
  const dispatcher = useProductsDispatcher();

  useEffect(() => {
    setActive("4");
    dispatcher({
      type: "SORT_BY",
      payload: "4",
    });
  }, []);

  const activeButtonHandler = (event) => {
    setActive(event.target.id);
    dispatcher({
      type: "SORT_BY",
      payload: event.target.id,
    });
  };

  return (
    <section dir="ltr" className="sortButtons d-flex align-items-center pt-3">
      <p className=" me-2 ">Sort by:</p>
      <div className="buttons d-flex">
        <button
          key={4}
          className={`d-flex align-items-center ${
            active === "4" ? "sortActiveButton" : undefined
          }`}
          id={"4"}
          onClick={activeButtonHandler}
        >
          newest
        </button>
        <button
          key={1}
          className={`d-flex align-items-center ${
            active === "1" ? "sortActiveButton" : undefined
          }`}
          id={"1"}
          onClick={activeButtonHandler}
        >
          price
          <span className="d-flex">
            <HiIcons.HiOutlineArrowNarrowUp />
          </span>
        </button>

        <button
          key={2}
          className={`d-flex align-items-center ${
            active === "2" ? "sortActiveButton" : undefined
          }`}
          id={"2"}
          onClick={activeButtonHandler}
        >
          price
          <span className="d-flex">
            <HiIcons.HiOutlineArrowNarrowDown />
          </span>
        </button>
        <button
          key={3}
          className={`d-flex align-items-center ${
            active === "3" ? "sortActiveButton" : undefined
          }`}
          id={"3"}
          onClick={activeButtonHandler}
        >
          Sale
          <span className="d-flex">
            <HiIcons.HiOutlineArrowNarrowDown />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Filter;
