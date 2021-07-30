import React, { useState } from "react";
import styled from "styled-components";
import { data, personalities } from "../data/Data";
import personalityImage from "../images/personality-illust-1.svg";
import Options from "./Options";

import Result from "./Result";

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
    font-size: 40px;
  }
`;

const Heading = styled.h2`
  margin-top: 0px;
  padding-top: 50px;
  color: white;

  @media screen and (max-width: 307px){
    padding: 30px 15px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 400px;
  }
  @media screen and (max-width: 307px) {
    padding: 10px 15px;
    img {
      width: 100%;
    }
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
        <Result
          refreshPage={refreshPage}
          personalityResult={personalityResult}
        />
      ) : (
        <Options
          data={data}
          currentQuestion={currentQuestion}
          handleOptionClick={handleOptionClick}
        />
      )}
    </Container>
  );
};

export default Questions;
