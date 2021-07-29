import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const QuestionCard = styled.div`
  animation: 2s ${keyframes`${fadeIn}`};
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  background: #2d26a8;
  box-shadow: 5px 5px 20px 0 #171d3b;
  width: 50%;
  min-height: 250px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;

  button {
    /* width: 300px; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-basis: 47%;
    height: 70px;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    &:hover {
      background: rgb(45, 55, 72);
      color: white;
    }
  }
  @media screen and (max-width: 870px) {
    width: 80%;
  }
  @media screen and (max-width: 400px) {
    flex-direction: column;

    button {
      flex-basis: auto;
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

const DescriptionText = styled.h4`
  padding: 0px 20px;
`;

const Options = ({ currentQuestion, data, handleOptionClick }) => {
  return (
    <>
      <p>
        Question {currentQuestion + 1} of {data.length}
      </p>
      {currentQuestion <= 9 ? (
        <DescriptionText>Please select your strengths below</DescriptionText>
      ) : (
        <DescriptionText>
          Please select your weaknesses below.Don’t worry about the options, it
          doesn’t mean this is who you are.
        </DescriptionText>
      )}
      <QuestionCard>
        {data[currentQuestion].options.map((option, index) => (
          <>
            <button onClick={() => handleOptionClick(option.personality)}>
              {option.option}
            </button>
          </>
        ))}
      </QuestionCard>
    </>
  );
};

export default Options;
