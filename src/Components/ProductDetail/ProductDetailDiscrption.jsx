import { Col } from "react-bootstrap";

const ProductDetailDescription = ({ icon, descriptionTitle }) => {
  return (
    <Col xs={12} md={6} lg={12}>
      <div className="d-flex">
        <section className="ms-3 mainDescription">
          <p className="mb-2 descriptionTitle text-end">{descriptionTitle}</p>
          <p className="me-2 text-end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            similique mollitia est, sit consequuntur facere ipsa eligendi,
            voluptatem esse, magnam saepe a quas commodi. Unde odio aliquam at
            sapiente quod.
          </p>
        </section>
        <section className="me-2">{icon}</section>
      </div>
    </Col>
  );
};

export default ProductDetailDescription;
