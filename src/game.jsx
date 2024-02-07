import React, { useState } from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

const gameHolder = [
  {
    nama_game: "Mobile Legends: Bang Bang",
  },
];

const MobileLegendCard = () => {
  const [clickedId, setClickedId] = useState("");

  return (
    <Container>
      <div className="game-flex">
        {gameHolder.map((data) => {
          return (
            <Link style={{ textDecoration: "none", color: "black" }} to={`/mobile_legend`}>
              <div onClick={() => setClickedId(`${data.nama_game}-id`)}>
                <img className="mobilelegend" src="Mobile-Legend.jpg" width="125px" />
                <div> {data.nama_game}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default MobileLegendCard;
