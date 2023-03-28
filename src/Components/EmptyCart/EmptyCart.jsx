import { Container, Image } from "react-bootstrap";
import "./EmptyCart.css";

const EmptyCart = () => {
  return (
    <main className="emptyCart">
      <Container>
        <div className="text-center">
          <Image
            className="mt-3"
            src="https://s6.uupload.ir/files/c60fea3ac3aab2e82c2f7ea901ef55f6_1_2vh2.png"
            alt="emptyCart"
            fluid
          />
        </div>
        <p className="emptyCartTitle text-center mb-2">
          هیچ محصولی در سبد خرید شما وجود ندارد
        </p>
        <p className="text-center emptyCartDescription px-3">
          هر زمان که محصولی را به سبد خرید خود اضاف کردید در این صفحه به شما
          نمایش داده خواهد شد
        </p>
      </Container>
    </main>
  );
};

export default EmptyCart;
