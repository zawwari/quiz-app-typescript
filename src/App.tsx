import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { GlobalStyle } from "./App.style";
import { fetchQuestions } from "./API";
import { Difficulty, QuestionState } from "./API";
import Wrong from "./audio/audio.mp3";

import Correct from "./audio/applause.mp3";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;
export default function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setuserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setgameOver] = useState(true);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null
  );

  const startTrivia = async () => {
    setLoading(true);
    setgameOver(false);
    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.Easy);
    setQuestions(newQuestions);
    setScore(0);
    setuserAnswers([]);
    setNumber(0);
    setLoading(false);

    console.log(newQuestions);
  };
  const checkAnswer = (selectedVal) => {
    // if (!gameOver) {  debugger;

    const answer = selectedVal;
    const correct = questions[number].correct_answer === answer;
    console.log(correct);
    if (correct) {
      setScore((prev) => prev + 1);
      const audio = new Audio(Correct);
      audio.play();
      setCurrentAudio(audio);
    } else {
      const audio = new Audio(Wrong);
      audio.play();
      setCurrentAudio(audio);
    }

    const answerObject = {
      question: questions[number].question,
      answer,
      correct,
      correctAnswer: questions[number].correct_answer,
    };

    setuserAnswers((userAnswers) => [...userAnswers, answerObject]);
    // }
  };

  const nextQuestion = () => {
    if (currentAudio) {
      currentAudio.pause();
    }

    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setgameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <h1>React Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            Start Quiz
          </button>
        ) : null}

        <p className="score">
          Score <br />
          <span className="rounded">{score}</span>
        </p>
        {loading && <p>Loading Question..</p>}

        {!gameOver && !loading && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number]?.question}
            answers={questions[number]?.answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            correctAnswer={questions[number]?.correct_answer} // Pass this prop!
            callback={checkAnswer}
          />
        )}

        {!gameOver &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 &&
        !loading ? (
          <button className="start" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </div>
    </>
  );
}
