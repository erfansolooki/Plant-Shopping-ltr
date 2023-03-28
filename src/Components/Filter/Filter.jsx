import { useEffect, useState } from "react";
import { useProductsDispatcher } from "../../Context/ProductsProvider";
import "./Filter.css";

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
    <section dir="rtl" className="sortButtons d-flex align-items-center pt-3">
      <p className=" me-2 ">مرتب سازی بر اساس :</p>
      <div className="buttons d-flex">
        <button
          key={4}
          className={active === "4" ? "sortActiveButton" : undefined}
          id={"4"}
          onClick={activeButtonHandler}
        >
          جدیدترین
        </button>
        <button
          key={1}
          className={active === "1" ? "sortActiveButton" : undefined}
          id={"1"}
          onClick={activeButtonHandler}
        >
          بیشترین قیمت
        </button>

        <button
          key={2}
          className={active === "2" ? "sortActiveButton" : undefined}
          id={"2"}
          onClick={activeButtonHandler}
        >
          کمترین قیمت
        </button>
        <button
          key={3}
          className={active === "3" ? "sortActiveButton" : undefined}
          id={"3"}
          onClick={activeButtonHandler}
        >
          پروفروش ترین
        </button>
      </div>
    </section>
  );
};

export default Filter;
