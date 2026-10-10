import { useState } from "react";

//function Quiz(){
//     const [selectedAnswer, setSelectedAnswer] = useState("");

//     return(
//         <div>
//             <h1>Practice Quiz</h1>
//             <p>What is the correct way to create a react component?</p>

//         <div>
//             <button onClick={() => setSelectedAnswer("A")}>
//                 A. function()
//             </button>
//             <button onClick={() => setSelectedAnswer("B")}>
//                 B. function Component()
//             </button>
//             <button onClick={() => setSelectedAnswer("C")}>
//                 C. create component()
//             </button>
//         </div>

//         {selectedAnswer !== "" && (
//             <p>
//                 {selectedAnswer === "B"? "Correct! Great job!"
//                 :"Not quit. Try again!"}
//             </p>
//         )}
//         </div>
//     );
// }

function Quiz() {
    const questions = [
        {
            question: "1.What is the correct way to create a React component?",
            options: ["function()", "function Component()",
                "create component()"], answer: 1,
        },
        {
            question: "2.Whick Hook is used to mange state in React?",
            options: ["useEffect", "useState", "useStyle"], answer: 1,
        },
        {
            question: "3.Which file usually contains the main App Component?",
            options: ["App.jsx", "index.css", "package-lock.json"], answer: 0,
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleAnswer = (index) => {
        if (selectedAnswer !== null)
            return;

        setSelectedAnswer(index);

        if (index === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

    };
    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
        }
        else {
            setFinished(true);
        }
    };
    const restartQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setScore(0);
        setFinished(false);
    };

    if (finished) {
        return (
            <div>
                <h1>Quiz completed</h1>
                <p>Your Score: {score} out of {questions.length}</p>
                <button onClick={restartQuiz}>Try Again</button>
            </div>
        );
    }

    const question = questions[currentQuestion];

    return (
        <div id ="quiz">
            <h1>Practice quiz</h1>
            <p>Question {currentQuestion + 1} of {questions.length}</p>
            <h3>{question.question}</h3>

            <div>
                {question.options.map((option, index) => (
                <button
                    key={option}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                >
                    {option}
                </button>
                ))}
            </div>

            {selectedAnswer !== null &&(
                <p>
                    {selectedAnswer === question.answer
                    ? "Correct! Great job!"
                    : "Not quit. Try the next question!"
                    }
                </p>
            )
            }

            {selectedAnswer !== null &&(
                <button onClick={nextQuestion}>
                    {currentQuestion < questions.length - 1
                    ? "Next question"
                    : "See My score"
                }
                </button>
            )}
        </div>
    )
}

export default Quiz;