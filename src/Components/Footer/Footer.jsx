import "./Footer.css";
import logo from "../../data/Pictures/Group 336.png";
import { Link } from "react-router-dom";
import {
  RiInstagramLine,
  RiLinkedinLine,
  RiFacebookLine,
  RiTwitterLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <main className="footer text-center py-3">
      <p className="footerTitle my-2">فروشگاه آنلاین گیاهان آپارتمانی</p>
      <div className="plantShopLogo">
        <img src={logo} alt="logo" />
        <p className="plant">Plant</p>
        <p className="shopping">Shopping</p>
        <div className="navList">
          <ul className="ps-0 mt-2 d-md-flex justify-content-center" dir="rtl">
            <li>
              <Link to="/" className="me-2">
                {" "}
                خانه
              </Link>
            </li>
            <li>
              <Link to="/category">گیاهان آپارتمانی</Link>
            </li>
          </ul>

          <div className="d-flex justify-content-center mb-4" dir="rtl">
            <Link to="/login" className="me-4">
              ورود
            </Link>

            <Link to="/signUp">ثبت نام </Link>
          </div>
        </div>

        <div className="icons d-flex justify-content-center mb-4">
          <div>
            <RiInstagramLine className="instagramIcon" />
          </div>
          <div>
            <RiLinkedinLine className="linkedInIcon" />
          </div>
          <div>
            <RiFacebookLine className="faceBookIcon" />
          </div>
          <div>
            <RiTwitterLine className="twitterIcon" />
          </div>
        </div>

        <section className="footerDescription d-flex justify-content-center">
          <p className="w-75">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
          </p>
        </section>
      </div>
    </main>
  );
};

export default Footer;
