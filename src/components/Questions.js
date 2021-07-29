import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { data, personalities } from "../data/Data";
import personalityImage from "../images/personality-illust-1.svg";
import { fadeIn } from "react-animations";

const Container = styled.section`
  background: #080a16;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1,
  h2,
  h3,
  h4,
  p {
    color: white;
  }
  h3 {
    /* color: #2d26a8; */
    font-size: 40px;
  }
`;

const Heading = styled.h2`
  margin-top: 0px;
  padding-top: 50px;
  color: white;
`;

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

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 400px;
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

  &:hover {
    background: white;
    color: black;
  }
`;

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [personalityResult, setPersonalityResult] = useState("");

  const handleOptionClick = (personality) => {
    personalities.find((attr) => attr.id === personality).points += 1;

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      let finalPersonality = personalities.sort(function (a, b) {
        return b.points - a.points;
      })[0];
      setPersonalityResult(finalPersonality.name);
      setShowResult(true);
    }
  };

  const refreshPage = () => {
    window.location.reload();
    return false;
  };
  console.log(showResult);
  console.log(personalityResult);
  return (
    <Container>
      <Heading>What's your personality?</Heading>
      <ImageWrapper>
        <img src={personalityImage} alt="personality illustration" />
      </ImageWrapper>
      {showResult ? (
        <>
          <h4>You are </h4>
          <h3>{personalityResult.toUpperCase()}</h3>
          <TryAgainButton onClick={refreshPage}>Try Again</TryAgainButton>
        </>
      ) : (
        <>
          <p>
            Question {currentQuestion + 1} of {data.length}
          </p>
          {currentQuestion <= 9 ? (
            <h4>Please select your strenghts below</h4>
          ) : (
            <h4>
              Please select your weaknesses below.Don’t worry about the options,
              it doesn’t mean this is who you are.
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
      )}
    </Container>
  );
};

export default Questions;
