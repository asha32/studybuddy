
import { useState } from "react";
import Notes from "./components/Notes";
import Quiz from "./components/Quiz";
import Progress from "./components/Progress";
import StudyTimer from "./components/StudyTimer";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginSuccess() {
    setIsLoggedIn(true);
    setCurrentPage("dashboard");
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setCurrentPage("login");
  }

  return (
    <div>
      <nav>
        <h1>Study Buddy ✨</h1>

        <div>
          {isLoggedIn && (
            <>
              <a href="#" onClick={() => setCurrentPage("dashboard")}>
                Dashboard
              </a>
              <a href="#notes">My Notes</a>
              <a href="#quiz">Quiz</a>
              <a href="#progress">Progress</a>
              <a href="#study-timer">Study Timer</a>
            </>
          )}

          {!isLoggedIn ? (
            <>
              <button onClick={() => setCurrentPage("login")}>
                Login
              </button>

              <button onClick={() => setCurrentPage("signup")}>
                Sign Up
              </button>
            </>
          ) : (
            <button onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </nav>

      {currentPage === "login" ? (
        <Login
          onLoginSuccess={handleLoginSuccess}
          onSignupClick={() => setCurrentPage("signup")}
        />
      ) : currentPage === "signup" ? (
        <Signup
          onSignupSuccess={handleLoginSuccess}
          onLoginClick={() => setCurrentPage("login")}
        />
      ) : (
        <>
          <main>
            <section className="welcome-section">
              <div className="welcome-text">
                <p className="welcome-label">
                  YOUR PERSONAL STUDY SPACE
                </p>

                <h2>
                  Make every
                  <br />
                  study session count.
                </h2>

                <p className="welcome-description">
                  Stay organized, test your knowledge, and build better
                  study habits — one day at a time.
                </p>

                <a className="start-button" href="#study-timer">
                  Start Studying →
                </a>
              </div>

              <div className="welcome-decoration">
                <span>📚</span>
                <span>✏️</span>
                <span>🎯</span>
                <div>Small steps lead to big achievements!</div>
              </div>
            </section>

            <section className="dashboard-heading">
              <div>
                <h2>Your Learning Hub</h2>
                <p>
                  Everything you need to study smarter, all in one place.
                </p>
              </div>
            </section>

            <section className="dashboard-grid">
              <div className="dashboard-card notes-card">
                <span className="card-icon">📝</span>
                <h3>My Notes</h3>
                <p>
                  Keep your important ideas and study notes organized.
                </p>
                <a href="#notes">Explore Notes →</a>
              </div>

              <div className="dashboard-card quiz-card">
                <span className="card-icon">🧠</span>
                <h3>Practice Quiz</h3>
                <p>
                  Challenge yourself and see how much you've learned.
                </p>
                <a href="#quiz">Take a Quiz →</a>
              </div>

              <div className="dashboard-card progress-card">
                <span className="card-icon">📈</span>
                <h3>My Progress</h3>
                <p>
                  Review your quiz scores and celebrate your progress.
                </p>
                <a href="#progress">View Progress →</a>
              </div>

              <div className="dashboard-card timer-card">
                <span className="card-icon">⏱️</span>
                <h3>Study Timer</h3>
                <p>
                  Focus on your work with a 25-minute study session.
                </p>
                <a href="#study-timer">Start Focus Time →</a>
              </div>
            </section>

            <section className="motivation-banner">
              <span>🌱</span>
              <div>
                <h3>Progress over perfection.</h3>
                <p>
                  Every minute you spend learning is an investment in yourself.
                </p>
              </div>
            </section>
          </main>

          
          <Notes />
          <Quiz />
          <Progress />
          <StudyTimer />

          <footer className="site-footer">
            <div className="footer-content">
              <div className="footer-brand">
                <h2>Study Buddy ✨</h2>
                <p>
                  Your learning companion for better study habits,
                  organized notes, and continuous progress.
                </p>
              </div>

              <div className="footer-links">
                <h3>Quick Links</h3>
                <a href="#" onClick={() => setCurrentPage("dashboard")}>
                  Dashboard
                </a>
                <a href="#notes">My Notes</a>
                <a href="#quiz">Practice Quiz</a>
                <a href="#progress">My Progress</a>
                <a href="#study-timer">Study Timer</a>
              </div>

              <div className="footer-about">
                <h3>Keep Learning</h3>
                <p>
                  Small steps every day lead to big achievements.
                </p>
                <a href="#study-timer">Start Studying →</a>
              </div>
            </div>

            <div className="footer-bottom">
              <p>
                © {new Date().getFullYear()} Study Buddy. All rights reserved.
              </p>
              <p>Made with 💜 for learners</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
