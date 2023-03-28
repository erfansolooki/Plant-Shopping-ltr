const cartProvider = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const cloneProducts = [...state.cart];
      const findIndex = cloneProducts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findIndex < 0) {
        cloneProducts.push({ ...action.payload, quantity: 1 });
      } else {
        const selectedProduct = { ...cloneProducts[findIndex] };
        selectedProduct.quantity++;
        cloneProducts[findIndex] = selectedProduct;
      }

      return {
        ...state,
        cart: cloneProducts,
        total: state.total + action.payload.offPrice,
      };
    }
    case "INCREMENT": {
      const cloneProducts = [...state.cart];
      const findIndex = cloneProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      const selectedProduct = { ...cloneProducts[findIndex] };
      selectedProduct.quantity++;
      cloneProducts[findIndex] = selectedProduct;
      return {
        ...state,
        cart: cloneProducts,
        total: state.total + action.payload.offPrice,
      };
    }
    case "DECREMENT": {
      const cloneProducts = [...state.cart];
      const findIndex = cloneProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      const selectedProduct = { ...cloneProducts[findIndex] };

      if (selectedProduct.quantity === 1) {
        const filterProducts = cloneProducts.filter(
          (product) => product.id !== action.payload.id
        );
        return {
          ...state,
          cart: filterProducts,
          total: state.total - action.payload.offPrice,
        };
      } else {
        selectedProduct.quantity--;
        cloneProducts[findIndex] = selectedProduct;
      }
      return {
        ...state,
        cart: cloneProducts,
        total: state.total - action.payload.offPrice,
      };
    }
    case "REMOVE_PRODUCT": {
      const cloneProducts = [...state.cart];
      const filterProducts = cloneProducts.filter(
        (product) => product.id !== action.payload.id
      );
      return {
        ...state,
        cart: filterProducts,
        total: state.total - action.payload.offPrice,
      };
    }

    default:
      return state;
  }
};

export default cartProvider;
