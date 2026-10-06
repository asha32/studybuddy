function App() {
  return (
    <div>
      <nav>
        <h1>Study Buddy</h1>

        <div>
          <a href="#">Dashboard</a>
          <a href="#">My Notes</a>
          <a href="#">Quiz</a>
          <a href="#">Progress</a>
          <a href="#">Study Timer</a>
        </div>
      </nav>

      <main>
        <h2>Welcome to Study Buddy</h2>
        <p>Your Smart Study & Quiz Companion</p>

        <section>
          <div>
            <h3>My Notes</h3>
            <p>Organize and Manage your study notes</p>
            <button>View Notes</button>
          </div>

          <div>
            <h3>Practice Quiz</h3>
            <p>Test your knowledge with practice questions</p>
            <button>Start Quiz</button>
          </div>

          <div>
            <h3>My Progress</h3>
            <p>Track your quiz scores and study progress</p>
            <button>View Progress</button>
          </div>

          <div>
            <h3>Study TImer</h3>
            <p>Focus with a simple Pomodoro study timer</p>
            <button>Start Timer</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;