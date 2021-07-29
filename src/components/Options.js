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
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  button {
    width: 300px;
    height: 70px;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    &:hover {
      background: rgb(45, 55, 72);
      color: white;
    }
  }
`;


const Options = ({ currentQuestion, data, handleOptionClick }) => {
  return (
    <>
      <p>
        Question {currentQuestion + 1} of {data.length}
      </p>
      {currentQuestion <= 9 ? (
        <h4>Please select your strengths below</h4>
      ) : (
        <h4>
          Please select your weaknesses below.Don’t worry about the options, it
          doesn’t mean this is who you are.
        </h4>
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

export default Options