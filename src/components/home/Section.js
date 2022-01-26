import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, description, leftButton, rightButton, img }) {
  return (
    <Wrap bgImg={img}>
      <Fade bottom>
        <TextArea>
          <h1>{title}</h1>
          <p>{description}</p>
        </TextArea>
      </Fade>
      <ButtonWrap>
        <ButtonField>
          <Fade left>
            <LeftButton>{leftButton}</LeftButton>
          </Fade>
          <Fade right>
            {rightButton && <RightButton>{rightButton}</RightButton>}
          </Fade>
        </ButtonField>
        <ArrowDown src="/images/down-arrow.svg" />
      </ButtonWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${(props) => `url('${props.bgImg}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TextArea = styled.div`
  padding: 17vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #393c41;
    font-weight: 500;
    font-size: 38px;
  }
  p {
    font-weight: 400;
    font-size: 15px;
    color: #5c5e62;
  }
`;

const ButtonField = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  cursor: pointer;
  background-color: #393c41;
  width: 260px;
  padding: 15px;
  border-radius: 100px;
  display: flex;
  text-transform: uppercase;
  color: #fff;
  margin: 10px;
  align-items: center;
  justify-content: center;
  opacity: 8.5;
  &:hover {
    opacity: 1;
  }
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  color: black;
`;

const ArrowDown = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  -webkit-filter: invert(100%);
  filter: invert(100%);
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Section;
