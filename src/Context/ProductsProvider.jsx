import { createContext, useContext, useReducer } from "react";
import { products } from "../data/data";
import productsReducer from "./productsReducer";

const ProductsContext = createContext();
const ProductsContextDispatcher = createContext();

const ProductsProvider = ({ children }) => {
  const [product, dispatch] = useReducer(productsReducer, products);
  return (
    <ProductsContext.Provider value={product}>
      <ProductsContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsDispatcher = () =>
  useContext(ProductsContextDispatcher);
