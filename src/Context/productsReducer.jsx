import _ from "lodash";
import { products } from "../data/data";

const productsReducer = (state, action) => {
  switch (action.type) {
    case "SUITABLE_FOR": {
      const value = action.suitableFor.value;
      if (value === "") {
        return products;
      } else {
        const suitableFor = products.filter(
          (product) => product.suitableFor.indexOf(value) >= 0
        );
        return suitableFor;
      }
    }
    case "SORT_BY": {
      const selectedId = action.payload;
      const cloneProducts = [...state];
      if (selectedId === "1") {
        return _.orderBy(cloneProducts, ["price"], ["desc"]);
      } else if (selectedId === "2") {
        return _.orderBy(cloneProducts, ["price"], ["asc"]);
      } else if (selectedId === "3") {
        return _.orderBy(cloneProducts, ["sales"], ["desc"]);
      } else {
        return _.orderBy(cloneProducts, ["id"], ["asc"]);
      }
    }

    default:
      return state;
  }
};

export default productsReducer;
