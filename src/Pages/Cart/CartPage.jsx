import { Container, Row } from "react-bootstrap";
import { useCart, useCartDispatcher } from "../../Context/CartProvider";
import { RiAddLine, RiCloseLine, RiSubtractLine } from "react-icons/ri";
import { Col } from "react-bootstrap";
import "./Cart.css";
import EmptyCart from "../../Components/EmptyCart/EmptyCart";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, total } = useCart();
  const cartDispatch = useCartDispatcher();

  const incrementHandler = (product) => {
    cartDispatch({ type: "INCREMENT", payload: product });
  };

  const decrementHandler = (product) => {
    cartDispatch({ type: "DECREMENT", payload: product });
  };

  const removeHandler = (product) => {
    cartDispatch({ type: "REMOVE_PRODUCT", payload: product });
  };

  if (!cart.length) return <EmptyCart />;

  return (
    <Container>
      <p className="title pt-2">سبد خرید</p>
      <Row dir="rtl">
        <Col xs={12} md={8}>
          {cart.map((product) => (
            <section
              className="cart py-2 my-2 d-flex justify-content-between"
              key={product.id}
              dir="rtl"
            >
              <div className="d-flex">
                <img src={product.image} alt="" className="py-2" />
                <section className="d-flex align-items-center">
                  <section className="productDetail ms-2 ms-md-3">
                    <p className="mb-2">{product.name}</p>
                    <p className="mb-2">
                      سایز
                      <span className="ms-1">{product.size}</span>
                    </p>
                    <p className="mt-2 price">
                      {product.price !== product.offPrice ? (
                        <p className="mt-2 mb-0 mainPrice">
                          <del>
                            <span className="m-0 fw-bold">{product.price}</span>
                          </del>
                          <span dir="rtl" className="ms-2 discount">
                            {product.discount}%
                          </span>
                        </p>
                      ) : (
                        ""
                      )}
                      <p className="mb-2 offPrice">
                        <span className="mb-0 fw-bold">{product.offPrice}</span>
                        <span className="ms-2">تومان</span>
                      </p>
                    </p>
                  </section>
                </section>
              </div>
              <section className="d-flex flex-column justify-content-evenly align-items-end">
                <RiCloseLine
                  className="closeIcon"
                  onClick={() => removeHandler(product)}
                />
                <section className="d-flex align-items-center">
                  <RiSubtractLine
                    className="subtractIcon me-2"
                    onClick={() => decrementHandler(product)}
                  />
                  {product.quantity}
                  <RiAddLine
                    className="addIcon ms-2"
                    onClick={() => incrementHandler(product)}
                  />
                </section>
              </section>
            </section>
          ))}
        </Col>
        <Col xs={12} md={4}>
          <section className="cartTotal">
            <CartSummary cart={cart} total={total} />
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;

const CartSummary = ({ total, cart }) => {
  const originalTotalPrice = cart.length
    ? cart.reduce(
        (prevValue, currValue) =>
          prevValue + currValue.quantity * currValue.price,
        0
      )
    : 0;

  return (
    <section className="cartSummary">
      <div className="summaryItem d-flex justify-content-between fw-bold">
        <p>مجموع خرید :</p>
        <p>
          {originalTotalPrice}
          <span className="ms-1">تومان</span>
        </p>
      </div>
      <div className="totalDiscount d-flex justify-content-between fw-bold">
        <p>مجموع تخفیف :</p>
        <p>
          {originalTotalPrice - total}
          <span className="ms-1">تومان</span>
        </p>
      </div>
      <div className="netPrice d-flex justify-content-between fw-bold mt-2">
        <p>قابل پرداخت : </p>
        <p>
          {total}
          <span className="ms-1">تومان</span>
        </p>
      </div>
      <Link to="/checkout">
        <button className="btn primary w-100 my-2">ادامه فرآیند خرید</button>
      </Link>
    </section>
  );
};
