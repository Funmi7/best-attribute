import React from "react";
import styled from "styled-components";

const Container = styled.div`
  h4,
  h3,
  p {
    color: white;
  }
  h3 {
    font-size: 40px;
  }
`;
const TryAgainButton = styled.div`
  background: #2d26a8;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  color: white;
  margin-bottom: 40px;

  &:hover {
    background: white;
    color: black;
  }
`;

const Result = ({ personalityResult, refreshPage }) => {
  return (
    <Container>
      <>
        <h4>Your most dominant personality type is</h4>
        <h3>
          {personalityResult.firstPersonality} with{" "}
          {personalityResult.firstScore} points
        </h3>

        <h4>Result Details</h4>
        <p>
          Your second personality type is {personalityResult.secondPersonality}{" "}
          with {personalityResult.secondScore} points
        </p>
        <p>
          Your third personality type is {personalityResult.thirdPersonality}{" "}
          with {personalityResult.thirdScore} points
        </p>
        <p>
          Your fourth personality type is {personalityResult.fourthPersonality}{" "}
          with {personalityResult.fourthScore} points
        </p>
        <TryAgainButton onClick={refreshPage}>Try Again</TryAgainButton>
      </>
    </Container>
  );
};

export default Result;
