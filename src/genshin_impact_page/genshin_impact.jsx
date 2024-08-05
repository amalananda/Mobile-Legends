import React, { useState } from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./genshin_impact.css";


const gameHolder = [
  {
    nama_game: "Genshin Impact",
  },
];

const GenshinImpactCard = () => {
  const [clickedId, setClickedId] = useState("");

  return (
    <Container>
      <div className="game-genshin">
        {gameHolder.map((data) => {
          return (
            <Link style={{ textDecoration: "none", color: "black" }} to={`/genshin_impact`}>
              <div onClick={() => setClickedId(`${data.nama_game}-id`)}>
                <img className="genshinimpact" src="Genshin_impact_Logo.png" width="125px" />
                <div> {data.nama_game}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default GenshinImpactCard;
