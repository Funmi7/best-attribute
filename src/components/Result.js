import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4,
  h3,
  p {
    color: white;
    padding: 0px 20px;
  }
  h3 {
    font-size: 40px;
    margin-top: 5px;
  }
  h4 {
    margin-top: 0px;
  }
  .result-details-header {
    font-size: 20px;
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
  margin-top: 30px;
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

        <h4 className="result-details-header">Result Details</h4>
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
