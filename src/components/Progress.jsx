import { useEffect, useState } from "react";

function Progress() {
    // return(
    //     <div id = "progress">
    //         <h1>My Progress</h1>
    //         <p>Track your quiz scores and study progress.</p>

    //         <div>
    //             <h3>Total Quiz Attempts</h3>
    //             <p>0</p>
    //         </div>
    //         <div>
    //             <h3>Best Score</h3>
    //             <p>0</p>
    //         </div>
    //     </div>
    // );

    const [attempts, setAttempts] = useState([]);

    useEffect(() => {
        const savedAttempts = JSON.parse(
            localStorage.getItem("quizAttempts") || "[]"
        );

        setAttempts(savedAttempts);
    }, []);

    const totalAttempts = attempts.length;

    const bestScore =
        totalAttempts > 0
            ? Math.max(
                ...attempts.map(
                    (attempt) => (attempt.score / attempt.total) * 100))
            : 0;

    return (
        <div id="progress">
            <h1>My Progress</h1>
            <p>Track your quiz scores and study progress.</p>

            <div>
                <h3>Total Quiz Attempts</h3>
                <p>{totalAttempts}</p>
            </div>

            <div>
                <h3>Best Score</h3>
                <p>{bestScore.toFixed(0)}%</p>
            </div>

            <div>
                <h3>Quiz History</h3>

                {attempts.length === 0 ? (
                    <p>You havent completd any quizes yet</p>) :
                    (attempts.map((attempt, index) => (
                        <p key={index}>
                            Attempt {index + 1}: {attempt.score} out of{" "}
                            {attempt.total} - {attempt.date}
                        </p>
                    )))}
            </div>
        </div>
    );
}

export default Progress;