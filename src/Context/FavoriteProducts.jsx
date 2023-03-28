import { createContext, useReducer, useContext } from "react";
import favoriteProductsReducer from "./favoriteProductsReducer";

const FavoriteProductsContext = createContext();
const FavoriteProductsContextDispatcher = createContext();

const initialState = {
  favoriteProducts: [],
};

const FavoriteProducts = ({ children }) => {
  const [favorite, dispatch] = useReducer(
    favoriteProductsReducer,
    initialState
  );
  return (
    <FavoriteProductsContext.Provider value={favorite}>
      <FavoriteProductsContextDispatcher.Provider value={dispatch}>
        {children}
      </FavoriteProductsContextDispatcher.Provider>
    </FavoriteProductsContext.Provider>
  );
};

export default FavoriteProducts;

export const useFavorite = () => useContext(FavoriteProductsContext);
export const useFavoriteDispatcher = () =>
  useContext(FavoriteProductsContextDispatcher);
