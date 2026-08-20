import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Accueil from "./pages/Accueil";
import Ingredients from "./pages/Ingredients";
import Recettes from "./pages/Recettes";
import DetailRecette from "./pages/DetailRecette";
import Favoris from "./pages/Favoris";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />

      <Route path="/ingredients" element={<Ingredients />} />

      <Route path="/recettes" element={<Recettes />} />

      <Route path="/recette/:id" element={<DetailRecette />} />

      <Route path="/favoris" element={<Favoris />} />
    </Routes>
  );
}

export default App;
