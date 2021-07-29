import React, { useState } from "react";
import styled from "styled-components";
import { data, personalities } from "../data/Data";

const Container = styled.section`
  background: #080a16;
  height: 100vh;
  width: 100%;
`;

const Heading = styled.h2`
  margin-top: 0px;
  padding-top: 50px;
  color: white;
`;

const QuestionCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  background: repeating-linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.3),
    transparent 1px,
    rgba(0, 0, 0, 0.3) 2px
  );
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
  console.log(showResult);
  console.log(personalityResult);
  return (
    <Container>
      <Heading>What's your personality?</Heading>
      {showResult ? (
        <h3 style={{ color: "white" }}>You you are : {personalityResult}</h3>
      ) : (
        <div>
          <p>
            Question {currentQuestion + 1} of {data.length}
          </p>
          <div>
            {data[currentQuestion].options.map((option) => (
              <button onClick={() => handleOptionClick(option.personality)}>
                {option.option}
              </button>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Questions;
