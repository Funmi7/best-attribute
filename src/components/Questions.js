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
  margin-bottom: 40px;

  &:hover {
    background: white;
    color: black;
  }
`;

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [personalityResult, setPersonalityResult] = useState({
    firstPersonality: "",
    secondPersonality: "",
    thirdPersonality: "",
    fourthPersonality: "",
    firstScore: "",
    secondScore: "",
    thirdScore: "",
    fourthScore: "",
  });
  // const [personalityScoreSecond, setPersonalityResultSecond] = useState("");
  // const [personalityScoreThird, se]

  const handleOptionClick = (personality) => {
    personalities.find((attr) => attr.id === personality).points += 1;

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      let finalPersonality = personalities.sort(function (a, b) {
        return b.points - a.points;
      });

      const firstAttr = finalPersonality[0];
      const secondAttr = finalPersonality[1];
      const thirdAttr = finalPersonality[2];
      const fourthAttr = finalPersonality[3];

      setPersonalityResult({
        ...personalityResult,
        firstPersonality: firstAttr.name,
        secondPersonality: secondAttr.name,
        thirdPersonality: thirdAttr.name,
        fourthPersonality: fourthAttr.name,
        firstScore: firstAttr.points,
        secondScore: secondAttr.points,
        thirdScore: thirdAttr.points,
        fourthScore: fourthAttr.points,
      });
      setShowResult(true);
      console.log(personalityResult.firstPersonality);
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
          <h4>Your most dominant personality type is</h4>
          <h3>{personalityResult.firstPersonality} with {personalityResult.firstScore} points</h3>

          <h4>Result Details</h4>
          <p>
            Your second personality type is {personalityResult.secondPersonality}{" "}
            with {personalityResult.secondScore} points
          </p>
          <p>
            Your third personality type is {personalityResult.thirdPersonality} with{" "}
            {personalityResult.thirdScore} points
          </p>
          <p>
            Your fourth personality type is {personalityResult.fourthPersonality}{" "}
            with {personalityResult.fourthScore} points
          </p>
          <TryAgainButton onClick={refreshPage}>Try Again</TryAgainButton>
        </>
      ) : (
        <>
          <p>
            Question {currentQuestion + 1} of {data.length}
          </p>
          {currentQuestion <= 9 ? (
            <h4>Please select your strengths below</h4>
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
