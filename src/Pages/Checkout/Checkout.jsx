import { Container } from "react-bootstrap";
import { useCart } from "../../Context/CartProvider";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Checkout.css";

const CheckoutPage = () => {
  const [activeButton, setActiveButton] = useState("");
  const [post, setPost] = useState("");
  const { cart, total } = useCart();
  const originalTotalPrice = cart.length
    ? cart.reduce(
        (prevValue, currValue) =>
          prevValue + currValue.quantity * currValue.price,
        0
      )
    : 0;

  const handleClick = (event) => {
    setActiveButton(event.target.id);
  };

  const activePostButton = (event) => {
    setPost(event.target.id);
  };

  const toastify = () => {
    toast.success("سفارش شما با موفقیت ثبت شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <main className="checkout py-3">
      <Container className="d-flex justify-content-center">
        <section className="bg-white checkoutContainer" dir="rtl">
          <section className="cartSummary p-2">
            <div className="summaryItem d-flex justify-content-between fw-bold">
              <p> Subtotal :</p>
              <p>${originalTotalPrice}</p>
            </div>
            <div className="totalDiscount d-flex justify-content-between fw-bold">
              <p> Discount :</p>
              <p>${originalTotalPrice - total}</p>
            </div>
            <div className="netPrice d-flex justify-content-between fw-bold mt-2 border-bottom">
              <p>Grand total : </p>
              <p>${total}</p>
            </div>
          </section>
          <section className="ms-2">
            <section className="payments mt-2 pb-2">
              <p className="addressTitle fw-bold mb-1">Shipping Company </p>
              <section className="paymentButton">
                <button
                  key={1}
                  className={post === "1" ? "active" : undefined}
                  id={"1"}
                  onClick={activePostButton}
                >
                  DPD
                </button>
                <button
                  key={2}
                  className={post === "2" ? "active" : undefined}
                  id={"2"}
                  onClick={activePostButton}
                >
                  RoyalMail
                </button>

                <button
                  key={3}
                  className={post === "3" ? "active" : undefined}
                  id={"3"}
                  onClick={activePostButton}
                >
                  UPS
                </button>
                <button
                  key={4}
                  className={post === "4" ? "active" : undefined}
                  id={"4"}
                  onClick={activePostButton}
                >
                  FedEx
                </button>
              </section>
            </section>
            <section className="payments mt-2 pb-2">
              <p className="addressTitle fw-bold mb-1">Payment </p>
              <section className="paymentButton">
                <button
                  key={1}
                  className={activeButton === "1" ? "active" : undefined}
                  id={"1"}
                  onClick={handleClick}
                >
                  Paypal
                </button>
                <button
                  key={2}
                  className={activeButton === "2" ? "active" : undefined}
                  id={"2"}
                  onClick={handleClick}
                >
                  Crypto
                </button>

                <button
                  key={3}
                  className={activeButton === "3" ? "active" : undefined}
                  id={"3"}
                  onClick={handleClick}
                >
                  Credit
                </button>
              </section>
            </section>
          </section>

          <button
            className={
              activeButton && post
                ? "finalAcceptButton m-2 py-2"
                : "disableAcceptButton m-2 py-2"
            }
            onClick={activeButton && post ? toastify : null}
          >
            Place order
          </button>
        </section>
        <ToastContainer />
      </Container>
    </main>
  );
};

export default CheckoutPage;
