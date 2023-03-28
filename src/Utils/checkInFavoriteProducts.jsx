export function checkInFavoriteProducts(favoriteProducts, product) {
  return favoriteProducts.find((item) => item.id === product.id);
}
