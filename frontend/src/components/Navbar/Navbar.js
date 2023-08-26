import { FaInstagram, FaVk } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <img src="logo.png" alt="Logo" />

      <ul>
        <li onClick={() => scrollToSection("advantages")}>Преимущества</li>
        <li onClick={() => scrollToSection("catalog")}>Каталог</li>
        <li onClick={() => scrollToSection("designsolutions")}>Решения</li>
        <li onClick={() => scrollToSection("photoprocess")}>Процесс</li>
        <li onClick={() => scrollToSection("certificates")}>Сертификаты</li>
        <li onClick={() => scrollToSection("footer")}>Контактная информация</li>
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
