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
import ProductDetailDescription from "./ProductDetailDiscrption";
import { specialSale } from "../../data/data";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SpecialSaleProductDetail = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const productId = useParams().id;
  const { cart } = useCart();
  const cartDispatch = useCartDispatcher();

  const showProduct = () => {
    const show = specialSale.filter((item) => item.id == productId);
    setSelectedProduct(show);
  };

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

  useEffect(() => {
    showProduct();
  }, []);

  return (
    <>
      <ToastContainer />
      <main className="productDetail specialSale pb-3 position-absolute w-100">
        <Container>
          <Row className="align-items-center" dir="rtl">
            <Col xs={12} lg={9}>
              {selectedProduct.map((item) => (
                <>
                  <section className="discountShow d-flex d-md-block text-white position-relative start-0 my-3">
                    <Col md={2}>
                      <p className="mb-2 me-2 p-2 py-md-1 text-center">
                        Special Sale
                      </p>
                    </Col>
                    <Col md={3}></Col>
                  </section>
                  <section dir="rtl" className="d-md-flex align-items-center">
                    <div>
                      <p className="title m-0 pt-2 text-end">{item.name}</p>
                      <p className="description text-end mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus, vel. Asperiores animi neque blanditiis suscipit
                        beatae, exercitationem quam ducimus aliquid,
                        accusantium, voluptatibus aperiam fugiat? Aut, esse!
                        Porro ipsum non perspiciatis?
                      </p>
                      <p className="mt-2 price text-end">
                        <p className="mt-2 mb-0 mainPrice">
                          <span dir="rtl" className="me-2 discount">
                            {item.discount}%
                          </span>
                          <del>
                            <span className="m-0 fw-bold">{item.price}</span>
                          </del>
                        </p>
                        <p className="mb-2 offPrice">
                          <span className="ms-2">$</span>
                          <span className="mb-0 fw-bold">{item.offPrice}</span>
                        </p>
                      </p>
                      <div className="w-100 d-flex justify-content-end">
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
                </>
              ))}
            </Col>
            <Col xs={12} lg={3}>
              <section
                className="productDescription bg-white rounded mt-lg-3"
                dir="rtl"
              >
                <p className="title m-0 pt-2 pe-2 text-end">
                  Treatments & Facts
                </p>
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
                    descriptionTitle={"CAT FRIENDLINESS"}
                    icon={<RiGitlabLine className="ms-2" />}
                  />
                </Row>
              </section>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default SpecialSaleProductDetail;
