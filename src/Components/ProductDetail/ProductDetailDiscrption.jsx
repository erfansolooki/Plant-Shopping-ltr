import { Col } from "react-bootstrap";

const ProductDetailDescription = ({ icon, descriptionTitle }) => {
  return (
    <Col xs={12} md={6} lg={12}>
      <div className="d-flex">
        <section>{icon}</section>
        <section className="ms-3 mainDescription">
          <p className="mb-2 descriptionTitle">{descriptionTitle}</p>
          <p className="me-2">
            {" "}
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است،
          </p>
        </section>
      </div>
    </Col>
  );
};

export default ProductDetailDescription;
