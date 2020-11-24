import './App.css';
import React, { useState } from "react";
import { TwitterShareButton } from 'react-share';

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
      const randomNumber = Math.floor(Math.random() * 32);
      return `${name} ${foods[randomNumber]}`;
    }
    setMobName(pickName());
  }

  return (
    <main className="App">
      <img className="bg" src="/mafia.png" alt="faceless vector art of three mafia people in black" />
      <form onSubmit={submit}>
        <h1>Mob Nickname Generator</h1>
        <label htmlFor="name">Your First Name: 
        <input
          type="text"
          name="name"
          value={name}
          onChange={changeHandler}
          required
        />
        </label>
        <button>Get your mob name!</button>
      </form>
      {mobName &&
        <div className="results">
          <p className="name">Your mob name is <span>{mobName}</span>!</p>
          <div className="share">
            <p>Share on Twitter:</p>
            <TwitterShareButton
              url={"https://mob-name.rocococoding.vercel.app/"}
              title={`My mob name is ${mobName}. Get yours now!`}
            >
              <img src="tweet.png" className="tweet" alt="Twitter tweet share icon" />
            </TwitterShareButton>
          </div>
        </div>
      }
      <footer>
        <small>
          Credits: Image by <a href="https://pixabay.com/users/tatutati-3972376/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3153020">Tatutati</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3153020">Pixabay</a>
        </small>
      </footer>
    </main>
  );
}

export default App;
