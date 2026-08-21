import { useContext } from "react";
import FavorisContext from "../contexts/FavorisContext";

export default function Favoris() {
  const { favoris } = useContext(FavorisContext);
  console.log("FAVORIS DANS LA PAGE :", favoris);

  return (
    <div className="favoris-page">
      <h1 className="primary-title">My recipies</h1>
      {favoris.length === 0 ? (
        <p className="aucun-favori">Vous n'avez aucun favori.</p>
      ) : (
        <div className="recipes-list">
          {favoris.map((recette) => (
            <div className="recipes-card-favoris" key={recette.id}>
              <img src={recette.image} alt={recette.nom} width="250" />

              <h3 className="primary-title">{recette.nom}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
