import { useState } from "react";
import FrigoContext from "./FrigoContext";

export default function FrigoProvider({ children }) {
  const [ingredients, setIngredients] = useState([]);

  return (
    <FrigoContext.Provider value={{ ingredients, setIngredients }}>
      {children}
    </FrigoContext.Provider>
  );
}
