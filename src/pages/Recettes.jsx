import { useContext } from "react";
import FrigoContext from "../contexts/FrigoContext";
import recettes from "../data/recettes_cuisine.json";

export default function Recettes() {
  const { ingredients } = useContext(FrigoContext);

  console.log("Ingrédients recherchés :", ingredients);
  console.log("Toutes les recettes :", recettes);

  return (
    <div>
      <h1>Recettes disponibles</h1>
    </div>
  );
}
