import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductDetail.css";
import { useCart, useCartDispatcher } from "../../Context/CartProvider";
import { checkInCart } from "../../Utils/checkInCart";
import { Link } from "react-router-dom";
import {
  RiArrowLeftLine,
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
                        فروش ویژه
                      </p>
                    </Col>
                    <Col md={3}></Col>
                  </section>
                  <section dir="rtl" className="d-md-flex align-items-center">
                    <div>
                      <p className="title m-0 pt-2">{item.name}</p>
                      <p className="description text-start mt-2">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                        و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                        متخصصان را می طلبد.
                      </p>
                      <p className="mt-2 price">
                        <p className="mt-2 mb-0 mainPrice">
                          <del>
                            <span className="m-0 fw-bold">{item.price}</span>
                          </del>
                          <span dir="rtl" className="ms-2 discount">
                            {item.discount}%
                          </span>
                        </p>
                        <p className="mb-2 offPrice">
                          <span className="mb-0 fw-bold">{item.offPrice}</span>
                          <span className="ms-2">تومان</span>
                        </p>
                      </p>
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
                              <span className="me-1">ادامه خرید</span>
                              <RiArrowLeftLine className="text-white" />
                            </Link>
                          </div>
                        ) : (
                          <p className="text-white mb-0">افزودن به سبد خرید</p>
                        )}
                      </button>
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
                <p className="title m-0 pt-2 ps-2">توضیحات و نگهداری</p>
                <Row className="mt-3">
                  <ProductDetailDescription
                    descriptionTitle={"آبیاری"}
                    icon={<RiDropLine className="ms-2" />}
                  />
                  <ProductDetailDescription
                    descriptionTitle={"نور"}
                    icon={<RiSunLine className="ms-2" />}
                  />
                  <ProductDetailDescription
                    descriptionTitle={"مزایا"}
                    icon={<RiHeart2Line className="ms-2" />}
                  />
                  <ProductDetailDescription
                    descriptionTitle={"حیوان دوست"}
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
