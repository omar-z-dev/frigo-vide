import { useContext } from "react";
import FavorisContext from "../contexts/FavorisContext";
import homeIcon from "../assets/images/home.png";
import listIcon from "../assets/images/list.png";
import fridgeIcon from "../assets/images/book.png";
import { Link } from "react-router";

export default function Footer() {
  const { favoris } = useContext(FavorisContext);
  return (
    <footer className="footer">
      <Link to="/">
        <img src={homeIcon} alt="Accueil" />
      </Link>

      <Link to="/recettes">
        <img src={listIcon} alt="Recettes" />
      </Link>

      <Link to="/favoris" className="favoris-icon">
        <img src={fridgeIcon} alt="Favoris" />

        <span className="favoris-count">{favoris.length}</span>
      </Link>
    </footer>
  );
}
