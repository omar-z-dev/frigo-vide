import homeIcon from "../assets/images/home.png";
import listIcon from "../assets/images/list.png";
import fridgeIcon from "../assets/images/book.png";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={homeIcon} alt="Accueil" />
      </Link>

      <Link to="/recettes">
        <img src={listIcon} alt="Recettes" />
      </Link>

      <Link to="/ingredients">
        <img src={fridgeIcon} alt="Frigo" />
      </Link>
    </footer>
  );
}
