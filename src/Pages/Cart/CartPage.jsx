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
      <p className="title pt-2 text-end">Order Summary</p>
      <Row dir="ltr">
        <Col xs={12} md={8}>
          {cart.map((product) => (
            <section
              className="cart py-2 my-2 d-flex justify-content-between"
              key={product.id}
              dir="ltr"
            >
              <div className="d-flex">
                <img src={product.image} alt="" className="py-2" />
                <section className="d-flex align-items-center">
                  <section className="productDetail me-2 me-md-3">
                    <p className="mb-2">{product.name}</p>
                    <p className="mb-2">
                      {/* size */}
                      <span className="ms-1">{product.size}</span>
                    </p>
                    <p className="mt-2 price">
                      {product.price !== product.offPrice ? (
                        <p className="mt-2 mb-0 mainPrice">
                          <del>
                            <span className="m-0 fw-bold">{product.price}</span>
                          </del>
                          <span dir="ltr" className="me-2 discount">
                            {product.discount}%
                          </span>
                        </p>
                      ) : (
                        ""
                      )}
                      <p className="mb-2 offPrice">
                        <span className="me-2">$</span>
                        <span className="mb-0 fw-bold">{product.offPrice}</span>
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
                    className="subtractIcon ms-2"
                    onClick={() => decrementHandler(product)}
                  />
                  {product.quantity}
                  <RiAddLine
                    className="addIcon me-2"
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
        <p> Subtotal :</p>
        <p>${originalTotalPrice}</p>
      </div>
      <div className="totalDiscount d-flex justify-content-between fw-bold">
        <p> Discount :</p>
        <p>${originalTotalPrice - total}</p>
      </div>
      <div className="netPrice d-flex justify-content-between fw-bold mt-2">
        <p> Grand total : </p>
        <p>${total}</p>
      </div>
      <Link to="/checkout">
        <button className="btn primary w-100 my-2">
          <span className="ms-1">Pay</span>
          <span>${total}</span>
        </button>
      </Link>
    </section>
  );
};
