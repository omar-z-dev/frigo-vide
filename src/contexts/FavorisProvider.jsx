import { useState } from "react";
import FavorisContext from "./FavorisContext";

export default function FavorisProvider({ children }) {
  const [favoris, setFavoris] = useState([]);

  /*Fonction pour ajouter un favori*/
  function ajouterFavoris(recette) {
    console.log("RECETTE AJOUTÉE :", recette);
    const existeDeja = favoris.some((favori) => favori.id === recette.id);

    if (existeDeja) {
      return;
    }
    setFavoris([...favoris, recette]);
  }
  /*Fonction pour supprimer un favori*/
  function supprimerFavoris(id) {
    const nouveauxFavoris = favoris.filter((favori) => favori.id !== id);

    setFavoris(nouveauxFavoris);
  }

  return (
    <FavorisContext.Provider
      value={{ favoris, ajouterFavoris, supprimerFavoris }}
    >
      {children}
    </FavorisContext.Provider>
  );
}
