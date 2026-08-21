import { useParams, useNavigate } from "react-router";
import recettes from "../data/recettes_cuisine.json";
import clock from "../assets/images/clock.png";
import user from "../assets/images/user.png";
import loader from "../assets/images/loader.png";
import { Link } from "react-router";
import arrowHead from "../assets/images/Frame3.png";

export default function DetailRecette() {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("id de la rectte : ", id);

  const recette = recettes.find((recette) => recette.id === Number(id));
  return (
    <div className="detail-recette-page">
      {/* HERO DETAIL RECETTE*/}
      <div className="hero-detail-recette">
        {/* RETOUR A RECETTES */}
        <h1 className="detail-recipes-title">
          <button className="link-back" onClick={() => navigate(-1)}>
            <img src={arrowHead} alt="Retour" />
          </button>

          {recette.nom}
        </h1>

        <div className="image-detail-recette">
          <img
            className="hero-pic"
            src={recette.image}
            alt={recette.nom}
            width="250"
          />

          {/* CUISSON PERSONNES TEMPS */}
          <div className="tags-detail-recette">
            <div className="t">
              <div>
                <img src={clock} alt="Horloge" />
              </div>
              <div>{recette.temps_preparation}</div>
            </div>

            <div className="t">
              <div>
                <img src={loader} alt="Horloge" />
              </div>
              <div>{recette.temps_cuisson}</div>
            </div>

            <div className="t">
              <div>
                <img src={user} alt="Horloge" />
              </div>
              <div>{recette.nombre_personnes} personnes</div>
            </div>
          </div>
        </div>
      </div>
      {/* INGREDIENTS */}
      <div className=" ingredients-detail-recette">
        <h2>Ingredients</h2>
        {recette.ingredients.map((ingredient, index) => (
          <p key={index}>
            {ingredient.illustration} {ingredient.nom}
          </p>
        ))}
      </div>
      {/* STEPS  */}
      <div className="steps-detail-recette">
        <h2>Steps</h2>
        {recette.etapes.map((step, index) => (
          <p key={index}>{step}</p>
        ))}
      </div>
    </div>
  );
}
