import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import FrigoContext from "../contexts/FrigoContext";

export default function Ingredients() {
  /* state ingredient et ingredients */
  const { ingredients, setIngredients } = useContext(FrigoContext);
  const [ingredient, setIngredient] = useState("");
  const navigate = useNavigate();

  function ajouterIngredient() {
    /* si l'ingredient est vide, ne rien faire */
    if (ingredient.trim() === "") {
      return;
    }

    /* ajouter l'ingredient au state ingredients */
    setIngredients([...ingredients, ingredient]);

    /* remettre le state ingredient à une chaîne vide apres ajout de l'ingredient  */
    setIngredient("");
  }

  function supprimerIngredient(index) {
    /* supprimer l'ingredient du state ingredients */
    /* filter() permet de supprimer un item d'un tableau ici si l'index est different de l'index de l'item a supprimer */
    const nouvelleListe = ingredients.filter((item, i) => i !== index);

    /* mettre a jour le state ingredients avec la nouvelleListe */
    setIngredients(nouvelleListe);
  }

  function voirRecettes() {
    if (ingredients.length === 0) {
      alert("Ajoute au moins un ingrédient");
      return;
    }

    navigate("/recettes");
  }

  return (
    <div className="ingredients">
      <h1>Add ingredients</h1>
      <input
        type="text"
        value={ingredient}
        onChange={(event) => setIngredient(event.target.value)}
        placeholder="Ex : tomate"
      />
      {/* bouton pour ajouter l'ingrédient */}
      <button className="btn-primary" onClick={ajouterIngredient}>
        Add ingredients
      </button>

      {/* afficher la liste des ingrédients */}
      <div className="ingredients-list">
        <h2 className="secondary-title">In my fridge there a some :</h2>
        <ul className="ingredients-list-detail">
          {ingredients.map((item, index) => (
            <li className="ing-list" key={index}>
              {item}

              {/* bouton pour supprimer l'ingrédient */}
              <button
                className="btn-supprimer"
                onClick={() => supprimerIngredient(index)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* bouton voir recettes */}
      <button className="btn-primary" onClick={voirRecettes}>
        GO
      </button>
    </div>
  );
}
