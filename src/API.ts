import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  question: string;
  incorrect_answers: string[];
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
}

export const fetchQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const response = await (
    await fetch(
      `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    )
  ).json();

  return response.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question?.incorrect_answers,
      question?.correct_answer,
    ]),
  }));
};
