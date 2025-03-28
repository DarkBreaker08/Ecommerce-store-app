import { Link } from "@tanstack/react-router";
import logo from "../../../assets/logo.png";

export const Header = () => {
  return (
    <section className="header">
      <a href="#">
        <img src={logo} alt="shop logo" />
      </a>

      <ul className="navbar">
        <li>
          <Link to=".">Home</Link>
        </li>
        <li>
          <Link to=".">Shop</Link>
        </li>
        <li>
          <Link to=".">Blog</Link>
        </li>
        <li>
          <Link to=".">About</Link>
        </li>
        <li>
          <Link to=".">Contact</Link>
        </li>
        <li>
          <Link to=".">
            <i className="far fa-shopping-bag"></i>
          </Link>
        </li>
      </ul>
    </section>
  );
};
