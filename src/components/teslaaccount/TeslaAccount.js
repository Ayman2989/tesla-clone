import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Car from "./Car";
import { logout, selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";

function TeslaAccount() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
    history.push("/");
  };

  return (
    <Container>
      <Header>
        <Link to="/">
          <Icon src="/images/logo.svg" />
        </Link>
        <HeaderLinks>
          <Link>MODEL S</Link>
          <Link>MODEL 3</Link>
          <Link>MODEL X</Link>
          <Link>MODEL Y</Link>
          <Link>SOLAR ROOFS</Link>
          <Link>SOLAR PANELS</Link>
          <Link>SHOP</Link>
          <Link>ACCOUNT</Link>
          <p>MENU</p>
        </HeaderLinks>
      </Header>
      <Banner>
        <Name>{user?.displayName + "'s"} Tesla</Name>
        <BannerLinks>
          <Link to="/">Home</Link>
          <Link>Account</Link>
          <Link>History</Link>
          <Link onClick={signOut}>Sign Out</Link>
        </BannerLinks>
      </Banner>
      <Car
        img="/images/header-nocar-models@2x.avif"
        model="Model-S"
        leftButton="order"
        rightButton="test drive"
      />
      <Car
        img="/images/ezgif-6-ab241f5907.jpg"
        model="Model-X"
        leftButton="order"
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
  display: flex;
  p,
  a {
    color: #fff;
    padding: 5px;
    cursor: pointer;
    margin: 10px;
    text-decoration: none;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    a {
      display: none;
    }
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
