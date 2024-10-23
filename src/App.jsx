import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Carousel from "./Components/Carousel/Carousel";
import Category from "./Components/Category/Category.jsx";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Category />
    </div>
  );
}

export default App;
