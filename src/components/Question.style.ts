import styled from "styled-components";

export const QuestionCardStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

  button {
    margin-top: 10px;
  }

  p.question {
    padding: 18px 12px;
    border-radius: 8px;
    background: #fcdef8;
    font-weight: 600;
    font-size: 14px;
    border: 2px solid #8d1d80;
    margin-bottom: 50px;
  }

  button {
    width: 100%;
    padding: 14px;
    background: #f6f6f6;
    color: #000000;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 14px;
  }

  button.false-red {
    background: red !important;
    border: red;
  }

  button.true-green {
    background: green;
    border: green;
    color: #ffffff;
    transform: scale(1.2);
    transition: all 0.3s;
  }
`;
