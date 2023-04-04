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
      <p className="footerTitle my-2">Online apartment plant store</p>
      <div className="plantShopLogo">
        <img src={logo} alt="logo" />
        <p className="plant">Plant</p>
        <p className="shopping">Shopping</p>
        <div className="navList">
          <ul className="ps-0 mt-2 d-md-flex justify-content-center" dir="rtl">
            <li>
              <Link to="/" className="me-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/category">Apartment plants</Link>
            </li>
          </ul>

          <div className="d-flex justify-content-center mb-4" dir="rtl">
            <Link to="/login" className="me-4">
              Sign in
            </Link>

            <Link to="/signUp">Sign up</Link>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime enim
            eos molestias! Praesentium reiciendis totam recusandae laboriosam in
            iusto soluta sunt perspiciatis atque repellendus labore voluptate,
            nobis perferendis illo repellat!
          </p>
        </section>
      </div>
    </main>
  );
};

export default Footer;
