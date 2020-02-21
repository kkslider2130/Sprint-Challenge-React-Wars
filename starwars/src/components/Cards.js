import React from "react";
import CardDiv, { CardImg } from "./styledComponents/Cardstyled";

function Card(props) {
  return (
    <CardDiv>
      <CardImg src={props.image} alt="star wars character" />

      <div>
        <h2>{props.name}</h2>
        <p>Species: {props.species}</p>
        <p>Homeworld: {props.homeworld}</p>
      </div>
    </CardDiv>
  );
}
export default Card;
