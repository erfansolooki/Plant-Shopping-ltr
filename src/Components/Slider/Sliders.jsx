import { useProducts } from "../../Context/ProductsProvider";
import { useCartDispatcher } from "../../Context/CartProvider";
import { Link } from "react-router-dom";
import "./Slider.css";
import { RiArrowRightLine } from "react-icons/ri";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "react-bootstrap/Image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const Slider = () => {
  const products = useProducts();

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {products.slice(0, 3).map((product) => (
        <SwiperSlide key={product.id}>
          <section className="d-lg-flex d-block">
            <section className="sliderImage">
              <Image src={product.sliderImage} alt="" fluid className="w-75" />
            </section>
            <section
              className="SliderDetail ps-xxl-0 d-lg-flex flex-column justify-content-center text-start d-none"
              dir="rtl"
            >
              <h2 className="mb-3 text-end">{product.name}</h2>
              <p className="description text-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi in
                similique cumque odit veniam maiores eum sapiente asperiores.
                Eius optio ratione inventore, non alias enim suscipit officiis
                quam saepe earum!
              </p>
              <p className="price text-end">
                <span>$</span>
                {product.price}
              </p>
              <Link to={`/productsDetail/${product.id}`} className="slider-btn">
                <button className="CTAButton d-flex flex-row justify-content-center align-items-center">
                  <span className="me-2">
                    <RiArrowRightLine />
                  </span>
                  <p className="m-0">Buy</p>
                </button>
              </Link>
            </section>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
