import './App.css';
import React, { useState } from "react";

const foods = [
  "Pierogis",
  "Spaghetti",
  "Goulash",
  "Enchilada",
  "Chimichanga",
  "Dumplings",
  "Pancakes",
  "Waffles",
  "Bananas",
  "Bagels",
  "Tacos",
  "Cheetos",
  "Salsa",
  "Lasagna",
  "Ravioli",
  "Tater Tots",
  "Breadsticks",
  "Falafel",
  "Clams",
  "Petit Fours",
  "Egg rolls",
  "Tostadas",
  "Schwarma",
  "Empanadas",
  "Gnocchi",
  "Samosas",
  "Fluffernutter",
  "Hamburgers",
  "Vegemite",
  "Muffuletta",
  "Pastrami",
  "Souvlaki"
]

function App() {
  const [name, setName] = useState("");
  const [mobName, setMobName] = useState("");

  function changeHandler(e) {
    setName(e.target.value);
  }

  function submit(e) {
    e.preventDefault();
    setName("");
    function pickName() {
      const randomNumber = Math.floor(Math.random()*33);
      return `${name} ${foods[randomNumber]}`;
    }
    setMobName(pickName());
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={changeHandler}
          />
        {mobName && 
          <div className="results">
            <p className="name">Congratulations! Your mob name is {mobName}!</p>
          </div>
        }
      </form>
    </div>
  );
}

export default App;
