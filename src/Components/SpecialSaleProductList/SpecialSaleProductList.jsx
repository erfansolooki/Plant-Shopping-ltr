import Container from "react-bootstrap/esm/Container";
import "./SpecialSaleProductList.css";
import { specialSale } from "../../data/data";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { RiHeart2Fill, RiAddLine, RiArrowLeftLine } from "react-icons/ri";
import { useState } from "react";
import { useCart, useCartDispatcher } from "../../Context/CartProvider";
import { checkInCart } from "../../Utils/checkInCart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useFavorite,
  useFavoriteDispatcher,
} from "../../Context/FavoriteProducts";
import { checkInFavoriteProducts } from "../../Utils/checkInFavoriteProducts";

const SpecialSaleProductList = () => {
  const { cart } = useCart();
  const cartDispatch = useCartDispatcher();
  const favoriteDispatcher = useFavoriteDispatcher();
  const { favoriteProducts } = useFavorite();

  const addProductHandler = (product) => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} به سبد خرید شما اضافه شد`, {
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
        <p className="title pt-4">فروش ویژه</p>
        <Row className="justify-content-center">
          {specialSale.map((product) => (
            <Col xs={12} md={6} lg={4} xxl={3} className="g-4" key={product.id}>
              <div className="w-100 d-flex justify-content-center">
                <section className="productCart mb-4">
                  <section className="d-flex justify-content-center mb-1">
                    <div className="discountPercent text-center text-white">
                      <p className="m-0 mt-1">{product.discount}%</p>
                      <p className="m-0">OFF</p>
                    </div>
                  </section>
                  <section className="text-center">
                    <Link to={`/specialSaleProductsDetail/${product.id}`}>
                      <div className="popover__wrapper">
                        <div className="popover__content">
                          <p className="popover__message mb-0 p-1">
                            برای جزییات بیشتر کلیک کنید
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
                  <section dir="rtl" className="cartFooter position-absolute">
                    <section className="ps-2 productDescription text-white">
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
                        <span className="ms-2">تومان</span>
                      </p>
                    </section>

                    <button
                      className="addToCart position-absolute"
                      onClick={
                        checkInCart(cart, product)
                          ? null
                          : () => addProductHandler(product)
                      }
                    >
                      {checkInCart(cart, product) ? (
                        <div className="checkInCart">
                          <Link to="/cart">
                            {" "}
                            <span className="me-1">ادامه خرید</span>
                            <RiArrowLeftLine />
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
