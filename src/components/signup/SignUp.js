import React, { useState } from "react";
import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lName, setLName] = useState("");
  const [fName, setFName] = useState("");

  return (
    <Container>
      <Header>
        <img src="/images/logo.svg" alt="logo" />
        <LanguageField>
          <LanguageIcon />
          <p>en-US</p>
        </LanguageField>
      </Header>
      <SignIn>
        <h1>Sign Up</h1>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          placeholder="Enter First Name..."
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          value={lName}
          placeholder="Enter Last Name..."
          onChange={(e) => setLName(e.target.value)}
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Enter Email Address..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Enter Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <SignInButton>sign up</SignInButton>
        <Divider>
          <hr /> <span>OR</span>
          <hr />
        </Divider>
        <CreateAccountButton to="/login">log in</CreateAccountButton>
      </SignIn>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.nav`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  img {
    height: 25px;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  hr {
    width: 40%;
    height: 0;
  }
  span {
    font-weight: 500;
  }
`;

const LanguageField = styled.div`
  display: flex;
  p {
    font-weight: 500;
  }
`;

const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10vh;
  gap: 20px;
  h1 {
    margin-right: 200px;
  }
  label {
    color: #5c5e62;
    margin-right: 200px;
    font-weight: 500;
  }
  input {
    border: #f4f4f4;
    outline: none;
    padding: 12px 20px;
    width: 330px;
    border-radius: 40px;
    margin-bottom: 30px;
    font-weight: 500;
    @media (max-width: 768px) {
      width: 300px;
    }
    &:focus {
      border: 1px solid #d6d6d6;
      transition: all 0.2s;
    }
  }
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const SignInButton = styled(Link)`
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

const CreateAccountButton = styled(SignInButton)`
  border: 3px solid black;
  background-color: white;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export default SignUp;
