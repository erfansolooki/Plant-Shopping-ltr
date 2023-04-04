import { useProducts } from "../../Context/ProductsProvider";
import { RiHeart2Fill, RiAddLine, RiArrowRightLine } from "react-icons/ri";
import { Row, Col, Container } from "react-bootstrap";

import { useCart, useCartDispatcher } from "../../Context/CartProvider";
import { checkInCart } from "../../Utils/checkInCart";
import { Link } from "react-router-dom";
import Filter from "../../Components/Filter/Filter";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useFavorite,
  useFavoriteDispatcher,
} from "../../Context/FavoriteProducts";
import { checkInFavoriteProducts } from "../../Utils/checkInFavoriteProducts";

const ProductsPage = () => {
  const products = useProducts();
  const { cart } = useCart();
  const cartDispatch = useCartDispatcher();
  const favoriteDispatcher = useFavoriteDispatcher();
  const { favoriteProducts } = useFavorite();

  const addProductHandler = (product) => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} added to your cart`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const addFavoriteProductsHandler = (favoriteProducts) => {
    favoriteDispatcher({
      type: "ADD_TO_FAVORITE_PRODUCTS",
      payload: favoriteProducts,
    });
  };

  return (
    <>
      <Container className="pb-3">
        <ToastContainer />
        <Filter />
        <p className="title ms-0 text-end">Plant Apartment</p>
        <Row className="">
          {products.map((product) => (
            <Col xs={12} md={6} lg={4} xxl={3} className="g-4" key={product.id}>
              <div className="w-100 d-flex justify-content-center">
                <section className="productCart">
                  <section className="text-center">
                    <Link to={`/productsDetail/${product.id}`}>
                      <div className="popover__wrapper">
                        <div className="popover__content">
                          <p className="popover__message mb-0 p-1">
                            click for more detail
                          </p>
                        </div>
                        <div className="popover__title">
                          <img
                            src={product.image}
                            alt=""
                            className="productImage"
                          />
                        </div>
                      </div>
                    </Link>
                  </section>
                  <section
                    dir="rtl"
                    className="cartFooter d-flex align-items-end justify-content-between"
                  >
                    <button
                      className="addToCart"
                      onClick={
                        checkInCart(cart, product)
                          ? null
                          : () => addProductHandler(product)
                      }
                    >
                      {checkInCart(cart, product) ? (
                        <div className="checkInCart">
                          <Link to="/cart">
                            <RiArrowRightLine />
                            <span className="ms-1">purchase</span>
                          </Link>
                        </div>
                      ) : (
                        <RiAddLine className="addLine" />
                      )}
                    </button>
                    <section className="ps-2 productDescription text-end pe-2">
                      <RiHeart2Fill
                        onClick={() => addFavoriteProductsHandler(product)}
                        className={
                          checkInFavoriteProducts(favoriteProducts, product)
                            ? "favoriteProduct"
                            : null
                        }
                      />
                      <p className="mt-2">{product.name}</p>
                      <p className="mt-2">
                        <span className="ms-1 fw-bold">$</span>
                        <span className="mt-2 mb-0 fw-bold">
                          {product.price}
                        </span>
                      </p>
                    </section>
                  </section>
                </section>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductsPage;
