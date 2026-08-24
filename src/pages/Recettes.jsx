import { useContext } from "react";
import FrigoContext from "../contexts/FrigoContext";
import recettes from "../data/recettes_cuisine.json";
import arrowHead from "../assets/images/Frame3.png";
import { Link } from "react-router";
import FavorisContext from "../contexts/FavorisContext";
import { useNavigate } from "react-router";

export default function Recettes() {
  const { ingredients } = useContext(FrigoContext);
  const { favoris, ajouterFavoris } = useContext(FavorisContext);
  const navigate = useNavigate();
  /* recettes et ingredients sont des tableaux */
  console.log(recettes);
  console.log(ingredients);
  /*fonction pour echaper les accent et majuscules*/
  function sansAccent(texte) {
    return texte
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  /*Filter cré un nouveau tableau  et somme renvoie true si au moins un des elements du tableau satisfait la condition */

  const recettesFiltrees = recettes.filter((recette) => {
    return ingredients.every((ingredientSaisi) =>
      recette.ingredients.some(
        (ingredientRecette) =>
          sansAccent(ingredientRecette.nom) === sansAccent(ingredientSaisi),
      ),
    );
  });

  return (
    <div className="recipies-page">
      <div>
        <h1 className="suggested-recipes-title primary-title">
          <Link className="link-back" to="/ingredients">
            <img src={arrowHead} alt="Retour" />
          </Link>
          Suggested recipes
        </h1>
      </div>

      <div className="recipes-list">
        {recettesFiltrees.map((recette) => {
          /*dejaFavori est égal à true si le favoris est le meme que recette false sinon */
          const dejaFavori = favoris.some((favori) => favori.id === recette.id);

          return (
            <div
              className="recipes-card"
              key={recette.id}
              onClick={() => navigate(`/recette/${recette.id}`)}
            >
              <img src={recette.image} alt={recette.nom} />

              <h3 className="primary-title">{recette.nom}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
