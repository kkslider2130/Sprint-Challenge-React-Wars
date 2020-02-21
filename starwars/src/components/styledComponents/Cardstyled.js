import styled from "styled-components";

const CardDiv = styled.div`
  width: 250px;
  margin: 1rem;
  background-color: black;
  border-radius: 6px;
  border: 1px solid yellow;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: white;
  display: grid;
  grid-template-rows: 250px 100px auto;
  grid-gap: 1rem;

  align-items: center;
  padding: 1.25rem;
`;

const CardImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  justify-self: center;
  border: 3px solid yellow;
`;

export default CardDiv;
export { CardImg };
