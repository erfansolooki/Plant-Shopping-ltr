import Container from "react-bootstrap/esm/Container";
import { specialSale } from "../../data/data";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { RiHeart2Fill, RiAddLine, RiArrowRightLine } from "react-icons/ri";
import { useCart, useCartDispatcher } from "../../Context/CartProvider";
import { checkInCart } from "../../Utils/checkInCart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useFavorite,
  useFavoriteDispatcher,
} from "../../Context/FavoriteProducts";
import { checkInFavoriteProducts } from "../../Utils/checkInFavoriteProducts";
// Styles
import styles from "./SpecialSaleProductList.module.scss";

const SpecialSaleProductList = () => {
  const { cart } = useCart();
  const cartDispatch = useCartDispatcher();
  const favoriteDispatcher = useFavoriteDispatcher();
  const { favoriteProducts } = useFavorite();

  const addProductHandler = (product) => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} Added to your cart`, {
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
    <main className="specialSaleProductList">
      <ToastContainer />
      <Container>
        <p className="title pt-4 text-end">Special Sale</p>
        <Row className="justify-content-center">
          {specialSale.map((product) => (
            <Col xs={12} md={6} lg={4} xxl={3} className="g-4" key={product.id}>
              <div
                className={`w-100 d-flex justify-content-center ${
                  styles[`_container`]
                }`}
              >
                <section
                  className={`mb-4 position-relative ${
                    styles[`_product-cart`]
                  }`}
                >
                  <section className="d-flex justify-content-center mb-1">
                    <div
                      className={` text-center text-white ${
                        styles[`_discountPercent`]
                      }`}
                    >
                      <p className="m-0 mt-1">{product.discount}%</p>
                      <p className="m-0">OFF</p>
                    </div>
                  </section>
                  <section className="text-center">
                    <Link to={`/specialSaleProductsDetail/${product.id}`}>
                      <div className={styles[`_popover-wrapper`]}>
                        <div className={styles[`_popover-content`]}>
                          <p
                            className={`mb-0 p-1 ${
                              styles[`_popover-message `]
                            }`}
                          >
                            click for more detail
                          </p>
                        </div>
                        <div className="popover__title">
                          <img
                            src={product.image}
                            alt=""
                            className={styles[`_productImage`]}
                          />
                        </div>
                      </div>
                    </Link>
                  </section>
                  <section
                    dir="rtl"
                    className={`d-flex justify-content-end ${
                      styles[`_cart-footer`]
                    }`}
                  >
                    <section className="pe-2 d-flex flex-column align-items-end productDescription text-white">
                      <RiHeart2Fill
                        onClick={() => addFavoriteProductsHandler(product)}
                        className={
                          checkInFavoriteProducts(favoriteProducts, product)
                            ? "favoriteProduct"
                            : null
                        }
                      />
                      <p className="mt-2">{product.name}</p>
                      <p className="mt-2 mb-0 mainPrice">
                        <del>
                          {" "}
                          <span className="m-0 fw-bold">{product.price}</span>
                        </del>
                      </p>
                      <p className="mb-2">
                        <span className="mb-0 fw-bold">{product.offPrice}</span>
                        <span className="ms-2">$</span>
                      </p>
                    </section>

                    <button
                      className={`position-absolute d-flex justify-content-center align-items-center ${
                        styles[`_addTo-cart`]
                      }`}
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
                  </section>
                </section>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default SpecialSaleProductList;
