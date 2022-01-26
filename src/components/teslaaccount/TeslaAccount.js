import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Car from "./Car";

function TeslaAccount() {
  return (
    <Container>
      <Header>
        <Icon src="/images/logo.svg" />
        <HeaderLinks>
          <Link>MODEL S</Link>
          <Link>MODEL 3</Link>
          <Link>MODEL X</Link>
          <Link>MODEL Y</Link>
          <Link>SOLAR ROOFS</Link>
          <Link>SOLAR PANELS</Link>
          <Link>SHOP</Link>
          <Link>ACCOUNT</Link>
          <Link>MENU</Link>
        </HeaderLinks>
      </Header>
      <Banner>
        <Name>Ayman's Tesla</Name>
        <BannerLinks>
          <Link>Home</Link>
          <Link>Account</Link>
          <Link>History</Link>
          <Link>Sign Out</Link>
        </BannerLinks>
      </Banner>
      <Car
        img="/images/header-nocar-models@2x.avif"
        model="Model-S"
        leftButton="order"
        rightButton="test drive"
      />
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  height: 100vh;
`;

const Header = styled.nav`
  height: 60px;
  background-color: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLinks = styled.div`
  a {
    color: #fff;
    padding: 5px;
    cursor: pointer;
    margin: 10px;
    text-decoration: none;
    font-weight: 600;
  }
`;

const Icon = styled.img`
  width: 90px;
  padding: 20px;
  -webkit-filter: invert(100%);
  filter: invert(100%);
`;

const Banner = styled.header`
  padding: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.h2`
  padding-left: 5vw;
`;

const BannerLinks = styled.div`
  padding-right: 5vw;
  a {
    text-decoration: none;
    color: gray;
    margin: 5px;
    &:hover {
      color: black;
    }
  }
`;

export default TeslaAccount;
