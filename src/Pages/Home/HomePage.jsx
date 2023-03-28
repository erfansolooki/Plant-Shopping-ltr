import ProductList from "../../Components/ProductList/ProductList";
import Sliders from "../../Components/Slider/Sliders";
import SpecialSaleProductList from "../../Components/SpecialSaleProductList/SpecialSaleProductList";
const HomePage = () => {
  return (
    <section>
      <Sliders />
      <ProductList />
      <SpecialSaleProductList />
    </section>
  );
};

export default HomePage;
