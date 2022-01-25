import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Icon src="/images/logo.svg" />
      <HeaderLinks>
        <a href="/">Model S</a>
        <a href="/">Model 3</a>
        <a href="/">Model X</a>
        <a href="/">Model Y</a>
        <a href="/">Solar Roof</a>
        <a href="/">Solar Panel</a>
      </HeaderLinks>
      <HeaderOptions>
        <a href="/">Shop</a>
        <a href="/login">Account</a>
        <p href="/">Menu</p>
      </HeaderOptions>
    </Container>
  );
}

const Container = styled.nav`
  padding: 10px;
  height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  right: 0;
  left: 0;
`;

const Icon = styled.img`
  object-fit: contain;
  padding: 20px;
  width: 90px;
`;

const HeaderLinks = styled.div`
  font-weight: 600;
  display: flex;
  a {
    padding: 5px;
    cursor: pointer;
    margin: 15px;
    text-decoration: none;
    color: black;
    &:hover {
      background-color: #615f5f13;
      border-radius: 10px;
    }
  }
  @media (max-width: 1048px) {
    display: none;
  }
`;

const HeaderOptions = styled.div`
  font-weight: 600;
  display: flex;
  a,
  p {
    padding: 5px;
    cursor: pointer;
    margin: 15px;
    text-decoration: none;
    color: black;
    @media (max-width: 400px) {
      margin-right: 50px;
    }
    &:hover {
      background-color: #615f5f13;
      border-radius: 10px;
    }
  }
  @media (max-width: 768px) {
    a {
      display: none;
    }
  }
`;

export default Header;
