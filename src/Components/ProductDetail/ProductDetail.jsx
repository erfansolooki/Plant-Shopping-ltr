import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductDetail.css";
import { useCart, useCartDispatcher } from "../../Context/CartProvider";
import { checkInCart } from "../../Utils/checkInCart";
import { Link } from "react-router-dom";
import {
  RiArrowRightLine,
  RiDropLine,
  RiSunLine,
  RiHeart2Line,
  RiGitlabLine,
} from "react-icons/ri";
import { useProducts } from "../../Context/ProductsProvider";
import ProductDetailDescription from "./ProductDetailDiscrption";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const products = useProducts();
  const [selectedProduct, setSelectedProduct] = useState([]);
  const productId = useParams().id;
  const { cart } = useCart();
  const cartDispatch = useCartDispatcher();

  const showProduct = () => {
    const show = products.filter((item) => item.id == productId);
    setSelectedProduct(show);
  };

  const addProductHandler = (product) => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} added to your cart `, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    showProduct();
  }, []);

  return (
    <main className="productDetail pb-3">
      <ToastContainer />
      <Container>
        <Row className="align-items-center" dir="rtl">
          <Col xs={12} lg={9}>
            {selectedProduct.map((item) => (
              <section dir="rtl" className="d-md-flex align-items-center">
                <div>
                  <p className="title m-0 pt-2 text-end">{item.name}</p>
                  <p className="description text-end mt-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem magnam, dolorem tempore neque recusandae
                    minima corrupti nostrum et velit, pariatur obcaecati
                    possimus cum in atque molestias odit beatae suscipit.
                    Magnam.
                  </p>
                  <p className="mt-2 text-end price">
                    <span className="fw-bold">$</span>
                    <span className="mt-2 mb-0 fw-bold">{item.price}</span>
                  </p>
                  <div className="btn-container w-100 d-flex justify-content-end">
                    <button
                      className="addToCart"
                      onClick={
                        checkInCart(cart, item)
                          ? ""
                          : () => addProductHandler(item)
                      }
                    >
                      {checkInCart(cart, item) ? (
                        <div className="checkInCart">
                          <Link to="/cart">
                            <RiArrowRightLine className="text-white" />
                            <span className="ms-1">purchase</span>
                          </Link>
                        </div>
                      ) : (
                        <p className="text-white mb-0">Add To Cart</p>
                      )}
                    </button>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <img src={item.image} alt="" />
                </div>
              </section>
            ))}
          </Col>
          <Col xs={12} lg={3}>
            <section
              className="productDescription bg-white rounded mt-lg-3"
              dir="rtl"
            >
              <p className="title m-0 pt-2 pe-2 text-end">Treatments & Facts</p>
              <Row className="mt-3">
                <ProductDetailDescription
                  descriptionTitle={"WATERING"}
                  icon={<RiDropLine className="ms-2" />}
                />
                <ProductDetailDescription
                  descriptionTitle={"LIGHTS"}
                  icon={<RiSunLine className="ms-2" />}
                />
                <ProductDetailDescription
                  descriptionTitle={"BENEFITS"}
                  icon={<RiHeart2Line className="ms-2" />}
                />
                <ProductDetailDescription
                  descriptionTitle={" CAT FRIENDLINESS"}
                  icon={<RiGitlabLine className="ms-2" />}
                />
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ProductDetail;
