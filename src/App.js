import "./App.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Layout from "./Layout/Layout";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import CartPage from "./Pages/Cart/CartPage";
import Category from "./Pages/Category/Category";
import LoginPage from "./Pages/Login/LoginPage";
import SignUpPage from "./Pages/SignUp/SignUpPage";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import CartProvider from "./Context/CartProvider";
import ProductsProvider from "./Context/ProductsProvider";
import SpecialSaleProductDetail from "./Components/ProductDetail/SpecialSaleProductDetail";
import AuthProvider from "./Context/AuthProvider";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import CheckoutPage from "./Pages/Checkout/Checkout";
import FavoriteProducts from "./Context/FavoriteProducts";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <FavoriteProducts>
            <CartProvider>
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/category" element={<Category />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signUp" element={<SignUpPage />} />
                  <Route
                    path="/productsDetail/:id"
                    element={<ProductDetail />}
                  />
                  <Route
                    path="/specialSaleProductsDetail/:id"
                    element={<SpecialSaleProductDetail />}
                  />
                  <Route element={<ProtectedRoutes />}>
                    <Route path="/checkout" element={<CheckoutPage />} />
                  </Route>
                </Routes>
              </Layout>
            </CartProvider>
          </FavoriteProducts>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
