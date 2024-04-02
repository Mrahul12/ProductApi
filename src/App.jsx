import React from "react";
import Collectionapi from "./Component/Collectionapi";
import "./App.css";

// =====Api of cloth collection========
const API='https://api.escuelajs.co/api/v1/products';
function App() {

  return (
    <>
      <h1 className="text-center w-[100vw] fixed bg-green-500 p-4 text-2xl font-semibold">
        Collection Cloth and Electronic material 
        <a href="" className="text-center w-[100vw]  bg-green-900 p-1 rounded text-white text-2xl font-semibold">GithUb</a>
      </h1>

      <header className="flex flex-col flex-wrap justify-center items-center pt-[80px] bg-emerald-200 " key={Math.random()*9999}>
        <Collectionapi />
      </header>
    </>
  );
}

export default App;
