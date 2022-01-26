import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Car({ img, model, leftButton, rightButton }) {
  return (
    <Wrap>
      <hr />
      <CarImg src={img} />
      <Model>{model}</Model>

      <Buttons>
        <LeftButton>{leftButton}</LeftButton>
        <RightButton>{rightButton}</RightButton>
      </Buttons>

      <Description>
        <span>Request a Call</span> to speak with a product specialist, value
        your trade-in or apply for leasing
      </Description>
    </Wrap>
  );
}

const Wrap = styled.div`
  hr {
    color: black;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40vh;
`;

const CarImg = styled.img`
  object-fit: contain;
  width: 900px;
`;

const Model = styled.h2`
  padding-bottom: 20px;
`;

const Buttons = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3e6ae1;
  width: 360px;
  text-transform: uppercase;
  padding: 10px;
  border-radius: 40px;
  color: white;
  outline: none;
  margin: 10px;
  border: none;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all.4s;
  &:hover {
    background-color: #3457b1;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const RightButton = styled(LeftButton)`
  border: 3px solid black;
  background-color: white;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Description = styled.p`
  span {
    color: blue;
    cursor: pointer;
  }
`;

export default Car;
