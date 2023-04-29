import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import "./styles.css";

const players = [
  {
    name: "Nimesh Nuwan Kumara",
    photoUrl: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/176913423_1480279765644929_5025213429234231437_n.jpg?stp=dst-jpg_s552x414&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_ohc=E-LzgddFGRMAX9j4CcU&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfCoaZ67t_RQJHdRtZf9HK2--Ffsz18GKVZL7ilVRq6B0Q&oe=647438D6",
    description:
      "Team Manager, All Rounder, Right Hand Batsman, Legbreak Bowler",
  },
  {
    name: "Hashan Chamilka",
    photoUrl: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t31.18172-8/25790784_853394024823552_5166392079112091708_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=ze9g87NZFQoAX9SHAdE&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfBuo5Cm88YT84wXs4JkoduefBXiXtXuFR39iPYdIEuZWw&oe=6474347B",
    description:
      "Captain, Right Arm Chucking",
  },
  {
    name: "Dilan Sachintha",
    photoUrl: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/271654791_4801220803248892_1727442141301490893_n.jpg?stp=c0.202.1226.1226a_dst-jpg_s552x414&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=nDeqppk5ZxsAX8pKb0N&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfDMBZtUKitxNiz8mjuGTLIefpoCfefk6wxxHu2eQtetAQ&oe=64517777",
    description:
      "Water Boy, Owner of Team Bus",
  },
];

function Home() {
  return (
    <div className="container">
      <header>
        <h1>Galle Efac Cricket Team</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/squad">Squad</Link>
          </li>
        </ul>
      </nav>
      <main>
        <div className="home">
          <img src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/71527062_1012103689129208_3037036491000774656_n.jpg?stp=c0.119.720.720a_dst-jpg_s552x414&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_ohc=xtcp5767JyYAX_wqJDV&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfB9W3fP-QQyKEgqBFmUqP4C3Gdii7ugiZO_ZArmG57qBg&oe=647432A6" alt="Efac Cricket Team" />
        </div>
      </main>
    </div>
  );
}

function Squad() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <div className="container">
      <header>
        <h1>Galle Efac Cricket Team</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/squad">Squad</Link>
          </li>
        </ul>
      </nav>
      <main>
        <div className="squad">
          <ul>
            {players.map((player) => (
              <li key={player.name} onClick={() => handlePlayerClick(player)} style={{ cursor: "pointer" }}>
                {player.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="player-details">
          {selectedPlayer && (
            <>
              <div className="player-photo">
                <img src={selectedPlayer.photoUrl} alt={selectedPlayer.name} />
              </div>
              <div className="player-description">
                <h2>{selectedPlayer.name}</h2>
                <p>{selectedPlayer.description}</p>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/squad" element={<Squad />} />
      </Routes>
    </Router>
  );
}

export default App;
