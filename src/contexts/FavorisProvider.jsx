import { useState } from "react";
import FavorisContext from "./FavorisContext";

export default function FavorisProvider({ children }) {
  const [favoris, setFavoris] = useState([]);

  function ajouterFavoris(recette) {
    console.log("RECETTE AJOUTÉE :", recette);
    const existeDeja = favoris.some((favori) => favori.id === recette.id);

    if (existeDeja) {
      return;
    }
    setFavoris([...favoris, recette]);
  }

  return (
    <FavorisContext.Provider value={{ favoris, ajouterFavoris }}>
      {children}
    </FavorisContext.Provider>
  );
}
