import { useContext } from "react";
import FrigoContext from "../contexts/FrigoContext";
import recettes from "../data/recettes_cuisine.json";
import arrowHead from "../assets/images/Frame3.png";
import { Link } from "react-router";

export default function Recettes() {
  const { ingredients } = useContext(FrigoContext);

  /* recettes et ingredients sont des tableaux */
  console.log(recettes);
  console.log(ingredients);

  /*Filter cré un nouveau tableau  et somme renvoie true si au moins un des elements du tableau satisfait la condition */

  const recettesFiltrees = recettes.filter((recette) => {
    return ingredients.some((ingredientSaisi) =>
      recette.ingredients.some((ingredientRecette) =>
        ingredientRecette.nom
          .toLowerCase()
          .includes(ingredientSaisi.toLowerCase()),
      ),
    );
  });

  return (
    <div className="recipies-page">
      <div>
        <h1 className="suggested-recipes-title">
          <Link className="link-back" to="/ingredients">
            <img src={arrowHead} alt="Retour" />
          </Link>
          Suggested recipes
        </h1>
      </div>

      <div className="recipes-list">
        {recettesFiltrees.map((recette) => (
          <div className="recipes-card" key={recette.id}>
            <img src={recette.image} alt={recette.nom} width="250" />

            <h3>{recette.nom}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
