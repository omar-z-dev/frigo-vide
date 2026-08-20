import imageFrigo from "../assets/images/frigo.png";
import { Link } from "react-router";
export default function Accueil() {
  return (
    <div className="accueil-page">
      <h1>Empty Fridge</h1>
      <img src={imageFrigo} alt="Frigo" />
      <p>
        The app that helps you eat better by using your leftovers and saving as
        much as possible!
      </p>
      {/* bouton pour aller dans ingredients */}
      <Link to="/ingredients">
        <button className="btn-primary">What’s in your fridge?</button>
      </Link>
    </div>
  );
}
