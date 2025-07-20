import { QuestionCardStyle } from "./Question.style";

interface propsData {
  question: String;
  answers: String[];
  callback: any;
  userAnswer: AnswerObject | undefined;
  questionNr: Number;
  totalQuestions: Number;
  correctAnswer: string;
}

const QuestionCard: React.FC<propsData> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
  correctAnswer,
}) => {
  return (
    <QuestionCardStyle>
      <p className="number">
        Question: {questionNr}/{totalQuestions}{" "}
      </p>
      <p
        className="question"
        dangerouslySetInnerHTML={{ __html: question }}
      ></p>
      <div>
        {answers &&
          answers.map((answer) => (
            <div>
              <button
                disabled={userAnswer}
                onClick={() => callback(answer)}
                className={`select-answer ${
                  userAnswer
                    ? correctAnswer === answer
                      ? "true-green"
                      : userAnswer.answer === answer
                      ? "false-red"
                      : ""
                    : ""
                }`}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </button>
            </div>
          ))}
      </div>
    </QuestionCardStyle>
  );
};
export default QuestionCard;
