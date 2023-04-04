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
          There are no products in your cart
        </p>
        <p className="text-center emptyCartDescription px-3">
          Whenever you add a product to your cart on this page will be displayed
        </p>
      </Container>
    </main>
  );
};

export default EmptyCart;
