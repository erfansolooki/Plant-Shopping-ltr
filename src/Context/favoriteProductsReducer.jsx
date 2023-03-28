const favoriteProductsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE_PRODUCTS": {
      const cloneProducts = [...state.favoriteProducts];
      const findIndex = cloneProducts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findIndex < 0) {
        cloneProducts.push({ ...action.payload });
      } else {
        cloneProducts.splice(findIndex, 1);
      }
      return {
        ...state,
        favoriteProducts: cloneProducts,
      };
    }

    default:
      return state;
  }
};

export default favoriteProductsReducer;
