import { FaInstagram, FaVk } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img src="logo.png" alt="Logo" />

      <ul>
        <li>
          <a href="#home">Главная</a>
        </li>
        <li>
          <a href="#about">О нас</a>
        </li>
        <li>
          <a href="#contact">Контакты</a>
        </li>
      </ul>

      <div className="nav__contact">
        <p>+7 999 123 45 67</p>

        <a href="https://instagram.com">
          <FaInstagram />
        </a>

        <a href="https://vk.com">
          <FaVk />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
